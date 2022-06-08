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

function MobileBasicInfoBox() {
  const { data: account } = useAccount();
  const profile = useProfileStore((state) => state.profile);
  if (profile)
    return (
      <div className="container flex flex-col gap-3 justify-start mb-7">
        <div className="flex flex-row justify-start items-start">
          <div className="max-w-[83px] max-h-[83px] mr-3">
            <div className="relative">
              <img
                src="https://gravatar.com/avatar/a0b496b35a6d0adabf6e6413a722122a?s=400&d=robohash&r=x"
                className="w-full h-auto rounded-full bg-gray-200"
              />
              <div className="absolute w-2 h-2 right-[10%] top-[80%] rounded-full bg-[#00BA88]"></div>
            </div>
          </div>
          <div className="grow">
            <h3 className="flex items-start text-lg font-medium break-all">
              {account?.address}
              <div className="inline-flex items-center text-primary">
                <div className="w-6 h-6 rounded-full flex justify-center items-center bg-primary text-light  mr-1">
                  <IconTick className="w-full h-full" />
                </div>
              </div>
            </h3>
            <p className="mt-1 text-sm">UI/UX Designer</p>
            <div className="mt-1 inline-flex items-center gap-2">
              <div className="px-3 py-1.5 text-xs bg-blue-50 dark:bg-midnight-800 rounded-xl">
                Contact Now
              </div>
              <div className="px-3 py-1.5 text-xs bg-blue-50 dark:bg-midnight-800 rounded-xl">
                Freelancer
              </div>
            </div>
          </div>
          <InfoEditButton />
        </div>
        <div className="flex">
          <button className="inline-flex justify-center items-center px-2 py-1 rounded-lg bg-gradient-to-b from-blue-400 to-blue-800 text-light">
            <LogoNoText className="w-6 h-6 mr-1" />0 ZJS
          </button>
        </div>
        <div className="flex flex-col gap-2 justify-start items-start">
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
          <div className="inline-flex items-center mr-4 text-primary">
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
          <p className="text-sm">
            Industries: <span className="font-medium">Java, C#, Unity</span>
          </p>
          <p className="text-sm">
            I&#39;m Tom Halland. I&#39;m 20 years old and I&#39;m from Nha
            Trang. I&#39;m a junior at University of Journalism and Commu...
            <span className="text-primary font-medium">Read more</span>
          </p>
        </div>
        <div className="flex justify-start items-center">
          <FavoriteButton />
          <ShareButton />
        </div>
      </div>
    );

  return (
    <div className="container flex flex-col gap-3 justify-start mb-7">
      <div className="flex flex-row justify-start items-start">
        <div className="relative mr-3">
          <AvatarDefault className="w-full h-auto min-w-[83px] min-h-[83px] text-gray-300" />
          <div className="absolute w-4 h-4 right-[10%] top-[80%] rounded-full bg-[#00BA88]"></div>
        </div>
        <div className="grow">
          <h3 className="text-lg font-medium break-all">{account?.address}</h3>
        </div>
        <InfoEditButton />
      </div>
      <div className="flex">
        <button className="inline-flex justify-center items-center px-2 py-1 rounded-lg bg-gradient-to-b from-blue-400 to-blue-800 text-light">
          <LogoNoText className="w-6 h-6 mr-1" />0 ZJS
        </button>
      </div>
      <div className="flex flex-col gap-2 justify-start items-start">
        <div className="inline-flex items-center mr-4">
          <IconPhone className="w-5 h-5 mr-2" />
          <span className="text-sm text-gray-300 dark:text-midnight-400">
            Undefined
          </span>
        </div>
        <div className="inline-flex items-center mr-4">
          <IconMail className="w-5 h-5 mr-2" />
          <span className="text-sm text-gray-300 dark:text-midnight-400">
            Undefined
          </span>
        </div>
        <div className="hidden inline-flex items-center mr-4">
          <IconGender className="mr-2" />
          <span className="text-sm text-gray-300 dark:text-midnight-400">
            Undefined
          </span>
        </div>
        <div className="hidden inline-flex items-center mr-4">
          <IconEarth className="mr-2" />
          <span className="text-sm text-gray-300 dark:text-midnight-400">
            Undefined
          </span>
        </div>
      </div>
      <div className="flex justify-start items-center">
        <FavoriteButton />
        <ShareButton />
      </div>
    </div>
  );
}

export default MobileBasicInfoBox;
