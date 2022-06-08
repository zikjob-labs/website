import { IconCancel, IconNavigatorLeft } from '@/assets/svg';
import {
  forwardRef,
  Fragment,
  Ref,
  useCallback,
  useImperativeHandle,
  useLayoutEffect,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

const modalRootElement = document.getElementById('modal-root');
const boxElement = document.createElement('div');

export interface ModalHandle {
  open: (calledFromChild?: boolean) => void;
  close: (calledFromChild?: boolean) => void;
}

interface Props {
  width?: string;
  slide?: boolean;
  slidePosition?: 'left' | 'right';
  customClass?: string;
  layer?: {
    isRoot?: boolean;
    parentRef?: React.RefObject<ModalHandle>;
  };
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

function Modal(
  {
    width,
    slide,
    slidePosition,
    customClass,
    layer,
    header,
    children,
    footer,
  }: Props,
  ref: Ref<ModalHandle>
) {
  const { isRoot, parentRef } = layer ?? {
    isRoot: true,
    parentRef: undefined,
  };
  const [show, setShow] = useState(false);
  const [showChild, setShowChild] = useState(false);
  const close = useCallback((calledFromChild?: boolean) => {
    if (!isRoot && parentRef) {
      parentRef.current?.open(true);
    }
    if (calledFromChild) {
      setShowChild(true);
    }
    setShow(false);
  }, []);

  useLayoutEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.removeProperty('overflow');
    };
  }, [show]);

  useImperativeHandle(
    ref,
    () => ({
      open: (calledFromChild) => {
        if (!isRoot && parentRef) {
          parentRef.current?.close(true);
        }
        if (calledFromChild) {
          setShowChild(false);
        }
        setShow(true);
      },
      close,
    }),
    [close]
  );

  const headerSection =
    header &&
    (isRoot ? (
      <div className="modal__header">
        {header}
        <button
          type="button"
          className="bg-transparent rounded-lg p-0.5 ml-auto inline-flex items-center"
        >
          <IconCancel
            className="w-6 h-6 fill-gray-400 hover:fill-gray-900 dark:hover:fill-light"
            onClick={() => close()}
          />
        </button>
      </div>
    ) : (
      <div className="modal__header">
        <div className="inline-flex justify-start items-center">
          <IconNavigatorLeft
            className="w-9 h-9 mr-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-midnight-700 rounded-full"
            onClick={() => close()}
          />
          {header}
        </div>
      </div>
    ));

  customClass = customClass ?? '';
  const activeClass = show ? 'active' : '';
  const widthClass = width ?? 'max-w-md';
  const slideClass = slide
    ? `slide ${slidePosition ? 'slide__' + slidePosition : 'slide__right'}`
    : '';

  return createPortal(
    <Fragment>
      <div className={`${activeClass} modal ${customClass} ${slideClass}`}>
        <div className={`modal__dialog ${widthClass}`}>
          <div className="modal__content">
            {headerSection}
            <div className="modal__body">
              {show ? children : showChild ? children : null}
            </div>
            {footer && <div className="modal__footer">{footer}</div>}
          </div>
        </div>
      </div>
      <div className="modal__backdrop"></div>
    </Fragment>,
    modalRootElement ?? boxElement
  );
}

export default forwardRef<ModalHandle, Props>(Modal);
