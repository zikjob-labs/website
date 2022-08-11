import { IconInfo, IconSpin, IconSuccess } from '@/assets/svg';
import Modal from '@/components/atoms/Modal';
import { ModalHandle } from '@/components/atoms/Modal/Modal';
import { ZeroAddress } from '@/constants';
import useProfileStore from '@/stores/useProfileStore';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { useDisconnect, useNetwork } from 'wagmi';

enum STATUS {
  'create',
  'creating',
  'created',
}

function CreateProfileModal() {
  const [zikkieAddress, createZikkie] = useProfileStore((state) => [
    state.zikkieAddress,
    state.createZikkie,
  ]);
  const modalRef = useRef<ModalHandle>(null);
  const { chain } = useNetwork();
  const { disconnect } = useDisconnect({
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });
  const [status, setStatus] = useState(STATUS.create);

  useEffect(() => {
    if (zikkieAddress == '' || zikkieAddress == ZeroAddress) {
      modalRef.current?.open();
    }
  }, [zikkieAddress]);

  const create = async () => {
    try {
      setStatus(STATUS.creating);
      chain && (await createZikkie(chain.id));
      setStatus(STATUS.created);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setStatus(STATUS.create);
      toast.error(error.message);
      console.error(error);
    }
  };

  const footer = (
    <div className="w-full flex justify-end items-center gap-2">
      {status == STATUS.creating ? (
        <></>
      ) : status == STATUS.create ? (
        <>
          <button
            className="btn !px-4 !py-2 !text-base text-gray-600 dar:text-midnight-100 hover:bg-gray-50 dark:hover:bg-midnight-700"
            onClick={() => disconnect()}
          >
            Cancel
          </button>
          <button
            className="btn btn-primary !px-4 !py-2 !text-base"
            onClick={create}
          >
            Create
          </button>
        </>
      ) : (
        <button
          className="btn btn-primary !px-4 !py-2 !text-base"
          onClick={() => modalRef.current?.close()}
        >
          Start edit profile
        </button>
      )}
    </div>
  );
  return (
    <Modal
      name="create-zikkie-modal"
      ref={modalRef}
      width="max-w-2xl"
      showClose={false}
      slide
      customClass="lg:!transition-none"
      layer={{ isRoot: true }}
      header={
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Create Zik Profile
        </h3>
      }
      footer={footer}
    >
      <div className="text-center">
        <div className="flex justify-center items-center mb-2 text-red-500">
          {status == STATUS.create ? (
            <IconInfo className="w-[70px] h-[70px]" />
          ) : status == STATUS.creating ? (
            <IconSpin className="!w-[70px] !h-[70px] spinner" />
          ) : (
            <IconSuccess className="w-[70px] h-[70px] text-green-500" />
          )}
        </div>
        {status != STATUS.created ? (
          <div>
            First of all you have to create a blockchain Zik profile. <br />
            Creating is free. Then you will use it forever.
          </div>
        ) : (
          <div>
            <h4 className="text-xl font-semibold">Congratulations</h4>
            Congratulations on creating a successful Zik profile <br />
          </div>
        )}
      </div>
    </Modal>
  );
}

export default CreateProfileModal;
