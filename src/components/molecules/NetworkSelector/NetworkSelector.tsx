import { isDark } from '@/utils';
import { useRef, useState } from 'react';

import { useNetwork } from 'wagmi';

import {
  IconArrowDown,
  IconBSC,
  IconLuksoBlack,
  IconLuksoWhite,
  IconWrongNetwork,
} from '@/assets/svg';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import useThemeStore from '@/stores/useThemeStore';

import NetworkItem from './NetworkItem';

function NetworkSelector() {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);
  useOnClickOutside(ref, () => setOpen(false));

  const { chain: activeChain } = useNetwork();
  const [theme] = useThemeStore((state) => [state.theme]);

  const isDevelopment = import.meta.env.VITE_ENV == 'development';
  const networkItems = isDevelopment
    ? [
        {
          id: 31337,
          text: 'Local',
          img: IconBSC,
          active: false,
        },
      ]
    : [
        // {
        //   id: 1,
        //   text: 'Ethereum',
        //   img: IconEthereum,
        //   active: false,
        // },
        // {
        //   id: 3,
        //   text: 'Ropsten',
        //   img: IconEthereum,
        //   active: false,
        // },
        // {
        //   id: 42,
        //   text: 'Kovan',
        //   img: IconEthereum,
        //   active: false,
        // },
        // {
        //   id: 56,
        //   text: 'BSC',
        //   img: IconBSC,
        //   active: false,
        // },
        {
          id: 97,
          text: 'BSC Testnet',
          img: IconBSC,
          active: false,
        },
        {
          id: 2828,
          text: 'Lukso Testnet',
          img: isDark(theme) ? IconLuksoWhite : IconLuksoBlack,
          active: false,
        },
      ];

  let networkItemActive = networkItems[0];
  let isWrongNetwork = false;
  // When change network by Metamask, it will trigger disconnect event
  // https://github.com/MetaMask/metamask-extension/issues/13375
  if (activeChain) {
    networkItems.map((item) => {
      if (item.id == activeChain.id) {
        item.active = true;
        networkItemActive = item;
      }
    });
    isWrongNetwork =
      networkItems.findIndex((item) => item.id == activeChain.id) == -1;
  } else {
    networkItems[0].active = true;
  }

  return (
    <div ref={ref} className="dropdown network__selector flex">
      <button
        className={`btn btn-outline flex items-center lg:ml-4 ${
          isWrongNetwork
            ? '!border-red-500 !bg-red-500 hover:!bg-red-600 !text-light'
            : ''
        }`}
        onClick={() => setOpen(!isOpen)}
      >
        {isWrongNetwork ? (
          <IconWrongNetwork className="block lg:hidden w-6 h-6" />
        ) : (
          <networkItemActive.img className="block lg:hidden w-6 h-6" />
        )}
        <span className="hidden lg:block text-base">
          {isWrongNetwork ? 'Wrong Network' : networkItemActive.text}
        </span>{' '}
        <IconArrowDown className="w-5" />
      </button>
      <div className={`${isOpen ? '' : 'hidden'} dropdown__menu w-44`}>
        <ul>
          {networkItems.map((item, index) => (
            <NetworkItem key={index} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NetworkSelector;
