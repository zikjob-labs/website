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
    default: 'https://data-seed-prebsc-1-s2.binance.org:8545',
  },
  testnet: true,
  blockExplorers: {
    default: {
      name: 'bscscan',
      url: 'https://testnet.bscscan.com',
    },
  },
};

const luksoTestnet: Chain = {
  id: 2828,
  name: 'Lukso L16',
  network: 'l16',
  nativeCurrency: {
    name: 'Lukso Testnet Token',
    decimals: 18,
    symbol: 'LYXt',
  },
  rpcUrls: {
    default: 'https://rpc.l16.lukso.network/',
  },
  testnet: true,
  blockExplorers: {
    default: {
      name: 'luksoscan',
      url: 'https://explorer.execution.l16.lukso.network/',
    },
  },
};

const local: Chain = {
  id: 31337,
  name: 'Hardhat Node',
  network: 'unknown',
  nativeCurrency: {
    name: 'Hardhat Node Token',
    decimals: 18,
    symbol: 'tLN',
  },
  rpcUrls: {
    default: 'http://127.0.0.1:8546/',
  },
  testnet: true,
  blockExplorers: {
    default: {
      name: 'local',
      url: 'http://127.0.0.1:8546/',
    },
  },
};

const chains = [
  chain.mainnet,
  chain.ropsten,
  chain.kovan,
  bsc,
  bscTestnet,
  luksoTestnet,
];

const isDevelopment = import.meta.env.VITE_ENV == 'development';
isDevelopment && chains.push(local);

export default chains;
