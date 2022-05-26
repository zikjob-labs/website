import { IconMore } from '@/assets/svg';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { useRef, useState } from 'react';
import Menu from '../Menu';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';

function MoreButton() {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const [isOpenLanguageSelector, setOpenLanguageSelector] = useState(false);
  useOnClickOutside(ref, () => {
    setOpen(false);
    setOpenLanguageSelector(false);
  });

  return (
    <div ref={ref} className="dropdown">
      <button
        className="btn btn-outline flex items-center !px-2"
        onClick={() => setOpen(!isOpen)}
      >
        <IconMore className="w-5" />
      </button>
      <div
        className={`${isOpen ? '' : 'hidden'} ${
          isOpenLanguageSelector ? 'invisible' : 'visible'
        } more__box dropdown__menu w-72`}
      >
        <ul className="relative py-2 text-base">
          <Menu />
          <ThemeToggle />
          <LanguageSelector
            updateMoreBox={(val: boolean) => setOpenLanguageSelector(val)}
          />
        </ul>
      </div>
    </div>
  );
}

export default MoreButton;
