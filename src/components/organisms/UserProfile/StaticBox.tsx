import { IconFolder } from '@/assets/svg';
import useProfileStore from '@/stores/useProfileStore';

function StaticBox() {
  const profile = useProfileStore((state) => state.profile);
  if (profile)
    return (
      <div className="container profile__box static__box">
        <div className="profile__box__main">
          <div className="profile__box__header">
            <h4>
              Statistic
              <button className="ml-2 lg:ml-6 btn btn-outline inline-flex items-center !px-2 !py-1 !text-sm !font-medium">
                <IconFolder className="mr-2" />
                Manage
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
            <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-start lg:justify-between">
              <div className="inline-flex items-center">
                <div className="w-[3px] h-[50px] lg:h-[75%] bg-primary"></div>
                <div className="ml-4 flex flex-col">
                  <h5 className="font-medium">Views by week</h5>
                  <p className="text-3xl text-primary font-semibold">100.000</p>
                </div>
              </div>
              <div className="inline-flex items-center">
                <div className="w-[3px] h-[50px] lg:h-[75%] bg-primary"></div>
                <div className="ml-4 flex flex-col">
                  <h5 className="font-medium">Views by month</h5>
                  <p className="text-3xl text-primary font-semibold">100.000</p>
                </div>
              </div>
              <div className="inline-flex items-center">
                <div className="w-[3px] h-[50px] lg:h-[75%] bg-primary"></div>
                <div className="ml-4 flex flex-col">
                  <h5 className="font-medium">Views by quarter</h5>
                  <p className="text-3xl text-primary font-semibold">
                    5.000.000
                  </p>
                </div>
              </div>
              <div className="inline-flex items-center">
                <div className="w-[3px] h-[50px] lg:h-[75%] bg-primary"></div>
                <div className="ml-4 flex flex-col">
                  <h5 className="font-medium">Views by year</h5>
                  <p className="text-3xl text-primary font-semibold">
                    10.000.000
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
          <h4>Statistic</h4>
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

export default StaticBox;
