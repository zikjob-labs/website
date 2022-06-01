import { IconAdd, IconEditFill, IconTick } from '@/assets/svg';
import useProfileStore from '@/stores/useProfileStore';

function ExperienceBox() {
  const profile = useProfileStore((state) => state.profile);
  if (profile)
    return (
      <div className="container profile__box static__box">
        <div className="profile__box__main">
          <div className="profile__box__header">
            <h4>
              Experiences
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
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-10">
              <div className="flex flex-row items-start">
                <img
                  src="https://picsum.photos/100/100"
                  className="w-[88px] h-[88px] mr-5 rounded-lg"
                />
                <div className="flex flex-col gap-1">
                  <h5 className="mb-1 inline-flex gap-2 justify-between items-start font-semibold">
                    National University of Civil Engineering
                    <button>
                      <span className="block flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-midnight-600">
                        <IconEditFill className="w-8 h-8 text-primary dark:text-light" />
                      </span>
                    </button>
                  </h5>
                  <p>Major: Computer Science</p>
                  <p>10/2015 - 10/2020</p>
                  <div className="inline-flex items-center text-primary font-semibold">
                    <div className="w-5 h-5 rounded-full flex justify-center items-center bg-primary text-light  mr-1">
                      <IconTick className="w-full h-full" />
                    </div>
                    Verified
                  </div>
                  <p className="mt-1">
                    Currently, I am a student in a junior high school. It takes
                    15 minutes to walk from my house to school...{' '}
                    <span className="text-primary font-medium">Read more</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-start">
                <img
                  src="https://picsum.photos/100/100"
                  className="w-[88px] h-[88px] mr-5 rounded-lg"
                />
                <div className="flex flex-col gap-1">
                  <h5 className="mb-1 inline-flex gap-2 justify-between items-start font-semibold">
                    National University of Civil Engineering
                    <button>
                      <span className="block flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-midnight-600">
                        <IconEditFill className="w-8 h-8 text-primary dark:text-light" />
                      </span>
                    </button>
                  </h5>
                  <p>Major: Computer Science</p>
                  <p>10/2015 - 10/2020</p>
                  <div className="inline-flex items-center text-primary font-semibold">
                    <div className="w-5 h-5 rounded-full flex justify-center items-center bg-primary text-light  mr-1">
                      <IconTick className="w-full h-full" />
                    </div>
                    Verified
                  </div>
                  <p className="mt-1">
                    Currently, I am a student in a junior high school. It takes
                    15 minutes to walk from my house to school...{' '}
                    <span className="text-primary font-medium">Read more</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-start">
                <img
                  src="https://picsum.photos/100/100"
                  className="w-[88px] h-[88px] mr-5 rounded-lg"
                />
                <div className="flex flex-col gap-1">
                  <h5 className="mb-1 inline-flex gap-2 justify-between items-start font-semibold">
                    National University of Civil Engineering
                    <button>
                      <span className="block flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-midnight-600">
                        <IconEditFill className="w-8 h-8 text-primary dark:text-light" />
                      </span>
                    </button>
                  </h5>
                  <p>Major: Computer Science</p>
                  <p>10/2015 - 10/2020</p>
                  <div className="inline-flex items-center text-primary font-semibold">
                    <div className="w-5 h-5 rounded-full flex justify-center items-center bg-primary text-light  mr-1">
                      <IconTick className="w-full h-full" />
                    </div>
                    Verified
                  </div>
                  <p className="mt-1">
                    Currently, I am a student in a junior high school. It takes
                    15 minutes to walk from my house to school...{' '}
                    <span className="text-primary font-medium">Read more</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="container profile__box">
      <div className="profile__box__main">
        <div className="profile__box__header">
          <h4>Experiences</h4>
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

export default ExperienceBox;
