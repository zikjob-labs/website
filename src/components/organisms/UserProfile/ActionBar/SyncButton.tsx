import { IconRefresh } from '@/assets/svg';
import FloatingButton from '@/components/atoms/FloatingButton';
import useProfileStore from '@/stores/useProfileStore';
import { useNetwork } from 'wagmi';

function SyncButton() {
  const { chain } = useNetwork();
  const [checkZikkie, updateZikkie] = useProfileStore((state) => [
    state.checkZikkie,
    state.updateZikkie,
  ]);

  const sync = async () => {
    chain && (await checkZikkie(chain.id).then(() => updateZikkie()));
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
