import { useState } from 'react';

interface Props {
  name?: string;
  label: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

function Radio({ name, label, checked, onChange }: Props) {
  const [check, setCheck] = useState(checked ?? false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(e.target.checked);

    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="inline-flex items-center">
      <label className="relative flex items-center cursor-pointer p-3 rounded-full">
        <input
          name={name}
          type="radio"
          checked={check}
          onChange={handleChange}
          className="peer appearance-none w-6 h-6 border-[2px] rounded-full border-gray-400 dark:border-gray-100 cursor-pointer transition-all before:content[''] before:block before:w-10 before:h-10 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:bg-gray-500 checked:before:bg-green-500 before:opacity-0 hover:before:opacity-10 before:transition-opacity text-green-500 checked:border-green-500 dark:checked:border-green-500"
        />
        <div className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity text-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
          </svg>
        </div>
      </label>
      {/* TODO: handle click label */}
      <label className="text-grey-600 font-normal select-none cursor-pointer mt-px">
        {label}
      </label>
    </div>
  );
}

export default Radio;
