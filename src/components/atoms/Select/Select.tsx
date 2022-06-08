import { IconCloseCircle, IconPagingBottom, IconPagingTop } from '@/assets/svg';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import React, { useLayoutEffect, useRef, useState } from 'react';
import MenuSelect from './MenuSelect';
import { SelectItemProps } from './SelectItem';

interface Props {
  name?: string;
  label: string;
  value?: string | string[];
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
  tag?: boolean;
  error?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  children: React.ReactElement<SelectItemProps>[];
}

function Select({
  name,
  label,
  value,
  placeholder,
  helperText,
  multiple,
  tag,
  error,
  onChange,
  children,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLElement>(null);
  const [heightBox, setHeightBox] = useState(56);
  const [show, setShow] = useState(false);
  const [valueState, setValueState] = useState(value ?? '');

  useOnClickOutside(ref, () => {
    setShow(false);
  });
  const toggleShow = () => {
    setShow(!show);
  };

  const triggerBounds = ref.current?.getBoundingClientRect();
  let contentBounds: DOMRect | undefined;

  useLayoutEffect(() => {
    contentBounds = contentRef.current?.getBoundingClientRect();
    const newHeight = (contentBounds?.height ?? 24) + 32;
    setHeightBox(newHeight);
  });

  const data: { [key: string]: string } = {};

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = children
      .map((child) => child.props.value)
      .indexOf(event.target.value);

    if (index === -1) {
      return;
    }

    const child = children[index];
    setValueState(child.props.value);

    if (onChange) {
      onChange(event);
    }
  };

  const handleRemoveItemClick =
    (value: string) => (event: React.MouseEvent) => {
      event.stopPropagation();

      let newValue;
      newValue = Array.isArray(valueState) ? valueState.slice() : [];
      const itemIndex = newValue.indexOf(value);
      if (itemIndex === -1) {
        return;
      } else {
        newValue.splice(itemIndex, 1);
        newValue.length == 0 && (newValue = '');
      }
      setValueState(newValue);

      if (onChange) {
        const nativeEvent = event.nativeEvent || event;
        const clonedEvent = new (nativeEvent.constructor as {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          new (...args: any): React.ChangeEvent<HTMLInputElement>;
        })(nativeEvent.type, nativeEvent);

        Object.defineProperty(clonedEvent, 'target', {
          writable: true,
          value: { value: newValue, name },
        });
        onChange(clonedEvent);
      }
    };

  const handleItemClick =
    (child: React.ReactElement<SelectItemProps>) =>
    (event: React.MouseEvent) => {
      let newValue;

      if (multiple) {
        newValue = Array.isArray(valueState) ? valueState.slice() : [];
        const itemIndex = newValue.indexOf(child.props.value);
        if (itemIndex === -1) {
          newValue.push(child.props.value);
        } else {
          newValue.splice(itemIndex, 1);
          newValue.length == 0 && (newValue = '');
        }
      } else {
        newValue = child.props.value;
      }

      if (valueState !== newValue) {
        setValueState(newValue);

        if (onChange) {
          const nativeEvent = event.nativeEvent || event;
          const clonedEvent = new (nativeEvent.constructor as {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            new (...args: any): React.ChangeEvent<HTMLInputElement>;
          })(nativeEvent.type, nativeEvent);

          Object.defineProperty(clonedEvent, 'target', {
            writable: true,
            value: { value: newValue, name },
          });
          onChange(clonedEvent);
        }
      }

      setShow(false);
    };

  const items = children.map((child) => {
    data[child.props.value] = child.props.textDisplay;
    return React.cloneElement(child, {
      onClick: handleItemClick(child),
      selected:
        valueState != ''
          ? (() => {
              let selected;
              if (multiple) {
                const valueStateInit = Array.isArray(valueState)
                  ? valueState.slice()
                  : [];
                selected = valueStateInit.indexOf(child.props.value) !== -1;
              } else {
                selected = child.props.value == valueState;
              }

              return selected;
            })()
          : undefined,
    });
  });

  return (
    <div
      ref={ref}
      className={`relative w-full min-w-[200px]`}
      style={{
        height: heightBox + 'px',
      }}
    >
      <button
        type="button"
        className={`group peer w-full h-full px-4 py-[15px] bg-transparent text-base caret-transparent text-gray-900 dark:text-light font-normal rounded-[7px] outline-0 focus:outlined-0 border-[1.5px] border-t-transparent dark:border-t-transparent ${
          error
            ? 'border-t-transparent border-red-500 hover:border-t-transparent hover:border-red-500 focus:border-t-transparent focus:border-red-500'
            : 'border-t-transparent dark:border-t-transparent border-gray-400 dark:border-midnight-300 hover:border-t-transparent dark:hover:border-t-transparent hover:border-gray-900 dark:hover:border-light focus:border-t-transparent dark:focus:border-t-transparent focus:border-primary dark:focus:border-light'
        } placeholder:text-gray-400 dark:placeholder:text-midnight-300 cursor-pointer`}
        onClick={toggleShow}
      >
        {valueState ? (
          <span
            ref={contentRef}
            className="absolute pr-12 top-2/4 -translate-y-2/4 left-[18px] text-gray-900 dark:text-light"
          >
            {Array.isArray(valueState) ? (
              tag ? (
                <div className="flex flex-row flex-wrap gap-2">
                  {valueState.map((valueItem, index) => (
                    <div
                      key={index}
                      className="inline-flex justify-center items-center pl-3 pr-2 py-1.5 bg-blue-50 dark:bg-midnight-700 rounded-full text-sm font-medium"
                    >
                      <span>{data[valueItem]}</span>
                      <IconCloseCircle
                        className="ml-1 w-5 h-5 text-gray-700 dark:text-gray-200"
                        onClick={(e) => handleRemoveItemClick(valueItem)(e)}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                valueState.map((valueItem) => data[valueItem]).join(',')
              )
            ) : (
              data[valueState]
            )}
          </span>
        ) : (
          <span className="absolute top-2/4 -translate-y-2/4 left-[18px] text-gray-400 dark:text-midnight-300">
            {placeholder}
          </span>
        )}
        <div
          className="grid place-items-center absolute top-2/4 right-4 w-6 h-6 text-gray-400 dark:text-midnight-300 group-focus:text-primary dark:group-focus:text-light -translate-y-2/4"
          onClick={toggleShow}
        >
          {show ? <IconPagingTop /> : <IconPagingBottom />}
        </div>
      </button>
      <input
        tabIndex={-1}
        className="absolute left-0 w-full h-0 opacity-0"
        name={name}
        value={Array.isArray(valueState) ? valueState.join(',') : valueState}
        onChange={handleChange}
      />
      <label
        className={`absolute flex -top-1.5 left-0 w-full h-full select-none pointer-events-none text-xs font-normal ${
          error
            ? 'text-red-500 peer-focus:text-red-500'
            : 'text-gray-400 dark:text-midnight-300 peer-focus:text-primary dark:peer-focus:text-light'
        } before:block before:content[' '] before:border-t-[1.5px] before:border-l-[1.5px] ${
          error
            ? 'before:border-red-500 peer-hover:before:border-red-500 peer-focus:before:border-red-500'
            : 'before:border-gray-400 dark:before:border-midnight-300 peer-hover:before:border-gray-900 dark:peer-hover:before:border-light peer-focus:before:border-primary dark:peer-focus:before:border-light'
        } before:rounded-tl-md before:pointer-events-none before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 after:block after:content[' '] after:border-t-[1.5px] after:border-r-[1.5px] ${
          error
            ? 'after:border-red-500 peer-hover:after:border-red-500 peer-focus:after:border-red-500'
            : 'after:border-gray-400 dark:after:border-midnight-300 peer-hover:after:border-gray-900 dark:peer-hover:after:border-light peer-focus:after:border-primary dark:peer-focus:after:border-light'
        } after:rounded-tr-md after:pointer-events-none after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1`}
      >
        {label}
      </label>
      {show && (
        <MenuSelect>
          <span className="fixed opacity-0 pointer-events-none outline-0"></span>
          <ul
            className={`fixed py-2 left-0 z-[1300] overflow-auto opacity-100 max-h-[150px] bg-light dark:bg-midnight-900 rounded-lg shadow-[0_0_20px_0_rgba(0,0,0,0.1)] font-normal text-gray-900 dark:text-light focus:outline-none`}
            style={{
              width: triggerBounds ? triggerBounds.width : '100%',
              top: triggerBounds ? triggerBounds.bottom + 8 : '0',
              left: triggerBounds ? triggerBounds.x : '0',
            }}
          >
            {items}
          </ul>
          <span className="fixed opacity-0 pointer-events-none outline-0"></span>
        </MenuSelect>
      )}
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

export default Select;
