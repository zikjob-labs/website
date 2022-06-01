import { IconAdd, IconEdit } from '@/assets/svg';
import useProfileStore from '@/stores/useProfileStore';

function PortfolioBox() {
  const profile = useProfileStore((state) => state.profile);
  if (profile)
    return (
      <div className="container profile__box">
        <div className="profile__box__main">
          <div className="profile__box__header">
            <h4>
              Portfolio
              <button className="ml-2 lg:ml-6 btn btn-outline inline-flex items-center !px-2 !py-1 !text-sm !font-medium">
                <IconEdit className="mr-2" />
                Edit
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
            <iframe
              src="https://marketingworks.vn/storage/cv_files/1653894089.pdf"
              className="w-full h-[800px]"
            />
          </div>
        </div>
      </div>
    );

  return (
    <div className="container profile__box">
      <div className="profile__box__main">
        <div className="profile__box__header">
          <h4>Portfolio</h4>
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

export default PortfolioBox;
