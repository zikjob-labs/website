import { IconEditFill } from '@/assets/svg';
import Modal from '@/components/atoms/Modal';
import { ModalHandle } from '@/components/atoms/Modal/Modal';
import DeleteButton from '@/components/molecules/DeleteButton';
import useProfileStore from '@/stores/useProfileStore';
import { Education } from '@/types/profile';
import { useRef } from 'react';
import EducationUpdateModal from './EducationUpdateModal';

function EditEducationButton({ item }: { item: Education }) {
  const modalRef = useRef<ModalHandle>(null);
  const [profile, setProfile] = useProfileStore((state) => [
    state.profile,
    state.setProfile,
  ]);
  const deleteItem = () => {
    if (!profile?.education) return;

    const education = [...profile.education];
    const itemIndex = education.findIndex((i) => i.id == item.id);

    if (itemIndex != -1) {
      education.splice(itemIndex, 1);
      setProfile({ ...profile, education });
      modalRef.current?.close();
    }
  };

  return (
    <>
      <button onClick={() => modalRef.current?.open()}>
        <span className="block flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-midnight-600">
          <IconEditFill className="w-8 h-8 text-primary dark:text-light" />
        </span>
      </button>
      <Modal
        name="edit-education-modal"
        ref={modalRef}
        width="max-w-2xl"
        slide
        customClass="lg:!transition-none"
        layer={{ isRoot: true }}
        header={
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Edit Education
          </h3>
        }
        footer={
          <div className="w-full flex justify-between">
            <DeleteButton name="delete-education-modal" onDelete={deleteItem} />
            <button
              type="submit"
              form={`edit-education-form-${item.id}`}
              className="btn btn-primary !px-4 !py-2 !text-base"
            >
              Save
            </button>
          </div>
        }
      >
        <EducationUpdateModal item={item} parentRef={modalRef} />
      </Modal>
    </>
  );
}

export default EditEducationButton;
