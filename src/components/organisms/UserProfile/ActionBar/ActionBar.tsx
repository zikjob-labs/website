import { IconArrange } from '@/assets/svg';
import useProfileStore from '@/stores/useProfileStore';
import CreateZikkieButton from './CreateZikkieButton';
import SyncButton from './SyncButton';

function ActionBar() {
  const [zikkieAddress] = useProfileStore((state) => [state.zikkieAddress]);

  return (
    <div className="container flex justify-end mt-12 gap-2">
      {zikkieAddress == '' ? <CreateZikkieButton /> : <SyncButton />}
      <button
        className="btn btn-outline !px-2 !py-1.5 !text-sm inline-flex items-center"
        onClick={() => alert('Coming soon!')}
      >
        <IconArrange className="mr-2" />
        Arrange box
      </button>
    </div>
  );
}

export default ActionBar;
