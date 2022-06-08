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
import { useAccount } from 'wagmi';
import InfoEditButton from './InfoEditButton';

function BasicInfoBox() {
  const { data: account } = useAccount();
  const profile = useProfileStore((state) => state.profile);
  if (profile)
    return (
      <div className="container flex flex-row justify-start">
        <div className="mr-8">
          <div className="relative">
            <img
              src="https://gravatar.com/avatar/a0b496b35a6d0adabf6e6413a722122a?s=400&d=robohash&r=x"
              className="w-full h-auto max-w-[197px] max-h-[197px] rounded-full bg-gray-200"
            />
            <div className="absolute w-4 h-4 right-[10%] top-[80%] rounded-full bg-[#00BA88]"></div>
          </div>
        </div>
        <div className="grow">
          <h3 className="inline-flex items-center text-xl font-semibold break-all">
            {account?.address}
            <div className="ml-2 w-5 h-5 rounded-full flex justify-center items-center bg-primary text-light  mr-1">
              <IconTick className="w-full h-full" />
            </div>
          </h3>
          <p className="mt-1 text-lg">UI/UX Designer</p>
          <div className="mt-4 inline-flex items-center gap-2">
            <div className="px-3 py-1.5 text-sm font-medium bg-blue-50 dark:bg-midnight-800 rounded-xl">
              Contact Now
            </div>
            <div className="px-3 py-1.5 text-sm font-medium bg-blue-50 dark:bg-midnight-800 rounded-xl">
              Freelancer
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 mt-4">
            <div className="inline-flex items-center mr-4">
              <IconPhone className="w-5 h-5 mr-2" />
              <span className="text-sm dark:text-light">0944 236 556</span>
            </div>
            <div className="inline-flex items-center mr-4">
              <IconMail className="w-5 h-5 mr-2" />
              <span className="text-sm dark:text-light">test@zikjob.com</span>
            </div>
            <div className="inline-flex items-center mr-4">
              <IconGender className="mr-2" />
              <span className="text-sm dark:text-light">Male</span>
            </div>
            <div className="inline-flex items-center mr-4">
              <IconEarth className="mr-2" />
              <span className="text-sm dark:text-light">Vietnam</span>
            </div>
            <div className="inline-flex items-center mr-4 dark:text-primary">
              <IconVideo className="mr-2" />
              <a
                className="text-sm text-primary"
                href="https://www.youtube.com/watch?v=ZfKHa7KM7uA"
                target="_blank"
                rel="noreferrer"
              >
                https://www.youtube.com/watch?v=ZfKHa7KM7uA
              </a>
            </div>
          </div>
          <div className="flex justify-start items-center mt-4">
            <FavoriteButton />
            <ShareButton />
            <button className="px-4 py-2 rounded-lg bg-gradient-to-b from-blue-400 to-blue-800 text-light">
              <LogoNoText className="w-6 h-6" />
              <span>0 ZJS</span>
            </button>
          </div>
        </div>
        <InfoEditButton />
      </div>
    );

  return (
    <div className="container flex flex-row justify-start">
      <div className="mr-8">
        <div className="relative">
          <AvatarDefault className="w-full h-auto max-w-[197px] max-h-[197px] text-gray-300" />
          <div className="absolute w-4 h-4 right-[10%] top-[80%] rounded-full bg-[#00BA88]"></div>
        </div>
      </div>
      <div className="grow">
        <h3 className="text-xl font-semibold break-all">{account?.address}</h3>
        <div className="flex flex-col justify-center items-start gap-2 mt-4">
          <div className="inline-flex items-center">
            <IconPhone className="w-5 h-5 mr-2" />
            <span className="text-sm text-gray-300 dark:text-midnight-400">
              Undefined
            </span>
          </div>
          <div className="inline-flex items-center">
            <IconMail className="w-5 h-5 mr-2" />
            <span className="text-sm text-gray-300 dark:text-midnight-400">
              Undefined
            </span>
          </div>
          <div className="inline-flex items-center">
            <IconGender className="mr-2" />
            <span className="text-sm text-gray-300 dark:text-midnight-400">
              Undefined
            </span>
          </div>
          <div className="inline-flex items-center">
            <IconEarth className="mr-2" />
            <span className="text-sm text-gray-300 dark:text-midnight-400">
              Undefined
            </span>
          </div>
        </div>
        <div className="flex justify-start items-center mt-4">
          <FavoriteButton />
          <ShareButton />
          <button className="px-4 py-2 rounded-lg bg-gradient-to-b from-blue-400 to-blue-800 text-light">
            <LogoNoText className="w-6 h-6" />
            <span>0 ZJS</span>
          </button>
        </div>
      </div>
      <InfoEditButton />
    </div>
  );
}

export default BasicInfoBox;
