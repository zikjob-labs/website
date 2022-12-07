import { IconSpin } from '@/assets/svg';
import Modal from '@/components/atoms/Modal';
import { ModalHandle } from '@/components/atoms/Modal/Modal';
import useProfileStore from '@/stores/useProfileStore';
import { useEffect, useRef } from 'react';
import CreateProfileModal from './CreateProfileModal';

function LoadingProfileModal() {
  const [isLogged] = useProfileStore((state) => [state.isLogged]);
  const modalRef = useRef<ModalHandle>(null);

  useEffect(() => {
    if (isLogged) {
      modalRef.current?.close();
    } else {
      modalRef.current?.open();
    }

    return () => modalRef.current?.close();
  }, [isLogged]);

  return (
    <>
      <Modal
        name="loading-profile-modal"
        ref={modalRef}
        width="max-w-2xl"
        showClose={false}
        customClass="lg:!transition-none"
        layer={{ isRoot: true }}
      >
        <div className="text-center">
          <div className="flex justify-center items-center mt-8 mb-8 text-red-500">
            <IconSpin className="!w-[70px] !h-[70px] spinner" />
          </div>
          <div>Waiting for sign-in.</div>
        </div>
      </Modal>
      {isLogged && <CreateProfileModal />}
    </>
  );
}

export default LoadingProfileModal;
