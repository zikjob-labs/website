import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const presentationElement = document.getElementById('presentation');

interface Props {
  children: React.ReactNode;
}

function MenuSelect({ children }: Props) {
  const boxElement = document.createElement('div');

  useEffect(() => {
    presentationElement?.append(boxElement);

    return () => {
      boxElement.remove();
    };
  }, []);

  return createPortal(children, boxElement);
}

export default MenuSelect;
