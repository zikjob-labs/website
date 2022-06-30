import { chain, Chain } from 'wagmi';

const bsc: Chain = {
  id: 56,
  name: 'Binance Smart Chain',
  network: 'bsc',
  nativeCurrency: {
    name: 'Binance Smart Chain',
    decimals: 18,
    symbol: 'BNB',
  },
  rpcUrls: {
    default: 'https://bsc-dataseed.binance.org/',
  },
  testnet: false,
  blockExplorers: {
    default: {
      name: 'bscscan',
      url: 'https://bscscan.com',
    },
  },
};

const bscTestnet: Chain = {
  id: 97,
  name: 'Binance Smart Chain Testnet',
  network: 'bsc_testnet',
  nativeCurrency: {
    name: 'Binance Smart Chain Testnet',
    decimals: 18,
    symbol: 'tBNB',
  },
  rpcUrls: {
    default: 'https://data-seed-prebsc-2-s3.binance.org:8545',
  },
  testnet: true,
  blockExplorers: {
    default: {
      name: 'bscscan',
      url: 'https://testnet.bscscan.com',
    },
  },
};

const chains = [chain.mainnet, chain.ropsten, chain.kovan, bsc, bscTestnet];

export default chains;
