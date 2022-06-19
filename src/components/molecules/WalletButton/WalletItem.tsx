import { IconSpin } from '@/assets/svg';
import { ModalHandle } from '@/components/atoms/Modal/Modal';
import { Fragment, FunctionComponent } from 'react';
import toast from 'react-hot-toast';
import { useConnect } from 'wagmi';

interface Props {
  item: {
    id: string;
    label: string;
    svg: FunctionComponent;
  };
  modalRef: React.RefObject<ModalHandle>;
}

function WalletItem({ item, modalRef }: Props) {
  const { connect, connectors, isConnecting, pendingConnector } = useConnect({
    onConnect: () => {
      toast.success('Connected!');
      modalRef.current?.close();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const connector = connectors.find((i) => i.id == item.id);

  return (
    <Fragment>
      {connector?.ready && !isConnecting && (
        <div
          className="modal__wallet__item"
          onClick={() => {
            connect(connector);
          }}
        >
          <span>{item.label}</span>
          <item.svg />
        </div>
      )}
      {isConnecting && item.id == pendingConnector?.id && (
        <div className="modal__wallet__item">
          <span>Waiting...</span>
          <IconSpin className="spinner" />
        </div>
      )}
    </Fragment>
  );
}

export default WalletItem;
