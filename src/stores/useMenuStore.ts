import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { MenuState } from '@/types/menu';

const useMenuStore = create<MenuState>()(
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
