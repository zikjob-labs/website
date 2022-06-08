import { IconEditFill } from '@/assets/svg';
import useProfileStore from '@/stores/useProfileStore';
import AddSkillButton from './AddSkillButton';

function SkillBox() {
  const profile = useProfileStore((state) => state.profile);
  if (profile)
    return (
      <div className="container profile__box static__box">
        <div className="profile__box__main">
          <div className="profile__box__header">
            <h4>
              Skills
              <AddSkillButton header />
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="flex flex-row justify-between lg:justify-start items-center gap-2">
                <div className="flex-col items-center">
                  <h5>Adobe Photoshop</h5>
                  <div className="flex flex-row justify-start gap-2 mt-2">
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                    <div className="w-4 h-4 rounded-full bg-gray-200"></div>
                    <div className="w-4 h-4 rounded-full bg-gray-200"></div>
                  </div>
                </div>
                <button>
                  <span className="block flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-midnight-600">
                    <IconEditFill className="w-8 h-8 text-primary dark:text-light" />
                  </span>
                </button>
              </div>
              <div className="flex flex-row justify-between lg:justify-start items-center gap-2">
                <div className="flex-col items-center">
                  <h5>Adobe Photoshop</h5>
                  <div className="flex flex-row justify-start gap-2 mt-2">
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                    <div className="w-4 h-4 rounded-full bg-gray-200"></div>
                    <div className="w-4 h-4 rounded-full bg-gray-200"></div>
                  </div>
                </div>
                <button>
                  <span className="block flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-midnight-600">
                    <IconEditFill className="w-8 h-8 text-primary dark:text-light" />
                  </span>
                </button>
              </div>
              <div className="flex flex-row justify-between lg:justify-start items-center gap-2">
                <div className="flex-col items-center">
                  <h5>Adobe Photoshop</h5>
                  <div className="flex flex-row justify-start gap-2 mt-2">
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                    <div className="w-4 h-4 rounded-full bg-gray-200"></div>
                    <div className="w-4 h-4 rounded-full bg-gray-200"></div>
                  </div>
                </div>
                <button>
                  <span className="block flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-midnight-600">
                    <IconEditFill className="w-8 h-8 text-primary dark:text-light" />
                  </span>
                </button>
              </div>
              <div className="flex flex-row justify-between lg:justify-start items-center gap-2">
                <div className="flex-col items-center">
                  <h5>Adobe Photoshop</h5>
                  <div className="flex flex-row justify-start gap-2 mt-2">
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                    <div className="w-4 h-4 rounded-full bg-gray-200"></div>
                    <div className="w-4 h-4 rounded-full bg-gray-200"></div>
                  </div>
                </div>
                <button>
                  <span className="block flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-midnight-600">
                    <IconEditFill className="w-8 h-8 text-primary dark:text-light" />
                  </span>
                </button>
              </div>
              <div className="flex flex-row justify-between lg:justify-start items-center gap-2">
                <div className="flex-col items-center">
                  <h5>Adobe Photoshop</h5>
                  <div className="flex flex-row justify-start gap-2 mt-2">
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                    <div className="w-4 h-4 rounded-full bg-gray-200"></div>
                    <div className="w-4 h-4 rounded-full bg-gray-200"></div>
                  </div>
                </div>
                <button>
                  <span className="block flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-midnight-600">
                    <IconEditFill className="w-8 h-8 text-primary dark:text-light" />
                  </span>
                </button>
              </div>
              <div className="flex flex-row justify-between lg:justify-start items-center gap-2">
                <div className="flex-col items-center">
                  <h5>Adobe Photoshop</h5>
                  <div className="flex flex-row justify-start gap-2 mt-2">
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                    <div className="w-4 h-4 rounded-full bg-gray-200"></div>
                    <div className="w-4 h-4 rounded-full bg-gray-200"></div>
                  </div>
                </div>
                <button>
                  <span className="block flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-midnight-600">
                    <IconEditFill className="w-8 h-8 text-primary dark:text-light" />
                  </span>
                </button>
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
          <h4>Skills</h4>
          <div className="toggle__button">
            <span className="toggle__button__label">Show</span>
            <label className="toggle__button__body">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="peer peer-checked:bg-blue-100 dark:peer-checked:bg-blue-50 peer-checked:after:bg-primary peer-checked:after:translate-x-full"></div>
            </label>
          </div>
        </div>
        <div className="profile__box__body">
          <AddSkillButton />
        </div>
      </div>
    </div>
  );
}

export default SkillBox;
