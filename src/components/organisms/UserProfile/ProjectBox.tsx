import {
  IconAdd,
  IconEditFill,
  IconPagingLeft,
  IconPagingRight,
  IconTick,
} from '@/assets/svg';
import useProfileStore from '@/stores/useProfileStore';
import { isMobile } from '@/utils/userAgent';

function ProjectBox() {
  const profile = useProfileStore((state) => state.profile);
  if (profile)
    return (
      <div className="container profile__box">
        <div className="profile__box__main">
          <div className="profile__box__header">
            <h4>
              Project
              <button className="ml-2 lg:ml-6 btn btn-outline inline-flex items-center !px-2 !py-1 !text-sm !font-medium">
                <IconAdd className="mr-2" />
                Add
              </button>
            </h4>
            <div className="toggle__button">
              <span className="toggle__button__label">Show</span>
              <label className="toggle__button__body">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="peer peer-checked:bg-blue-100 dark:peer-checked:bg-blue-50 peer-checked:after:bg-primary peer-checked:after:translate-x-full"></div>
              </label>
            </div>
          </div>
          <div className="profile__box__body">
            <div className="flex flex-col">
              <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row items-start pt-0 pb-10 lg:py-10 border-b border-gray-100">
                {isMobile && (
                  <h5 className="w-full inline-flex justify-between items-center text-xl font-medium">
                    Project 1
                    <button>
                      <span className="block flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-midnight-600">
                        <IconEditFill className="w-8 h-8 text-primary dark:text-light" />
                      </span>
                    </button>
                  </h5>
                )}
                <div className="mr-0 lg:mr-6 min-w-[294px] min-h-[225px]">
                  <img
                    src="https://picsum.photos/392/300"
                    className="w-full h-full border-[1.5px] border-gray-200 rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-5 grow">
                  {!isMobile && (
                    <h5 className="inline-flex justify-between items-center text-xl font-medium">
                      Project 1
                      <button>
                        <span className="block flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-midnight-600">
                          <IconEditFill className="w-8 h-8 text-primary dark:text-light" />
                        </span>
                      </button>
                    </h5>
                  )}
                  <p>
                    Currently, I am a student in a junior high school. It takes
                    15 minutes to walk from my house to school. Every day I walk
                    to school. My school is yellow. It is located in the middle
                    of a large land. There are many trees around the school. The
                    schoolyard is very large...
                    <span className="text-primary font-medium cursor-pointer">
                      Read more
                    </span>
                  </p>
                  <div className="flex flex-wrap flex-row gap-4 items-center">
                    <label className="w-24 font-medium">Members: </label>
                    <div className="relative">
                      <img
                        className="w-12 h-12 rounded-full bg-gray-100"
                        src="https://gravatar.com/avatar/a0b496b35a6d0adabf6e6413a722122a?s=200&d=robohash&r=x"
                      />
                      <div className="absolute top-[70%] -right-[15%] w-6 h-6 rounded-full flex justify-center items-center bg-primary text-light">
                        <IconTick className="w-full h-full" />
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        className="w-12 h-12 rounded-full bg-gray-100"
                        src="https://gravatar.com/avatar/413b4553db2b170245d4c03548d809ee?s=200&d=robohash&r=x"
                      />
                      <div className="absolute top-[70%] -right-[15%] w-6 h-6 rounded-full flex justify-center items-center bg-primary text-light">
                        <IconTick className="w-full h-full" />
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        className="w-12 h-12 rounded-full bg-gray-100"
                        src="https://gravatar.com/avatar/3005004a677f08586b9915a55f437fb7?s=200&d=robohash&r=x"
                      />
                      <div className="absolute top-[70%] -right-[15%] w-6 h-6 rounded-full flex justify-center items-center bg-primary text-light">
                        <IconTick className="w-full h-full" />
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        className="w-12 h-12 rounded-full bg-gray-100"
                        src="https://gravatar.com/avatar/3005004a677f08586b9915a55f437fb7?s=200&d=robohash&r=x"
                      />
                      <div className="absolute top-0 left-0 bg-black bg-opacity-30 w-12 h-12 flex justify-center items-center rounded-full text-light">
                        +99
                      </div>
                      <div className="absolute top-[70%] -right-[15%] w-6 h-6 rounded-full flex justify-center items-center bg-primary text-light">
                        <IconTick className="w-full h-full" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap flex-row gap-4 items-center">
                    <label className="w-24 font-medium">Customers: </label>
                    <div className="relative">
                      <img
                        className="w-12 h-12 rounded-full bg-gray-100"
                        src="https://gravatar.com/avatar/a0b496b35a6d0adabf6e6413a722122a?s=200&d=robohash&r=x"
                      />
                      <div className="absolute top-[70%] -right-[15%] w-6 h-6 rounded-full flex justify-center items-center bg-primary text-light">
                        <IconTick className="w-full h-full" />
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        className="w-12 h-12 rounded-full bg-gray-100"
                        src="https://gravatar.com/avatar/413b4553db2b170245d4c03548d809ee?s=200&d=robohash&r=x"
                      />
                      <div className="absolute top-[70%] -right-[15%] w-6 h-6 rounded-full flex justify-center items-center bg-primary text-light">
                        <IconTick className="w-full h-full" />
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        className="w-12 h-12 rounded-full bg-gray-100"
                        src="https://gravatar.com/avatar/3005004a677f08586b9915a55f437fb7?s=200&d=robohash&r=x"
                      />
                      <div className="absolute top-[70%] -right-[15%] w-6 h-6 rounded-full flex justify-center items-center bg-primary text-light">
                        <IconTick className="w-full h-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row items-start pt-6 pb-10 lg:py-10 border-b border-gray-100">
                {isMobile && (
                  <h5 className="w-full inline-flex justify-between items-center text-xl font-medium">
                    Project 1
                    <button>
                      <span className="block flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-midnight-600">
                        <IconEditFill className="w-8 h-8 text-primary dark:text-light" />
                      </span>
                    </button>
                  </h5>
                )}
                <div className="mr-0 lg:mr-6 min-w-[294px] min-h-[225px]">
                  <img
                    src="https://picsum.photos/392/300"
                    className="w-full h-full border-[1.5px] border-gray-200 rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-5 grow">
                  {!isMobile && (
                    <h5 className="inline-flex justify-between items-center text-xl font-medium">
                      Project 1
                      <button>
                        <span className="block flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-midnight-600">
                          <IconEditFill className="w-8 h-8 text-primary dark:text-light" />
                        </span>
                      </button>
                    </h5>
                  )}
                  <p>
                    Currently, I am a student in a junior high school. It takes
                    15 minutes to walk from my house to school. Every day I walk
                    to school. My school is yellow. It is located in the middle
                    of a large land. There are many trees around the school. The
                    schoolyard is very large...
                    <span className="text-primary font-medium cursor-pointer">
                      Read more
                    </span>
                  </p>
                  <div className="flex flex-wrap flex-row gap-4 items-center">
                    <label className="w-24 font-medium">Members: </label>
                    <div className="relative">
                      <img
                        className="w-12 h-12 rounded-full bg-gray-100"
                        src="https://gravatar.com/avatar/a0b496b35a6d0adabf6e6413a722122a?s=200&d=robohash&r=x"
                      />
                      <div className="absolute top-[70%] -right-[15%] w-6 h-6 rounded-full flex justify-center items-center bg-primary text-light">
                        <IconTick className="w-full h-full" />
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        className="w-12 h-12 rounded-full bg-gray-100"
                        src="https://gravatar.com/avatar/413b4553db2b170245d4c03548d809ee?s=200&d=robohash&r=x"
                      />
                      <div className="absolute top-[70%] -right-[15%] w-6 h-6 rounded-full flex justify-center items-center bg-primary text-light">
                        <IconTick className="w-full h-full" />
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        className="w-12 h-12 rounded-full bg-gray-100"
                        src="https://gravatar.com/avatar/3005004a677f08586b9915a55f437fb7?s=200&d=robohash&r=x"
                      />
                      <div className="absolute top-[70%] -right-[15%] w-6 h-6 rounded-full flex justify-center items-center bg-primary text-light">
                        <IconTick className="w-full h-full" />
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        className="w-12 h-12 rounded-full bg-gray-100"
                        src="https://gravatar.com/avatar/3005004a677f08586b9915a55f437fb7?s=200&d=robohash&r=x"
                      />
                      <div className="absolute top-0 left-0 bg-black bg-opacity-30 w-12 h-12 flex justify-center items-center rounded-full text-light">
                        +99
                      </div>
                      <div className="absolute top-[70%] -right-[15%] w-6 h-6 rounded-full flex justify-center items-center bg-primary text-light">
                        <IconTick className="w-full h-full" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap flex-row gap-4 items-center">
                    <label className="w-24 font-medium">Customers: </label>
                    <div className="relative">
                      <img
                        className="w-12 h-12 rounded-full bg-gray-100"
                        src="https://gravatar.com/avatar/a0b496b35a6d0adabf6e6413a722122a?s=200&d=robohash&r=x"
                      />
                      <div className="absolute top-[70%] -right-[15%] w-6 h-6 rounded-full flex justify-center items-center bg-primary text-light">
                        <IconTick className="w-full h-full" />
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        className="w-12 h-12 rounded-full bg-gray-100"
                        src="https://gravatar.com/avatar/413b4553db2b170245d4c03548d809ee?s=200&d=robohash&r=x"
                      />
                      <div className="absolute top-[70%] -right-[15%] w-6 h-6 rounded-full flex justify-center items-center bg-primary text-light">
                        <IconTick className="w-full h-full" />
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        className="w-12 h-12 rounded-full bg-gray-100"
                        src="https://gravatar.com/avatar/3005004a677f08586b9915a55f437fb7?s=200&d=robohash&r=x"
                      />
                      <div className="absolute top-[70%] -right-[15%] w-6 h-6 rounded-full flex justify-center items-center bg-primary text-light">
                        <IconTick className="w-full h-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row items-start pt-6 pb-10 lg:py-10 border-b border-gray-100">
                {isMobile && (
                  <h5 className="w-full inline-flex justify-between items-center text-xl font-medium">
                    Project 1
                    <button>
                      <span className="block flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-midnight-600">
                        <IconEditFill className="w-8 h-8 text-primary dark:text-light" />
                      </span>
                    </button>
                  </h5>
                )}
                <div className="mr-0 lg:mr-6 min-w-[294px] min-h-[225px]">
                  <img
                    src="https://picsum.photos/392/300"
                    className="w-full h-full border-[1.5px] border-gray-200 rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-5 grow">
                  {!isMobile && (
                    <h5 className="inline-flex justify-between items-center text-xl font-medium">
                      Project 1
                      <button>
                        <span className="block flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-midnight-600">
                          <IconEditFill className="w-8 h-8 text-primary dark:text-light" />
                        </span>
                      </button>
                    </h5>
                  )}
                  <p>
                    Currently, I am a student in a junior high school. It takes
                    15 minutes to walk from my house to school. Every day I walk
                    to school. My school is yellow. It is located in the middle
                    of a large land. There are many trees around the school. The
                    schoolyard is very large...
                    <span className="text-primary font-medium cursor-pointer">
                      Read more
                    </span>
                  </p>
                  <div className="flex flex-wrap flex-row gap-4 items-center">
                    <label className="w-24 font-medium">Members: </label>
                    <div className="relative">
                      <img
                        className="w-12 h-12 rounded-full bg-gray-100"
                        src="https://gravatar.com/avatar/a0b496b35a6d0adabf6e6413a722122a?s=200&d=robohash&r=x"
                      />
                      <div className="absolute top-[70%] -right-[15%] w-6 h-6 rounded-full flex justify-center items-center bg-primary text-light">
                        <IconTick className="w-full h-full" />
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        className="w-12 h-12 rounded-full bg-gray-100"
                        src="https://gravatar.com/avatar/413b4553db2b170245d4c03548d809ee?s=200&d=robohash&r=x"
                      />
                      <div className="absolute top-[70%] -right-[15%] w-6 h-6 rounded-full flex justify-center items-center bg-primary text-light">
                        <IconTick className="w-full h-full" />
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        className="w-12 h-12 rounded-full bg-gray-100"
                        src="https://gravatar.com/avatar/3005004a677f08586b9915a55f437fb7?s=200&d=robohash&r=x"
                      />
                      <div className="absolute top-[70%] -right-[15%] w-6 h-6 rounded-full flex justify-center items-center bg-primary text-light">
                        <IconTick className="w-full h-full" />
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        className="w-12 h-12 rounded-full bg-gray-100"
                        src="https://gravatar.com/avatar/3005004a677f08586b9915a55f437fb7?s=200&d=robohash&r=x"
                      />
                      <div className="absolute top-0 left-0 bg-black bg-opacity-30 w-12 h-12 flex justify-center items-center rounded-full text-light">
                        +99
                      </div>
                      <div className="absolute top-[70%] -right-[15%] w-6 h-6 rounded-full flex justify-center items-center bg-primary text-light">
                        <IconTick className="w-full h-full" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap flex-row gap-4 items-center">
                    <label className="w-24 font-medium">Customers: </label>
                    <div className="relative">
                      <img
                        className="w-12 h-12 rounded-full bg-gray-100"
                        src="https://gravatar.com/avatar/a0b496b35a6d0adabf6e6413a722122a?s=200&d=robohash&r=x"
                      />
                      <div className="absolute top-[70%] -right-[15%] w-6 h-6 rounded-full flex justify-center items-center bg-primary text-light">
                        <IconTick className="w-full h-full" />
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        className="w-12 h-12 rounded-full bg-gray-100"
                        src="https://gravatar.com/avatar/413b4553db2b170245d4c03548d809ee?s=200&d=robohash&r=x"
                      />
                      <div className="absolute top-[70%] -right-[15%] w-6 h-6 rounded-full flex justify-center items-center bg-primary text-light">
                        <IconTick className="w-full h-full" />
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        className="w-12 h-12 rounded-full bg-gray-100"
                        src="https://gravatar.com/avatar/3005004a677f08586b9915a55f437fb7?s=200&d=robohash&r=x"
                      />
                      <div className="absolute top-[70%] -right-[15%] w-6 h-6 rounded-full flex justify-center items-center bg-primary text-light">
                        <IconTick className="w-full h-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="inline-flex justify-end items-center gap-2 pt-5">
                <li className="w-10 h-10 rounded-full flex justify-center items-center text-gray-200">
                  <IconPagingLeft />
                </li>
                <li className="w-10 h-10 bg-primary rounded-full flex justify-center items-center text-lg text-light cursor-pointer">
                  1
                </li>
                <li className="w-10 h-10 hover:bg-gray-100 dark:hover:bg-midnight-500 rounded-full flex justify-center items-center text-lg cursor-pointer">
                  2
                </li>
                <li className="w-10 h-10 rounded-full flex justify-center items-center text-lg">
                  ...
                </li>
                <li className="w-10 h-10 hover:bg-gray-100 dark:hover:bg-midnight-500 rounded-full flex justify-center items-center text-lg cursor-pointer">
                  10
                </li>
                <li className="w-10 h-10 hover:bg-gray-100 dark:hover:bg-midnight-500 rounded-full flex justify-center items-center cursor-pointer">
                  <IconPagingRight />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="container profile__box">
      <div className="profile__box__main">
        <div className="profile__box__header">
          <h4>Project</h4>
          <div className="toggle__button">
            <span className="toggle__button__label">Show</span>
            <label className="toggle__button__body">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="peer peer-checked:bg-blue-100 dark:peer-checked:bg-blue-50 peer-checked:after:bg-primary peer-checked:after:translate-x-full"></div>
            </label>
          </div>
        </div>
        <div className="profile__box__body">
          <button className="btn btn-outline flex justify-center items-center !m-auto">
            <IconAdd className="mr-2" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectBox;
