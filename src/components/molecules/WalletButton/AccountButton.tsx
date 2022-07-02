import { useRef, useState } from 'react';

import toast from 'react-hot-toast';
import { useAccount, useDisconnect } from 'wagmi';

import { IconArrowDown, IconLogout, IconWallet } from '@/assets/svg';
import useOnClickOutside from '@/hooks/useOnClickOutside';

function AccountButton() {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);
  useOnClickOutside(ref, () => setOpen(false));

  const { address } = useAccount();
  const { disconnect } = useDisconnect({
    onError: (error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  return (
    <div ref={ref} className="dropdown flex">
      <button className="btn btn-wallet" onClick={() => setOpen(!isOpen)}>
        <IconWallet />
        0x...
        {address?.substring(address.length - 4, address.length)}
        <IconArrowDown />
      </button>
      <div className={`${isOpen ? '' : 'hidden'} dropdown__menu w-52`}>
        <ul>
          <li className="dropdown__item !justify-between">Profile</li>
          <li
            className="dropdown__item !justify-between"
            onClick={() => disconnect()}
          >
            Disconnect
            <IconLogout />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AccountButton;
