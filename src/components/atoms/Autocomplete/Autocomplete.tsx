import {
  IconCloseBold,
  IconCloseLight,
  IconPagingBottom,
  IconPagingTop,
} from '@/assets/svg';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import React, { forwardRef, useLayoutEffect, useRef, useState } from 'react';
import MenuSelect from '../Select/MenuSelect';
import SelectItem from '../Select/SelectItem';

interface OptionItem {
  text: string;
  value: string;
}

interface Props {
  name?: string;
  label: string;
  value?: string | string[];
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
  maxItem?: number;
  freeSolo?: boolean;
  error?: boolean;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  options: OptionItem[];
}

function Autocomplete(
  {
    name,
    label,
    value,
    placeholder,
    helperText,
    multiple,
    maxItem,
    freeSolo,
    error,
    disabled,
    onChange,
    options,
  }: Props,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: any
) {
  const boxRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLElement>(null);
  const searchBoxRef = useRef<HTMLInputElement>(null);
  const data: { [key: string]: string } = {};
  const [heightBox, setHeightBox] = useState(56);
  const [show, setShow] = useState(false);
  const [valueState, setValueState] = useState(value ?? '');
  const [valueSearch, setValueSearch] = useState(
    Array.isArray(value) ? '' : value ?? ''
  );

  useOnClickOutside(boxRef, () => {
    setShow(false);
  });
  useOnClickOutside(searchBoxRef, () => {
    if (multiple || valueSearch == '' || valueState.length == 0) {
      setValueSearch('');
    } else {
      setValueSearch(data[valueState.toString()]);
    }
  });
  const toggleShow = () => {
    !disabled && setShow(!show);
  };

  const triggerBounds = boxRef.current?.getBoundingClientRect();
  let contentBounds: DOMRect | undefined;

  useLayoutEffect(() => {
    contentBounds = contentRef.current?.getBoundingClientRect();
    const newHeight = (contentBounds?.height ?? 24) + 32;
    setHeightBox(newHeight);
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = options
      .map((child) => child.value)
      .indexOf(event.target.value);

    if (index === -1) {
      return;
    }

    const child = options[index];
    setValueState(child.value);

    if (onChange) {
      onChange(event);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value == '') {
      !multiple && setValueState('');
    }
    setValueSearch(event.target.value);
  };

  const handleRemoveItemClick =
    (value: string) => (event: React.MouseEvent) => {
      event.stopPropagation();
      if (disabled) return;

      let newValue;
      if (multiple) {
        newValue = Array.isArray(valueState) ? valueState.slice() : [];
        const itemIndex = newValue.indexOf(value);
        if (itemIndex === -1) {
          return;
        } else {
          newValue.splice(itemIndex, 1);
          newValue.length == 0 && (newValue = '');
        }
      } else {
        newValue = value;
        setValueSearch('');
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

      setShow(false);
    };

  const handleItemClick = (child: OptionItem) => (event: React.MouseEvent) => {
    let newValue;

    if (multiple) {
      newValue = Array.isArray(valueState) ? valueState.slice() : [];
      if (maxItem && newValue.length >= maxItem) {
        setValueSearch('');
        setShow(false);
        return;
      }
      const itemIndex = newValue.indexOf(child.value);
      if (itemIndex === -1) {
        newValue.push(child.value);
      } else {
        newValue.splice(itemIndex, 1);
        newValue.length == 0 && (newValue = '');
      }
    } else {
      newValue = child.value;
    }

    if (valueState !== newValue) {
      setValueState(newValue);
      multiple ? setValueSearch('') : setValueSearch(child.text);

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

  const items = options
    .map((child) => {
      data[child.value] = child.text;
      return child;
    })
    .filter((child) => {
      return multiple ||
        (valueState != undefined && valueSearch != data[valueState.toString()])
        ? child.text.includes(valueSearch)
        : true;
    })
    .map((child, index) => {
      // Limit 100 items if the options more than 100 items
      if (index > 100) return null;

      return React.cloneElement(
        <SelectItem value={child.value} textDisplay={child.text}>
          {child.text}
        </SelectItem>,
        {
          key: index,
          onClick: handleItemClick(child),
          selected:
            valueState != ''
              ? (() => {
                  let selected;
                  if (multiple) {
                    const valueStateInit = Array.isArray(valueState)
                      ? valueState.slice()
                      : [];
                    selected = valueStateInit.indexOf(child.value) !== -1;
                  } else {
                    selected = child.value == valueState;
                  }

                  return selected;
                })()
              : undefined,
        }
      );
    })
    .filter((item) => item != null);

  return (
    <div className="flex flex-col">
      <div
        ref={boxRef}
        className={`relative w-full min-w-[200px]`}
        style={{
          height: heightBox + 'px',
        }}
      >
        <button
          type="button"
          className={`group peer w-full h-full px-4 py-[15px] bg-transparent text-base text-gray-900 dark:text-light font-normal rounded-[7px] outline-0 focus:outlined-0 border-[1.5px] border-t-transparent dark:border-t-transparent ${
            error
              ? 'border-t-transparent border-red-500 hover:border-t-transparent hover:border-red-500 focus:border-t-transparent focus:border-red-500'
              : disabled
              ? `border-t-transparent dark:border-t-transparent border-gray-100 dark:border-midnight-600 cursor-not-allowed`
              : `border-t-transparent dark:border-t-transparent hover:border-t-transparent ${
                  valueState
                    ? 'border-gray-900 dark:border-light'
                    : 'border-gray-400 dark:border-midnight-300'
                } dark:hover:border-t-transparent hover:border-gray-900 dark:hover:border-light focus:border-t-transparent dark:focus:border-t-transparent focus:border-primary dark:focus:border-light cursor-pointer`
          }`}
          onClick={toggleShow}
        >
          {
            <span
              ref={contentRef}
              className={`absolute inline-flex gap-2 flex-wrap top-2/4 -translate-y-2/4 left-[18px]  w-[87%] text-left text-ellipsis overflow-hidden whitespace-nowrap ${
                disabled
                  ? 'text-gray-100 dark:text-midnight-600'
                  : 'text-gray-900 dark:text-light'
              }`}
            >
              {Array.isArray(valueState) &&
                valueState.map((valueItem, index) => (
                  <div
                    key={index}
                    className="inline-flex justify-center items-center pl-3 pr-2 py-1.5 bg-blue-50 dark:bg-midnight-700 rounded-full text-sm font-medium"
                  >
                    <span>{data[valueItem]}</span>
                    <IconCloseBold
                      className={`ml-1 w-5 h-5 ${
                        disabled
                          ? 'text-gray-100 dark:text-midnight-600'
                          : 'text-gray-700 dark:text-gray-200'
                      }`}
                      onClick={handleRemoveItemClick(valueItem)}
                    />
                  </div>
                ))}
              <input
                ref={searchBoxRef}
                className={`input-autocomplete w-auto grow ${
                  freeSolo ? 'pr-6' : 'pr-12'
                } outline-0 bg-transparent dark:placeholder:text-midnight-300`}
                placeholder={placeholder}
                value={valueSearch}
                onChange={handleSearchChange}
                onKeyUp={(e) => {
                  if (e.key == ' ') {
                    e.preventDefault();
                    e.stopPropagation();
                  }
                }}
              />
            </span>
          }
          {!freeSolo && (
            <div
              className={`grid place-items-center absolute top-2/4 right-4 -translate-y-2/4 w-6 h-6 ${
                disabled
                  ? ' text-gray-100 dark:text-midnight-600'
                  : `${
                      valueState
                        ? 'text-gray-900 dark:text-light'
                        : 'text-gray-400 dark:text-midnight-300'
                    } group-focus:text-primary dark:group-focus:text-light`
              }`}
              onClick={toggleShow}
            >
              {show ? <IconPagingTop /> : <IconPagingBottom />}
            </div>
          )}
          {!multiple && valueState && (
            <div
              className={`grid place-items-center absolute top-2/4 ${
                freeSolo ? 'right-4' : 'right-10'
              } -translate-y-2/4 w-6 h-6 ${
                disabled
                  ? ' text-gray-100 dark:text-midnight-600'
                  : `${
                      valueState
                        ? 'text-gray-900 dark:text-light'
                        : 'text-gray-400 dark:text-midnight-300'
                    } group-focus:text-primary dark:group-focus:text-light`
              }`}
              onClick={handleRemoveItemClick('')}
            >
              <IconCloseLight />
            </div>
          )}
        </button>
        <input
          ref={ref}
          tabIndex={-1}
          className="absolute left-0 w-full h-0 opacity-0"
          name={name}
          value={valueState}
          onChange={handleChange}
        />
        <label
          className={`absolute flex -top-1.5 left-0 w-full h-full select-none pointer-events-none text-xs font-normal ${
            error
              ? 'text-red-500 peer-focus:text-red-500'
              : disabled
              ? 'text-gray-100 dark:text-midnight-600'
              : `${
                  valueState
                    ? 'text-gray-900 dark:text-light'
                    : 'text-gray-400 dark:text-midnight-300'
                } peer-focus:text-primary dark:peer-focus:text-light`
          } before:block before:content[' '] before:border-t-[1.5px] before:border-l-[1.5px] ${
            error
              ? 'before:border-red-500 peer-hover:before:border-red-500 peer-focus:before:border-red-500'
              : disabled
              ? 'before:border-gray-100 dark:before:border-midnight-600'
              : `${
                  valueState
                    ? 'before:border-gray-900 dark:before:border-light'
                    : 'before:border-gray-400 dark:before:border-midnight-300'
                } peer-hover:before:border-gray-900 dark:peer-hover:before:border-light peer-focus:before:border-primary dark:peer-focus:before:border-light`
          } before:rounded-tl-md before:pointer-events-none before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 after:block after:content[' '] after:border-t-[1.5px] after:border-r-[1.5px] ${
            error
              ? 'after:border-red-500 peer-hover:after:border-red-500 peer-focus:after:border-red-500'
              : disabled
              ? 'after:border-gray-100 dark:after:border-midnight-600'
              : `${
                  valueState
                    ? 'after:border-gray-900 dark:after:border-light'
                    : 'after:border-gray-400 dark:after:border-midnight-300'
                } peer-hover:after:border-gray-900 dark:peer-hover:after:border-light peer-focus:after:border-primary dark:peer-focus:after:border-light`
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
              {items.length > 0 ? (
                items
              ) : (
                <SelectItem
                  value="0"
                  textDisplay="No options"
                  onClick={() => {
                    searchBoxRef.current?.focus();
                  }}
                >
                  No options
                </SelectItem>
              )}
            </ul>
            <span className="fixed opacity-0 pointer-events-none outline-0"></span>
          </MenuSelect>
        )}
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

export default forwardRef(Autocomplete);
