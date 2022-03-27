import create, { GetState, Mutate, SetState, State, StoreApi } from 'zustand';
import { persist, subscribeWithSelector, devtools } from 'zustand/middleware';
import immer from '@/utils/immer';

interface CountStore extends State {
  count: number;
  increment: () => void;
  set: (x: number) => void;
}

const useCountStore = create<
  CountStore,
  SetState<CountStore>,
  GetState<CountStore>,
  Mutate<
    StoreApi<CountStore>,
    [
      ['zustand/devtools', never],
      ['zustand/subscribeWithSelector', never],
      ['zustand/persist', Partial<CountStore>]
    ]
  >
>(
  devtools(
    subscribeWithSelector(
      persist(
        immer((set, get) => ({
          count: 0,
          increment: () =>
            set((state) => {
              state.count = get().count + 1;
            }),
          set: (number) =>
            set((state) => {
              state.count = number;
            }),
        })),
        { name: 'count-storage' }
      )
    ),
    { name: 'prefix' }
  )
);

export default useCountStore;
