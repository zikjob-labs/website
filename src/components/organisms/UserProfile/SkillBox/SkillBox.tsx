import useProfileStore from '@/stores/useProfileStore';
import AddOrEditSkillButton from './AddOrEditSkillButton';

function SkillBox() {
  const profile = useProfileStore((state) => state.profile);
  return (
    <div className="container profile__box static__box">
      <div className="profile__box__main">
        <div className="profile__box__header">
          <h4>
            Skills
            {profile?.skills && profile.skills.length > 0 && (
              <AddOrEditSkillButton header />
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
          {profile?.skills && profile.skills.length > 0 ? (
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-10 list-disc pl-[15px] font-medium">
              {profile.skills.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          ) : (
            <AddOrEditSkillButton />
          )}
        </div>
      </div>
    </div>
  );
}

export default SkillBox;
