import Modal from '@/components/atoms/Modal';
import { ModalHandle } from '@/components/atoms/Modal/Modal';
import { useRef } from 'react';

interface Props {
  name: string;
  onDelete: () => void;
}

function DeleteButton({ name, onDelete }: Props) {
  const modalRef = useRef<ModalHandle>(null);

  return (
    <>
      <button
        className="px-4 py-2 text-gray-600 hover:text-red-500 hover:bg-red-50 active:text-red-500 active:bg-red-100 disabled:text-gray-300 disabled:hover:text-gray-300 disabled:hover:bg-light disabled:cursor-not-allowed dark:text-midnight-100 dark:hover:text-red-500 dark:hover:bg-midnight-700 dark:active:text-red-500 dark:active:bg-midnight-600 dark:disabled:text-midnight-400 dark:disabled:hover:text-midnight-400 dark:disabled:hover:bg-transparent dark:disabled:cursor-not-allowed rounded-lg"
        onClick={() => modalRef.current?.open()}
      >
        Delete
      </button>
      <Modal
        name={name}
        ref={modalRef}
        width="max-w-lg"
        customClass="!z-[1301] !pt-20 lg:!transition-none"
        backdropCustomClass="!z-[1201]"
        layer={{ isRoot: false }}
      >
        <div className="py-4">Are you sure you want to delete?</div>
        <div className="inline-flex justify-end items-center">
          <button
            className="px-4 py-2 text-gray-400 disabled:text-gray-300 disabled:hover:text-gray-300 disabled:hover:bg-light disabled:cursor-not-allowed dark:text-gray-200 dark:disabled:text-midnight-400 dark:disabled:hover:text-midnight-400 dark:disabled:hover:bg-transparent dark:disabled:cursor-not-allowed rounded-lg"
            onClick={() => modalRef.current?.close()}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 text-red-500 hover:bg-red-50 active:text-red-500 active:bg-red-100 disabled:text-gray-300 disabled:hover:text-gray-300 disabled:hover:bg-light disabled:cursor-not-allowed dark:text-midnight-100 dark:hover:text-red-500 dark:hover:bg-midnight-700 dark:active:text-red-500 dark:active:bg-midnight-600 dark:disabled:text-midnight-400 dark:disabled:hover:text-midnight-400 dark:disabled:hover:bg-transparent dark:disabled:cursor-not-allowed rounded-lg"
            onClick={() => {
              modalRef.current?.close();
              onDelete();
            }}
          >
            Delete
          </button>
        </div>
      </Modal>
    </>
  );
}

export default DeleteButton;
