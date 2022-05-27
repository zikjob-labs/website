import { IconArrowDown, IconLogout, IconWallet } from '@/assets/svg';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { useAccount, useDisconnect } from 'wagmi';

function AccountButton() {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);
  useOnClickOutside(ref, () => setOpen(false));
  useEffect(() => {
    return () => {
      ref.current = null;
      setOpen(false);
    };
  }, []);

  const { data: account } = useAccount();
  const { disconnect } = useDisconnect({
    onSuccess: () => {
      toast.success('Disconnected!');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return (
    <div ref={ref} className="dropdown flex">
      <button className="btn btn-wallet" onClick={() => setOpen(!isOpen)}>
        <IconWallet />
        0x...
        {account?.address?.substring(
          account.address.length - 4,
          account.address.length
        )}
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
