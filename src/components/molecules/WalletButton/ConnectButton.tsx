import { Fragment, useEffect, useState } from 'react';
import WalletModal from './WalletModal';

function ConnectButton() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    return () => {
      setOpen(false);
    };
  }, []);

  return (
    <Fragment>
      <button
        className="btn btn-primary btn-primary-gradient"
        onClick={() => setOpen(true)}
      >
        Connect
      </button>
      {open && <WalletModal close={() => setOpen(false)} />}
    </Fragment>
  );
}

export default ConnectButton;
