import { IconEdit } from '@/assets/svg';
import Modal from '@/components/atoms/Modal';
import { ModalHandle } from '@/components/atoms/Modal/Modal';
import { isMobile } from '@/utils/userAgent';
import { useRef } from 'react';
import EditInfoModal from './EditInfoModal';

function EditInfoButton() {
  const modalRef = useRef<ModalHandle>(null);

  return (
    <div className="ml-1 lg:ml-8">
      {isMobile ? (
        <button
          className="text-primary dark:text-light"
          onClick={() => modalRef.current?.open()}
        >
          <IconEdit />
        </button>
      ) : (
        <button
          className="btn btn-outline !px-2 !py-1.5 !text-sm inline-flex items-center"
          onClick={() => modalRef.current?.open()}
        >
          <IconEdit className="w-6 h-6 mr-2" /> Edit
        </button>
      )}
      <Modal
        name="edit-info-modal"
        ref={modalRef}
        width="max-w-2xl"
        slide
        customClass="lg:!transition-none"
        layer={{ isRoot: true }}
        header={
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Personal Information
          </h3>
        }
        footer={
          <div className="w-full flex justify-end">
            <button
              type="submit"
              form="info-edit-form"
              className="btn btn-primary !px-4 !py-2 !text-base"
            >
              Save
            </button>
          </div>
        }
      >
        <EditInfoModal parentRef={modalRef} />
      </Modal>
    </div>
  );
}

export default EditInfoButton;
