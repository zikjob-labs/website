interface Props {
  name?: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

function Switch({ name, checked, onChange }: Props) {
  return (
    <label className="inline-flex relative items-center cursor-pointer">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="sr-only peer"
      />
      <div className="w-[34px] h-[14px] rounded-full bg-gray-200 dark:bg-midnight-400 after:content-[''] after:absolute after:-top-[3px] after:-left-[4px] after:bg-light dark:after:bg-midnight-600 after:shadow-[0_1px_1px_0_rgba(0,0,0,0.14),0_2px_1px_0_rgba(0,0,0,0.12),0_1px_3px_0_rgba(0,0,0,0.2)] peer-checked:after:shadow-[0_1px_1px_0_rgba(0,0,0,0.14),0_2px_1px_0_rgba(0,0,0,0.12),0_1px_3px_0_rgba(0,0,0,0.2)] after:rounded-full after:h-5 after:w-5 after:transition-all peer peer-checked:bg-blue-100 dark:peer-checked:bg-blue-50 peer-checked:after:bg-primary peer-checked:after:translate-x-full before:w-[38px] before:h-[38px] before:absolute before:-top-3 before:right-[27%] peer-checked:before:-right-[32%] before:rounded-full before:hover:bg-gray-900/[.04] peer-checked:before:hover:bg-blue-900/[.06]"></div>
    </label>
  );
}

export default Switch;
