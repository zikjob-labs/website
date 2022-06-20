import { IconRefresh } from '@/assets/svg';
import FloatingButton from '@/components/atoms/FloatingButton';

function SyncButton() {
  return (
    <>
      <button className="btn btn-primary !px-2 !py-1.5 !text-sm inline-flex items-center">
        <IconRefresh className="w-5 h-5 mr-2" />
        Sync
      </button>
      <FloatingButton
        onClick={() => console.log('clicked')}
        svg={{ src: IconRefresh }}
      />
    </>
  );
}

export default SyncButton;
