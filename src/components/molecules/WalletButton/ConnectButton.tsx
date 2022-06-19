import { IconMetaMask, IconWalletConnect } from '@/assets/svg';
import Modal from '@/components/atoms/Modal';
import { ModalHandle } from '@/components/atoms/Modal/Modal';
import { Fragment, useRef } from 'react';
import WalletItem from './WalletItem';

function ConnectButton() {
  const modalRef = useRef<ModalHandle>(null);

  const walletItems = [
    {
      id: 'metaMask',
      label: 'MetaMask',
      svg: IconMetaMask,
    },
    {
      id: 'walletConnect',
      label: 'WalletConnect',
      svg: IconWalletConnect,
    },
    // {
    //   id: 'coinbaseWallet',
    //   label: 'Coinbase Wallet',
    //   svg: IconCoinbaseWallet,
    // },
  ];

  return (
    <Fragment>
      <button
        className="btn btn-primary"
        onClick={() => modalRef.current?.open()}
      >
        Connect
      </button>
      {/* TODO: Reuse defined modal */}
      <Modal
        name="connect-wallet"
        ref={modalRef}
        customClass="modal__wallet"
        layer={{ isRoot: true }}
        header={
          <h3 className="text-lg font-normal text-gray-900 dark:text-white">
            Connect a wallet
          </h3>
        }
      >
        {walletItems.map((item, index) => (
          <WalletItem key={index} item={item} modalRef={modalRef} />
        ))}
      </Modal>
    </Fragment>
  );
}

export default ConnectButton;
