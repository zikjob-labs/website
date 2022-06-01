import { IconTick } from '@/assets/svg';
import useProfileStore from '@/stores/useProfileStore';

function CompletionProgressBox() {
  const profile = useProfileStore((state) => state.profile);
  if (profile)
    return (
      <div className="container profile__box">
        <div className="profile__box__main !mt-3">
          <div className="profile__box__header">
            <h4>Completion Stage</h4>
          </div>
          <div className="profile__box__body">
            <div className="relative flex justify-end">
              <div className="z-[100] w-1/2">
                <div className="m-auto w-6 h-6 lg:w-[50px] lg:h-[50px] bg-gradient-to-b from-blue-400 to-blue-800 dark:bg-midnight-700 rounded-full">
                  <IconTick className="w-full h-full text-light" />
                </div>
                <div className="mt-2 font-medium text-sm lg:text-base text-center dark:text-light">
                  Basic
                </div>
              </div>
              <div className="z-[100]">
                <div className="m-auto w-6 h-6 lg:w-[50px] lg:h-[50px] bg-blue-50 dark:bg-midnight-700 rounded-full">
                  <IconTick className="w-full h-full text-light dark:text-midnight-500" />
                </div>
                <div className="mt-2 font-medium text-sm lg:text-base text-center text-blue-50 dark:text-midnight-500">
                  Medium
                </div>
              </div>
              <div className="z-[100] w-1/2">
                <div className="m-auto w-6 h-6 lg:w-[50px] lg:h-[50px] bg-blue-50 dark:bg-midnight-700 rounded-full">
                  <IconTick className="w-full h-full text-light dark:text-midnight-500" />
                </div>
                <div className="mt-2 font-medium text-sm lg:text-base text-center text-blue-50 dark:text-midnight-500">
                  Nearly
                </div>
              </div>
              <div className="z-[100]">
                <div className="m-auto w-6 h-6 lg:w-[50px] lg:h-[50px] bg-blue-50 dark:bg-midnight-700 rounded-full">
                  <IconTick className="w-full h-full text-light dark:text-midnight-500" />
                </div>
                <div className="mt-2 font-medium text-sm lg:text-base text-center text-blue-50 dark:text-midnight-500">
                  Success
                </div>
              </div>
              <div className="absolute z-[99] w-[94.5%] lg:w-[96.5%] mr-5 lg:mr-8 top-[9px] lg:top-[17px] h-2 lg:h-4 bg-blue-50 dark:bg-midnight-700 rounded-full">
                <div className="w-[30%] h-full bg-gradient-to-b from-blue-400 to-blue-800 rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-0 justify-between mt-6">
              <div className="flex flex-col gap-2 lg:gap-0">
                <div className="flex flex-row items-center dark:text-light">
                  <IconTick />
                  Personal Information
                </div>
                <div className="flex flex-row items-center dark:text-light">
                  <IconTick />
                  Education
                </div>
              </div>
              <div className="flex flex-col gap-2 lg:gap-0">
                <div className="flex flex-row items-center dark:text-light">
                  <IconTick />
                  Experiences
                </div>
                <div className="flex flex-row items-center dark:text-light">
                  <IconTick />
                  Skills
                </div>
              </div>
              <div className="flex flex-col gap-2 lg:gap-0">
                <div className="flex flex-row items-center dark:text-light">
                  <IconTick />
                  Certificates
                </div>
                <div className="flex flex-row items-center text-gray-300 dark:text-midnight-500">
                  <span className="w-6 h-6"></span>Achievements
                </div>
              </div>
              <div className="flex flex-col gap-2 lg:gap-0">
                <div className="flex flex-row items-center text-gray-300 dark:text-midnight-500">
                  <span className="w-6 h-6"></span>Portfolio & Project
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="container profile__box">
      <div className="profile__box__main !mt-3">
        <div className="profile__box__header">
          <h4>Completion Stage</h4>
        </div>
        <div className="profile__box__body">
          <div className="relative flex justify-end">
            <div className="z-[100] w-1/2">
              <div className="m-auto w-6 h-6 lg:w-[50px] lg:h-[50px] bg-blue-50 dark:bg-midnight-700 rounded-full">
                <IconTick className="w-full h-full text-light dark:text-midnight-500" />
              </div>
              <div className="mt-2 font-medium text-sm lg:text-base text-center text-blue-50 dark:text-midnight-500">
                Basic
              </div>
            </div>
            <div className="z-[100]">
              <div className="m-auto w-6 h-6 lg:w-[50px] lg:h-[50px] bg-blue-50 dark:bg-midnight-700 rounded-full">
                <IconTick className="w-full h-full text-light dark:text-midnight-500" />
              </div>
              <div className="mt-2 font-medium text-sm lg:text-base text-center text-blue-50 dark:text-midnight-500">
                Medium
              </div>
            </div>
            <div className="z-[100] w-1/2">
              <div className="m-auto w-6 h-6 lg:w-[50px] lg:h-[50px] bg-blue-50 dark:bg-midnight-700 rounded-full">
                <IconTick className="w-full h-full text-light dark:text-midnight-500" />
              </div>
              <div className="mt-2 font-medium text-sm lg:text-base text-center text-blue-50 dark:text-midnight-500">
                Nearly
              </div>
            </div>
            <div className="z-[100]">
              <div className="m-auto w-6 h-6 lg:w-[50px] lg:h-[50px] bg-blue-50 dark:bg-midnight-700 rounded-full">
                <IconTick className="w-full h-full text-light dark:text-midnight-500" />
              </div>
              <div className="mt-2 font-medium text-sm lg:text-base text-center text-blue-50 dark:text-midnight-500">
                Success
              </div>
            </div>
            <div className="absolute z-[99] w-[94.5%] lg:w-[96.5%] mr-5 lg:mr-8 top-[9px] lg:top-[17px] h-2 lg:h-4 bg-blue-50 dark:bg-midnight-700 rounded-full">
              <div className="w-[0%] h-full bg-gradient-to-b from-blue-400 to-blue-800 rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-0 justify-between mt-6">
            <div className="flex flex-col gap-2 lg:gap-0">
              <div className="flex flex-row items-center text-gray-300 dark:text-midnight-500">
                <span className="w-6 h-6"></span>Personal Information
              </div>
              <div className="flex flex-row items-center text-gray-300 dark:text-midnight-500">
                <span className="w-6 h-6"></span>Education
              </div>
            </div>
            <div className="flex flex-col gap-2 lg:gap-0">
              <div className="flex flex-row items-center text-gray-300 dark:text-midnight-500">
                <span className="w-6 h-6"></span>Experiences
              </div>
              <div className="flex flex-row items-center text-gray-300 dark:text-midnight-500">
                <span className="w-6 h-6"></span>Skills
              </div>
            </div>
            <div className="flex flex-col gap-2 lg:gap-0">
              <div className="flex flex-row items-center text-gray-300 dark:text-midnight-500">
                <span className="w-6 h-6"></span>Certificates
              </div>
              <div className="flex flex-row items-center text-gray-300 dark:text-midnight-500">
                <span className="w-6 h-6"></span>Achievements
              </div>
            </div>
            <div className="flex flex-col gap-2 lg:gap-0">
              <div className="flex flex-row items-center text-gray-300 dark:text-midnight-500">
                <span className="w-6 h-6"></span>Portfolio & Project
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletionProgressBox;
