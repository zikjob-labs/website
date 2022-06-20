import { useAccount } from 'wagmi';

import AccountButton from './AccountButton';
import ConnectButton from './ConnectButton';

function WalletButton() {
  const { data: account } = useAccount();
  if (account) return <AccountButton />;

  return <ConnectButton />;
}

export default WalletButton;
