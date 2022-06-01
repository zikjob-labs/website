import { IconAdd, IconEditFill } from '@/assets/svg';
import useProfileStore from '@/stores/useProfileStore';

function CertificateBox() {
  const profile = useProfileStore((state) => state.profile);
  if (profile)
    return (
      <div className="container profile__box static__box">
        <div className="profile__box__main">
          <div className="profile__box__header">
            <h4>
              Certificates
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="flex flex-row justify-between lg:justify-start items-center gap-2">
                <div className="flex-col items-center">
                  <h5>Mobile App Certificate</h5>
                  <p className="text-sm dark:text-gray-400 font-medium">
                    04/2014
                  </p>
                </div>
                <button>
                  <span className="block flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-midnight-600">
                    <IconEditFill className="w-8 h-8 text-primary dark:text-light" />
                  </span>
                </button>
              </div>
              <div className="flex flex-row justify-between lg:justify-start items-center gap-2">
                <div className="flex-col items-center">
                  <h5>Mobile App Certificate</h5>
                  <p className="text-sm dark:text-gray-400 font-medium">
                    04/2014
                  </p>
                </div>
                <button>
                  <span className="block flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-midnight-600">
                    <IconEditFill className="w-8 h-8 text-primary dark:text-light" />
                  </span>
                </button>
              </div>
              <div className="flex flex-row justify-between lg:justify-start items-center gap-2">
                <div className="flex-col items-center">
                  <h5>Mobile App Certificate</h5>
                  <p className="text-sm dark:text-gray-400 font-medium">
                    04/2014
                  </p>
                </div>
                <button>
                  <span className="block flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-midnight-600">
                    <IconEditFill className="w-8 h-8 text-primary dark:text-light" />
                  </span>
                </button>
              </div>
              <div className="flex flex-row justify-between lg:justify-start items-center gap-2">
                <div className="flex-col items-center">
                  <h5>Mobile App Certificate</h5>
                  <p className="text-sm dark:text-gray-400 font-medium">
                    04/2014
                  </p>
                </div>
                <button>
                  <span className="block flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-midnight-600">
                    <IconEditFill className="w-8 h-8 text-primary dark:text-light" />
                  </span>
                </button>
              </div>
              <div className="flex flex-row justify-between lg:justify-start items-center gap-2">
                <div className="flex-col items-center">
                  <h5>Mobile App Certificate</h5>
                  <p className="text-sm dark:text-gray-400 font-medium">
                    04/2014
                  </p>
                </div>
                <button>
                  <span className="block flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-midnight-600">
                    <IconEditFill className="w-8 h-8 text-primary dark:text-light" />
                  </span>
                </button>
              </div>
              <div className="flex flex-row justify-between lg:justify-start items-center gap-2">
                <div className="flex-col items-center">
                  <h5>Mobile App Certificate</h5>
                  <p className="text-sm dark:text-gray-400 font-medium">
                    04/2014
                  </p>
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
          <h4>Certificates</h4>
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

export default CertificateBox;
