import { BrowserRouter } from 'react-router-dom';
import { createClient, WagmiConfig, chain, Chain } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
// import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import AppRoutes from './AppRoutes';
import { setTheme } from './utils';

const bsc: Chain = {
  id: 56,
  name: 'Binance Smart Chain',
  network: 'bsc',
  rpcUrls: {
    default: 'https://bsc-dataseed.binance.org/',
  },
  testnet: false,
};

const bscTestnet: Chain = {
  id: 97,
  name: 'Binance Smart Chain Testnet',
  network: 'bsc_testnet',
  rpcUrls: {
    default: 'https://data-seed-prebsc-2-s3.binance.org:8545',
  },
  testnet: true,
};

const chains = [chain.mainnet, chain.ropsten, chain.kovan, bsc, bscTestnet];
const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({
      chains,
      options: {
        shimDisconnect: false,
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
    // TODO: still error https://github.com/tmm/wagmi/issues/383
    // new CoinbaseWalletConnector({
    //   options: {
    //     appName: 'ZikJob',
    //   },
    // }),
  ],
});

function App() {
  const theme = window.localStorage.getItem('theme');
  if (theme) {
    // Set theme when reload page
    setTheme(JSON.parse(theme)['state']['theme']);
  }

  return (
    <BrowserRouter>
      <WagmiConfig client={client}>
        <AppRoutes />
      </WagmiConfig>
    </BrowserRouter>
  );
}

export default App;
