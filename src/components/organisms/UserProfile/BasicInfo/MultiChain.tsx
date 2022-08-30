import { IconChainBSC, IconChainCoinEx, IconChainLukso } from '@/assets/svg';
import { ZeroAddress } from '@/constants';
import useProfileStore from '@/stores/useProfileStore';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

function MultiChain() {
  const [checkZikkieMultichain] = useProfileStore((state) => [
    state.checkZikkieMultichain,
  ]);
  const { address, isConnected } = useAccount();
  const [multichainSupport, setMultichainSupport] = useState<
    Record<number | string, boolean>
  >({
    97: false,
    2828: false,
  });

  const checkMultichainSupport = async (address: string) => {
    const multichainSupportChecked = await checkZikkieMultichain(address);
    const updateMultichainSupport = { ...multichainSupport };
    for (const chainId in multichainSupportChecked) {
      updateMultichainSupport[chainId] =
        multichainSupportChecked[chainId] != '' &&
        multichainSupportChecked[chainId] != ZeroAddress;
    }
    setMultichainSupport(updateMultichainSupport);
  };

  useEffect(() => {
    if (isConnected && address) {
      checkMultichainSupport(address);
    }
  }, [isConnected, address]);

  return (
    <div className="flex flex-row justify-center items-center gap-2 mt-0 lg:mt-4">
      <button
        className="flex-1 flex justify-center items-center bg-gradient-to-b hover:bg-gradient-to-r from-blue-400 to-blue-800 rounded-md py-1 lg:py-2 disabled:bg-none disabled:bg-gray-100 dark:disabled:bg-midnight-700 disabled:text-light dark:disabled:text-midnight-400"
        disabled={!multichainSupport[97]}
      >
        <IconChainBSC />
      </button>
      <button
        className="flex-1 flex justify-center items-center bg-gradient-to-b hover:bg-gradient-to-r from-blue-400 to-blue-800 rounded-md py-1 lg:py-2 disabled:bg-none disabled:bg-gray-100 dark:disabled:bg-midnight-700 disabled:text-light dark:disabled:text-midnight-400"
        disabled={!multichainSupport[2828]}
      >
        <IconChainLukso />
      </button>
      <button
        className="flex-1 flex justify-center items-center bg-gradient-to-b hover:bg-gradient-to-r from-blue-400 to-blue-800 rounded-md py-1 lg:py-2 disabled:bg-none disabled:bg-gray-100 dark:disabled:bg-midnight-700 disabled:text-light dark:disabled:text-midnight-400"
        disabled
      >
        <IconChainCoinEx />
      </button>
    </div>
  );
}

export default MultiChain;
