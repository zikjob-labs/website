import { useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const modalRefs: Record<string, any> = {};

export const getModalRef = <T>(name: string): T | undefined => {
  console.log(modalRefs);
  if (modalRefs[name]) return modalRefs[name]();

  return undefined;
};

function useModalRefOutside<T>(name: string, callback: () => T) {
  useEffect(() => {
    if (!modalRefs[name]) {
      modalRefs[name] = callback;
    }

    return () => {
      delete modalRefs[name];
    };
  }, []);
}

export default useModalRefOutside;
