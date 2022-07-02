import { IconAdd } from '@/assets/svg';
import Modal from '@/components/atoms/Modal';
import { ModalHandle } from '@/components/atoms/Modal/Modal';
import { useRef } from 'react';
import SkillUpdateModal from './SkillUpdateModal';

interface Props {
  header?: boolean;
}

function AddOrEditSkillButton({ header }: Props) {
  const modalRef = useRef<ModalHandle>(null);

  return (
    <>
      <button
        className={`btn btn-outline justify-center items-center ${
          header
            ? 'inline-flex ml-2 lg:ml-4 !px-2 !py-1 !text-sm !font-medium'
            : 'flex !m-auto'
        }`}
        onClick={() => modalRef.current?.open()}
      >
        <IconAdd className={header ? '' : 'mr-2'} />
        {header ? 'Edit' : 'Add'}
      </button>
      <Modal
        name="skill-modal"
        ref={modalRef}
        width="max-w-2xl"
        slide
        customClass="lg:!transition-none"
        layer={{ isRoot: true }}
        header={
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            {header ? 'Edit Skill' : 'Add Skill'}
          </h3>
        }
        footer={
          <div className="w-full flex justify-end">
            <button
              type="submit"
              form="skill-form"
              className="btn btn-primary !px-4 !py-2 !text-base"
            >
              Save
            </button>
          </div>
        }
      >
        <SkillUpdateModal parentRef={modalRef} />
      </Modal>
    </>
  );
}

export default AddOrEditSkillButton;
