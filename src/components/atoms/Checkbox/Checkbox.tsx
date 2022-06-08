import React, { useState } from 'react';

interface Props {
  name?: string;
  label?: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

function Checkbox({ name, label, checked, onChange }: Props) {
  const [check, setCheck] = useState(checked ?? false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(e.target.checked);

    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="inline-flex items-center">
      <label className="relative inline-flex items-center cursor-pointer p-3 rounded-full">
        <input
          type="checkbox"
          name={name}
          checked={check}
          onChange={handleChange}
          className="peer appearance-none w-6 h-6 rounded-lg border-[1.5px] border-gray-400 dark:border-gray-100 cursor-pointer transition-all disabled:border-gray-300 dark:disabled:border-midnight-400 disabled:checked:bg-gray-300 before:content[''] before:block before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:bg-gray-500 checked:before:bg-green-500 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-green-500 checked:border-green-500 dark:checked:bg-green-500 dark:checked:border-green-500"
        />
        <div className="text-light dark:text-midnight-800 absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </label>
      <label
        className="text-grey-600 font-normal select-none cursor-pointer mt-px"
        onClick={() => setCheck(!check)}
      >
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
