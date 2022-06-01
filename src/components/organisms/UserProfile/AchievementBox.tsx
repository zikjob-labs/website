import { IconFolder } from '@/assets/svg';
import useProfileStore from '@/stores/useProfileStore';

function AchievementBox() {
  const profile = useProfileStore((state) => state.profile);
  if (profile)
    return (
      <div className="container profile__box static__box">
        <div className="profile__box__main">
          <div className="profile__box__header">
            <h4>
              Achievements
              <button className="ml-2 lg:ml-6 btn btn-outline inline-flex items-center !px-2 !py-1 !text-sm !font-medium">
                <IconFolder className="mr-0 lg:mr-2" />
                <span className="hidden lg:block">Manage</span>
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="inline-flex items-center font-medium">
                <img
                  src="https://picsum.photos/100/100"
                  className="w-[100px] h-[100px] mr-3 rounded-lg"
                />
                <h5>Top Profile of the Year</h5>
              </div>
              <div className="inline-flex items-center font-medium">
                <img
                  src="https://picsum.photos/100/100"
                  className="w-[100px] h-[100px] mr-3 rounded-lg"
                />
                <h5>Top Profile of the Year</h5>
              </div>
              <div className="inline-flex items-center font-medium">
                <img
                  src="https://picsum.photos/100/100"
                  className="w-[100px] h-[100px] mr-3 rounded-lg"
                />
                <h5>Top Profile of the Year</h5>
              </div>
              <div className="inline-flex items-center font-medium">
                <img
                  src="https://picsum.photos/100/100"
                  className="w-[100px] h-[100px] mr-3 rounded-lg"
                />
                <h5>Top Profile of the Year</h5>
              </div>
              <div className="inline-flex items-center font-medium">
                <img
                  src="https://picsum.photos/100/100"
                  className="w-[100px] h-[100px] mr-3 rounded-lg"
                />
                <h5>Top Profile of the Year</h5>
              </div>
              <div className="inline-flex items-center font-medium">
                <img
                  src="https://picsum.photos/100/100"
                  className="w-[100px] h-[100px] mr-3 rounded-lg"
                />
                <h5>Top Profile of the Year</h5>
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
          <h4>Achievements</h4>
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
            <IconFolder className="mr-2" />
            Manage
          </button>
        </div>
      </div>
    </div>
  );
}

export default AchievementBox;
