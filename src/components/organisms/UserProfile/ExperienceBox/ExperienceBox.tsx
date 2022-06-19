import useProfileStore from '@/stores/useProfileStore';
import AddExperienceButton from './AddExperienceButton';
import ExperienceItem from './ExperienceItem';

function ExperienceBox() {
  const profile = useProfileStore((state) => state.profile);
  return (
    <div className="container profile__box static__box">
      <div className="profile__box__main">
        <div className="profile__box__header">
          <h4>
            Experiences
            {profile?.experiences && profile.experiences.length > 0 && (
              <AddExperienceButton header />
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
          {profile?.experiences && profile.experiences.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-10">
              {profile.experiences.map((item, index) => (
                <ExperienceItem key={index} item={item} />
              ))}
            </div>
          ) : (
            <AddExperienceButton />
          )}
        </div>
      </div>
    </div>
  );
}

export default ExperienceBox;
