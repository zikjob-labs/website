import { IconArrowLeft, IconArrowRight } from '@/assets/svg';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { useRef, useState } from 'react';

interface Props {
  updateMoreBox: (val: boolean) => void;
}

function LanguageSelector({ updateMoreBox }: Props) {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);
  useOnClickOutside(ref, () => {
    setOpen(false);
    updateMoreBox(false);
  });

  return (
    <li ref={ref} className="dropdown__item !justify-between">
      <span>Language</span>
      <button
        className="flex items-center justify-between p-0 w-auto"
        onClick={() => {
          setOpen(true);
          updateMoreBox(true);
        }}
      >
        <span className="fi fi-us rounded-[2px] mr-2"></span>
        <span>English</span>
        <IconArrowRight />
      </button>
      <div
        className={`${
          isOpen
            ? 'active visible opacity-100 translate-x-0'
            : 'opacity-0 translate-x-full'
        } language__box dropdown__menu !z-[1013] !top-0 w-72 transform transition duration-500`}
      >
        <ul className="py-2 dark:text-light">
          <li
            className="dropdown__item"
            onClick={() => {
              setOpen(false);
              updateMoreBox(false);
            }}
          >
            <IconArrowLeft />
            Back
          </li>
          <li className="dropdown__item">
            <span className="fi fi-us mr-2"></span>
            <span>English</span>
          </li>
          <li className="dropdown__item">
            <span className="fi fi-jp mr-2"></span>
            <span>日本語</span>
          </li>
          <li className="dropdown__item">
            <span className="fi fi-kr mr-2"></span>
            <span>한국어</span>
          </li>
        </ul>
      </div>
    </li>
  );
}

export default LanguageSelector;
