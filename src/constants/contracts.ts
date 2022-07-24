import chains from './chains';

const contracts: Record<number, { address: string | null }> = {};
chains.map((chain) => {
  contracts[chain.id] = {
    address: import.meta.env[`VITE_ZIKJOB_AUTH_ADDRESS_${chain.id}`] ?? null,
  };
});

export default contracts;
