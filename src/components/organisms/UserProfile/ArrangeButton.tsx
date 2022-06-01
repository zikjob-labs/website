// import { IconArrange } from '@/assets/svg';
import useProfileStore from '@/stores/useProfileStore';

function ArrangeButton() {
  const [profile, setProfile] = useProfileStore((state) => [
    state.profile,
    state.setProfile,
  ]);
  return (
    <div className="container flex justify-end">
      <button
        className="btn btn-outline mr-4 !px-2 !py-1.5 !text-sm inline-flex items-center"
        onClick={() => {
          profile ? setProfile(undefined) : setProfile({ name: 'Test' });
        }}
      >
        Mock Profile
      </button>
      {/* Milestone 2
      <button className="btn btn-outline !px-2 !py-1.5 !text-sm inline-flex items-center">
        <IconArrange className="mr-2" />
        Arrange box
      </button> */}
    </div>
  );
}

export default ArrangeButton;
