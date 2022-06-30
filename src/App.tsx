import { Suspense } from 'react';

import { BrowserRouter } from 'react-router-dom';
import { createClient, WagmiConfig } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

// import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import AppRoutes from './AppRoutes';
import { IconSpin } from './assets/svg';
import chains from './constants/chains';
import { setTheme } from './utils';

const client = createClient({
  autoConnect: false,
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
        <Suspense
          fallback={
            <div className="h-[100vh] flex justify-center items-center">
              <IconSpin className="spinner" />
            </div>
          }
        >
          <AppRoutes />
        </Suspense>
      </WagmiConfig>
    </BrowserRouter>
  );
}

export default App;
