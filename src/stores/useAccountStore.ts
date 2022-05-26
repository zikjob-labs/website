import { AccountStore } from '@/types/account';
import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

const useAccountStore = create<AccountStore>()(
  devtools(
    immer((set) => ({
      isLogged: false,
      connect: () =>
        set((state) => {
          state.isLogged = true;
        }),
      disconnect: () =>
        set((state) => {
          state.isLogged = false;
        }),
    })),
    { name: 'account' }
  )
);

export default useAccountStore;
