import {
  AvatarDefault,
  IconEarth,
  IconGender,
  IconMail,
  IconPhone,
  IconTick,
  IconVideo,
  LogoNoText,
} from '@/assets/svg';
import FavoriteButton from '@/components/molecules/FavoriteButton';
import ShareButton from '@/components/molecules/ShareButton';
import useProfileStore from '@/stores/useProfileStore';
import { parseWalletAddress } from '@/utils';
import { useAccount } from 'wagmi';
import EditInfoButton from './EditInfoButton';

function MobileBasicInfoBox() {
  const { data: account } = useAccount();
  const profile = useProfileStore((state) => state.profile);
  return (
    <div className="container flex flex-col gap-3 justify-start mb-7">
      <div className="flex flex-row justify-start items-start">
        <div className="max-w-[83px] max-h-[83px]">
          <div className="relative mr-3">
            {profile?.avatar ? (
              <img
                src="https://gravatar.com/avatar/a0b496b35a6d0adabf6e6413a722122a?s=400&d=robohash&r=x"
                className="w-full h-auto rounded-full bg-gray-200"
              />
            ) : (
              <AvatarDefault className="w-full h-auto text-gray-300" />
            )}
            <div className="absolute w-2 h-2 right-[10%] top-[80%] rounded-full bg-[#00BA88]"></div>
          </div>
        </div>
        <div className="grow">
          <h3 className="flex items-start text-lg font-medium break-all">
            {profile?.fullName ?? parseWalletAddress(account?.address)}
            {profile?.isVerified && (
              <div className="inline-flex items-center text-primary">
                <div className="w-6 h-6 rounded-full flex justify-center items-center bg-primary text-light  mr-1">
                  <IconTick className="w-full h-full" />
                </div>
              </div>
            )}
          </h3>
          {profile?.headline && <p className="mt-1 text-sm">UI/UX Designer</p>}
          {(profile?.canContact || profile?.isFreelancer) && (
            <div className="mt-1 inline-flex items-center gap-2">
              {profile?.canContact && (
                <div className="px-3 py-1.5 text-xs bg-blue-50 dark:bg-midnight-800 rounded-xl">
                  Contact Now
                </div>
              )}
              {profile?.isFreelancer && (
                <div className="px-3 py-1.5 text-xs bg-blue-50 dark:bg-midnight-800 rounded-xl">
                  Freelancer
                </div>
              )}
            </div>
          )}
        </div>
        <EditInfoButton />
      </div>
      <div className="flex">
        <button className="inline-flex justify-center items-center px-2 py-1 rounded-lg bg-gradient-to-b from-blue-400 to-blue-800 text-light">
          <LogoNoText className="w-6 h-6 mr-1" />0 ZJS
        </button>
      </div>
      <div className="flex flex-col gap-2 justify-start items-start">
        {profile?.phone && (
          <div className="inline-flex items-center mr-4">
            <IconPhone className="w-5 h-5 mr-2" />
            <span className="text-sm dark:text-light">{profile.phone}</span>
          </div>
        )}
        {profile?.email && (
          <div className="inline-flex items-center mr-4">
            <IconMail className="w-5 h-5 mr-2" />
            <span className="text-sm dark:text-light">{profile.email}</span>
          </div>
        )}
        {profile?.gender && (
          <div className="inline-flex items-center mr-4">
            <IconGender className="mr-2" />
            <span className="text-sm dark:text-light">{profile.gender}</span>
          </div>
        )}
        {profile?.country && (
          <div className="inline-flex items-center mr-4">
            <IconEarth className="mr-2" />
            <span className="text-sm dark:text-light">{profile.country}</span>
          </div>
        )}
        {profile?.videoUrl && (
          <div className="inline-flex items-center mr-4 text-primary">
            <IconVideo className="mr-2" />
            <a
              className="text-sm text-primary"
              href={profile.videoUrl}
              target="_blank"
              rel="noreferrer"
            >
              {profile.videoUrl}
            </a>
          </div>
        )}
        {profile?.industries && (
          <p className="text-sm">
            Industries:{' '}
            <span className="font-medium">{profile.industries.join(', ')}</span>
          </p>
        )}
        {profile?.introduce && (
          <div className="inline-flex items-center break-all">
            {profile.introduce.length > 300 ? (
              <p className="text-sm break-word">
                {profile.introduce}
                {'...'}
                <span className="text-primary font-medium">Read more</span>
              </p>
            ) : (
              <p className="text-sm">{profile.introduce}</p>
            )}
          </div>
        )}
      </div>
      <div className="flex justify-start items-center">
        <FavoriteButton />
        <ShareButton />
      </div>
    </div>
  );
}

export default MobileBasicInfoBox;
