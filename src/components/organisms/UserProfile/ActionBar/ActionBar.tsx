import { IconArrange } from '@/assets/svg';
import SyncButton from './SyncButton';

function ActionBar() {
  return (
    <div className="container flex justify-end mt-12 gap-2">
      <SyncButton />
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
