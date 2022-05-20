import create from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools, persist } from 'zustand/middleware';
import { ThemeStore } from '@/types/theme';
import { ThemeTypes } from '@/constants';
import { setTheme } from '@/utils';

const useThemeStore = create<ThemeStore>()(
  devtools(
    persist(
      immer((set) => ({
        theme: ThemeTypes.light,
        toggleTheme: () =>
          set((state) => {
            state.theme =
              state.theme == ThemeTypes.light
                ? ThemeTypes.dark
                : ThemeTypes.light;
            setTheme(state.theme);
          }),
      })),
      { name: 'theme' }
    ),
    {
      name: 'theme-storage',
    }
  )
);

export default useThemeStore;
