import React, { useEffect, useState } from 'react';

interface Props {
  name?: string;
  label: string;
  value?: string;
  placeholder?: string;
  helperText?: string;
  error?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

function TextField({
  name,
  label,
  value,
  placeholder,
  helperText,
  error,
  onChange,
}: Props) {
  const [valueState, setValueState] = useState(value ?? '');

  useEffect(() => {
    return () => {
      setValueState(value ?? '');
    };
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueState(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="relative w-full min-w-[200px] h-14">
        <input
          name={name}
          value={valueState}
          className={`peer w-full h-full px-4 py-[15px] bg-transparent text-base text-gray-900 dark:text-light font-normal rounded-[7px] outline-0 focus:outlined-0 border-[1.5px] border-t-transparent dark:border-t-transparent ${
            error
              ? 'border-red-500 placeholder-shown:border-t-transparent placeholder-shown:border-red-500 hover:border-t-transparent hover:border-red-500 focus:border-t-transparent focus:border-red-500'
              : 'border-gray-900 dark:border-light placeholder-shown:border-t-transparent dark:placeholder-shown:border-t-transparent placeholder-shown:border-gray-400 dark:placeholder-shown:border-midnight-300 hover:border-t-transparent dark:hover:border-t-transparent hover:border-gray-900 dark:hover:border-light focus:border-t-transparent dark:focus:border-t-transparent focus:border-primary dark:focus:border-light'
          } placeholder:text-gray-400 dark:placeholder:text-midnight-300`}
          placeholder={placeholder}
          onChange={handleChange}
        />
        <label
          className={`absolute flex -top-1.5 left-0 w-full h-full select-none pointer-events-none text-xs font-normal ${
            error
              ? 'text-red-500 peer-placeholder-shown:text-red-500 peer-focus:text-red-500'
              : 'text-gray-900 dark:text-light peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-midnight-300 peer-focus:text-primary dark:peer-focus:text-light'
          } before:block before:content[' '] before:border-t-[1.5px] before:border-l-[1.5px] ${
            error
              ? 'before:border-red-500 peer-placeholder-shown:before:border-red-500 peer-hover:before:border-red-500 peer-focus:before:border-red-500'
              : 'before:border-gray-900 dark:before:border-light peer-placeholder-shown:before:border-gray-400 dark:peer-placeholder-shown:before:border-midnight-300 peer-hover:before:border-gray-900 dark:peer-hover:before:border-light peer-focus:before:border-primary dark:peer-focus:before:border-light'
          } before:rounded-tl-md before:pointer-events-none before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 after:block after:content[' '] after:border-t-[1.5px] after:border-r-[1.5px] ${
            error
              ? 'after:border-red-500 peer-placeholder-shown:after:border-red-500 peer-hover:after:border-red-500 peer-focus:after:border-red-500'
              : 'after:border-gray-900 dark:after:border-light peer-placeholder-shown:after:border-gray-400 dark:peer-placeholder-shown:after:border-midnight-300 peer-hover:after:border-gray-900 dark:peer-hover:after:border-light peer-focus:after:border-primary dark:peer-focus:after:border-light'
          } after:rounded-tr-md after:pointer-events-none after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1`}
        >
          {label}
        </label>
      </div>
      {helperText && (
        <p
          className={`mx-4 mt-1 text-xs ${
            error ? 'text-red-500' : 'text-gray-400 dark:text-midnight-300'
          }`}
        >
          {helperText}
        </p>
      )}
    </div>
  );
}

export default TextField;
