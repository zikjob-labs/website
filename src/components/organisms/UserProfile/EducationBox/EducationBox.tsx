import useProfileStore from '@/stores/useProfileStore';
import AddEducationButton from './AddEducationButton';
import EducationItem from './EducationItem';

function EducationBox() {
  const profile = useProfileStore((state) => state.profile);
  return (
    <div className="container profile__box static__box">
      <div className="profile__box__main">
        <div className="profile__box__header">
          <h4>
            Education
            {profile?.education && profile.education.length > 0 && (
              <AddEducationButton header />
            )}
          </h4>
          {/* Milestone 2
          <div className="toggle__button">
            <span className="toggle__button__label">Show</span>
            <label className="toggle__button__body">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="peer peer-checked:bg-blue-100 dark:peer-checked:bg-blue-50 peer-checked:after:bg-primary peer-checked:after:translate-x-full"></div>
            </label>
          </div> */}
        </div>
        <div className="profile__box__body">
          {profile?.education && profile.education.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-10">
              {profile.education.map((item, index) => (
                <EducationItem key={index} item={item} />
              ))}
            </div>
          ) : (
            <AddEducationButton />
          )}
        </div>
      </div>
    </div>
  );
}

export default EducationBox;
