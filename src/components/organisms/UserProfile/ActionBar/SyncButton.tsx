import { IconRefresh } from '@/assets/svg';
import FloatingButton from '@/components/atoms/FloatingButton';
import useProfileStore from '@/stores/useProfileStore';

function SyncButton() {
  const [updateZikkie] = useProfileStore((state) => [state.updateZikkie]);

  const sync = async () => {
    await updateZikkie();
  };

  return (
    <>
      <button
        className="btn btn-primary !px-2 !py-1.5 !text-sm inline-flex items-center"
        onClick={sync}
      >
        <IconRefresh className="w-5 h-5 mr-2" />
        Sync
      </button>
      <FloatingButton onClick={sync} svg={{ src: IconRefresh }} />
    </>
  );
}

export default SyncButton;
