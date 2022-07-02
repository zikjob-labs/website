import { useAccount } from 'wagmi';

import AccountButton from './AccountButton';
import ConnectButton from './ConnectButton';

function WalletButton() {
  const { isConnected } = useAccount();
  if (isConnected) return <AccountButton />;

  return <ConnectButton />;
}

export default WalletButton;
