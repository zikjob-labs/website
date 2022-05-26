import {
  IconCancel,
  // IconCoinbaseWallet,
  IconMetaMask,
  IconWalletConnect,
} from '@/assets/svg';
import { Fragment } from 'react';
import WalletItem from './WalletItem';

interface Props {
  close: () => void;
}

function WalletModal({ close }: Props) {
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
      <div className={`modal modal__wallet`}>
        <div className="modal__dialog">
          <div className="modal__content">
            <div className="modal__header">
              <h3 className="text-lg font-normal text-gray-900 dark:text-white">
                Connect a wallet
              </h3>
              <button
                type="button"
                className="bg-transparent rounded-lg p-0.5 ml-auto inline-flex items-center"
              >
                <IconCancel
                  className="w-6 h-6 fill-gray-400 hover:fill-gray-900 dark:hover:fill-light"
                  onClick={close}
                />
              </button>
            </div>
            <div className="modal__body">
              {walletItems.map((item, index) => (
                <WalletItem key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`modal__backdrop bg-gray-900 bg-opacity-30 dark:bg-opacity-50 fixed inset-0 z-[1100]`}
      ></div>
    </Fragment>
  );
}

export default WalletModal;
