import { IconEditFill } from '@/assets/svg';
import Modal from '@/components/atoms/Modal';
import { ModalHandle } from '@/components/atoms/Modal/Modal';
import useProfileStore from '@/stores/useProfileStore';
import { Experience } from '@/types/profile';
import { useRef } from 'react';
import ExperienceUpdateModal from './ExperienceUpdateModal';

function EditExperienceButton({ item }: { item: Experience }) {
  const modalRef = useRef<ModalHandle>(null);
  const [profile, setProfile] = useProfileStore((state) => [
    state.profile,
    state.setProfile,
  ]);
  const deleteItem = () => {
    if (!profile?.experiences) return;

    const experiences = [...profile.experiences];
    const itemIndex = experiences.findIndex((i) => i.id == item.id);

    if (itemIndex != -1) {
      experiences.splice(itemIndex, 1);
      setProfile({ ...profile, experiences });
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
        name="edit-experience-modal"
        ref={modalRef}
        width="max-w-2xl"
        slide
        customClass="lg:!transition-none"
        layer={{ isRoot: true }}
        header={
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Edit Experience
          </h3>
        }
        footer={
          <div className="w-full flex justify-between">
            <button
              className="px-4 py-2 text-gray-600 hover:text-red-500 hover:bg-red-50 active:text-red-500 active:bg-red-100 disabled:text-gray-300 disabled:hover:text-gray-300 disabled:hover:bg-light disabled:cursor-not-allowed dark:text-midnight-100 dark:hover:text-red-500 dark:hover:bg-midnight-700 dark:active:text-red-500 dark:active:bg-midnight-600 dark:disabled:text-midnight-400 dark:disabled:hover:text-midnight-400 dark:disabled:hover:bg-transparent dark:disabled:cursor-not-allowed rounded-lg"
              onClick={deleteItem}
            >
              Delete
            </button>
            <button
              type="submit"
              form={`edit-experience-form-${item.id}`}
              className="btn btn-primary !px-4 !py-2 !text-base"
            >
              Save
            </button>
          </div>
        }
      >
        <ExperienceUpdateModal item={item} parentRef={modalRef} />
      </Modal>
    </>
  );
}

export default EditExperienceButton;
