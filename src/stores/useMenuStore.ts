import create, { GetState, Mutate, SetState, StoreApi } from 'zustand';
import { devtools } from 'zustand/middleware';
import immer from '@/utils/immer';
import { MenuStore } from '@/types/menu';

const useMenuStore = create<
  MenuStore,
  SetState<MenuStore>,
  GetState<MenuStore>,
  Mutate<StoreApi<MenuStore>, [['zustand/devtools', never]]>
>(
  devtools(
    immer((set) => ({
      isMobileMenuActive: false,
      setIsMobileMenuActive: (newVal) =>
        set((state) => {
          state.isMobileMenuActive = newVal;
        }),
    })),
    { name: 'menu' }
  )
);

export default useMenuStore;
