import toast from 'react-hot-toast';
import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { ZeroAddress } from '@/constants';
import { Profile, ProfileState, ZikJobProfile } from '@/types/profile';
import ZikJobAuthJson from '@/web3/contracts/Account/ZikJobAuth.sol/ZikJobAuth.json';
import ZikkieJson from '@/web3/contracts/Account/Zikkie.sol/Zikkie.json';
import ZikJobProfileMetadata from '@/web3/schemas/ZikJobProfileMetadata.json';
import {
  encodeKeyValue,
  decodeKeyValue,
} from '@erc725/erc725.js/build/main/src/lib/utils';
import { fetchSigner, getContract, getProvider } from '@wagmi/core';
import {
  makeLsp3ProfileJson,
  makeZikJobProfileJson,
  parseZikJobProfileJson,
} from '@/utils/makeJson';
import { storeJson, update } from '@/apis/api';
import contracts from '@/constants/contracts';
import { ethers } from 'ethers';

const useProfileStore = create<ProfileState>()(
  devtools(
    immer((set, get) => ({
      isLogged: Boolean(0),
      zikkieAddress: '',
      profile: {},
      setIsLogged: (isLogged: boolean) =>
        set((state) => {
          state.isLogged = isLogged;
          if (!isLogged) {
            state.zikkieAddress = '';
            state.profile = undefined;
          }
        }),
      setProfile: async (updatedProfile?: Profile, callUpdate = true) => {
        if (
          callUpdate &&
          (updatedProfile?.fullName ||
            updatedProfile?.email ||
            updatedProfile?.phone)
        ) {
          await update({
            name: updatedProfile?.fullName,
            email: updatedProfile?.email,
            phone: updatedProfile?.country ? updatedProfile?.phone : '',
          });
        }

        const oldProfile = get().profile;
        set((state) => {
          state.profile = { ...oldProfile, ...updatedProfile };
        });
      },
      checkZikkie: async (chainId) => {
        try {
          console.log(chainId);
          if (!Object.keys(contracts).includes(chainId.toString()))
            throw new Error('Chain not support!');

          const ZikJobAuthAddress = contracts[chainId].address;
          const signer = await fetchSigner();

          if (signer && ZikJobAuthAddress) {
            const zikjobAuthContract = getContract({
              addressOrName: ZikJobAuthAddress,
              contractInterface: ZikJobAuthJson.abi,
              signerOrProvider: signer,
            });

            const zikkieProfileAddress: string =
              await zikjobAuthContract.userToZikkie(await signer.getAddress());
            console.log('Your Zikkie Profile is: ' + zikkieProfileAddress);

            set((state) => {
              state.zikkieAddress =
                zikkieProfileAddress == ZeroAddress ? '' : zikkieProfileAddress;
            });
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          toast.error(error.message);
          console.error(error);
        }
      },
      checkZikkieMultichain: async (address: string) => {
        const multichainSupport: Record<number, string> = {};
        try {
          for (const chainId in contracts) {
            const contract = contracts[chainId];
            const ZikJobAuthAddress = contract.address;

            if (ZikJobAuthAddress) {
              const provider = getProvider({ chainId: parseInt(chainId) });
              const zikjobAuthContract = new ethers.Contract(
                ZikJobAuthAddress,
                ZikJobAuthJson.abi,
                provider
              );

              const zikkieProfileAddress: string =
                await zikjobAuthContract.userToZikkie(address);

              multichainSupport[chainId] = zikkieProfileAddress;
              console.log(
                `Your Zikkie Profile on chainId (${chainId}) is: ${zikkieProfileAddress}`
              );
            }
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          toast.error(error.message);
          console.error(error);
        }

        return multichainSupport;
      },
      createZikkie: async (chainId) => {
        console.log(chainId);
        if (!Object.keys(contracts).includes(chainId.toString()))
          throw new Error('Chain not support!');

        const ZikJobAuthAddress = contracts[chainId].address;
        if (!ZikJobAuthAddress)
          throw new Error('ZikJobAuth address not setting!');

        const signer = await fetchSigner();

        const zikjobAuthContract = getContract({
          addressOrName: ZikJobAuthAddress,
          contractInterface: ZikJobAuthJson.abi,
          signerOrProvider: signer,
        });

        const zikkieProfileAddress: string =
          await zikjobAuthContract.callStatic.createZikkie();
        await zikjobAuthContract.createZikkie();
        console.log('Your Zikkie Profile is: ' + zikkieProfileAddress);

        set((state) => {
          state.zikkieAddress =
            zikkieProfileAddress == ZeroAddress ? '' : zikkieProfileAddress;
        });
      },
      loadZikkie: async () => {
        try {
          const zikkieProfileAddress = get().zikkieAddress;
          const signer = await fetchSigner();

          if (
            zikkieProfileAddress != '' &&
            zikkieProfileAddress != ZeroAddress &&
            signer
          ) {
            const zikkieContract = getContract({
              addressOrName: zikkieProfileAddress,
              contractInterface: ZikkieJson.abi,
              signerOrProvider: signer,
            });

            const zikjobProfileSchema = ZikJobProfileMetadata[4];
            const dataProfileEncoded = await zikkieContract['getData(bytes32)'](
              zikjobProfileSchema.key
            );

            if (dataProfileEncoded == '0x')
              throw new Error('Please make Zik Profile then sync');

            const dataProfileDecoded = decodeKeyValue(
              zikjobProfileSchema.valueContent,
              zikjobProfileSchema.valueType,
              dataProfileEncoded
            );

            console.log(`ZikJob Profile URL: ${dataProfileDecoded.url}`);
            if (dataProfileDecoded.url) {
              const zikjobProfileJson: ZikJobProfile = await fetch(
                dataProfileDecoded.url
              ).then((res) => res.json());

              const oldProfile = get().profile;
              const newProfile = parseZikJobProfileJson(zikjobProfileJson);

              set((state) => {
                state.profile = { ...oldProfile, ...newProfile };
              });
            }
          }

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          toast.error(error.message);
          console.error(error);
        }
      },
      updateZikkie: async () => {
        try {
          const zikkieAddress = get().zikkieAddress;
          const profileState = get().profile;
          const signer = await fetchSigner();

          if (signer) {
            const zikkieContract = getContract({
              addressOrName: zikkieAddress,
              contractInterface: ZikkieJson.abi,
              signerOrProvider: signer,
            });

            // Universal Profile - Lukso
            const lsp3ProfileSchema = ZikJobProfileMetadata[1];

            const lsp3ProfileJson = makeLsp3ProfileJson({
              name: profileState?.fullName ?? '',
              description: profileState?.introduce,
            });

            // ZikJob Profile
            const zikjobProfileSchema = ZikJobProfileMetadata[4];
            const zikjobProfileJson = makeZikJobProfileJson(profileState ?? {});

            const storeJsonRes = await storeJson([
              lsp3ProfileJson,
              zikjobProfileJson,
            ]);

            if (storeJsonRes.data) {
              const lsp3ProfileValue = encodeKeyValue(
                lsp3ProfileSchema.valueContent,
                lsp3ProfileSchema.valueType,
                {
                  json: lsp3ProfileJson,
                  url: storeJsonRes.data.urls[0],
                }
              );

              const zikjobProfileValue = encodeKeyValue(
                zikjobProfileSchema.valueContent,
                zikjobProfileSchema.valueType,
                {
                  json: zikjobProfileJson,
                  url: storeJsonRes.data.urls[1],
                }
              );

              await zikkieContract['setData(bytes32[],bytes[])'](
                [lsp3ProfileSchema.key, zikjobProfileSchema.key],
                [lsp3ProfileValue, zikjobProfileValue]
              );

              toast.success('Syncing Zikkie Profile.');
            }
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          toast.error(error.message);
          console.error(error);
        }
      },
    })),
    { name: 'profile' }
  )
);

export default useProfileStore;
