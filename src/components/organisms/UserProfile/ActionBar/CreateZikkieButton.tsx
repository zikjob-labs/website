import { IconDocument } from '@/assets/svg';
import useProfileStore from '@/stores/useProfileStore';
import { useNetwork } from 'wagmi';

function CreateZikkieButton() {
  const { chain } = useNetwork();
  const [checkZikkie] = useProfileStore((state) => [state.checkZikkie]);

  const create = async () => {
    chain && (await checkZikkie(chain.id, true));
  };

  return (
    <>
      <button
        className="btn btn-primary !px-2 !py-1.5 !text-sm inline-flex items-center"
        onClick={create}
      >
        <IconDocument className="w-5 h-5 mr-2" />
        Create ZIK
      </button>
    </>
  );
}

export default CreateZikkieButton;
