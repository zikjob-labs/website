import create, {
  GetState,
  Mutate,
  SetState,
  State,
  StateCreator,
  StoreApi,
} from 'zustand';
import { persist, subscribeWithSelector, devtools } from 'zustand/middleware';
import produce, { Draft } from 'immer';

interface CountStore extends State {
  count: number;
  increment: () => void;
  set: (x: number) => void;
}

const immer =
  <
    T extends State,
    CustomSetState extends SetState<T>,
    CustomGetState extends GetState<T>,
    CustomStoreApi extends StoreApi<T>
  >(
    config: StateCreator<
      T,
      (partial: ((draft: Draft<T>) => void) | T, replace?: boolean) => void,
      CustomGetState,
      CustomStoreApi
    >
  ): StateCreator<T, CustomSetState, CustomGetState, CustomStoreApi> =>
  (set, get, api) =>
    config(
      (partial, replace) => {
        const nextState =
          typeof partial === 'function'
            ? produce(partial as (state: Draft<T>) => T)
            : (partial as T);
        return set(nextState, replace);
      },
      get,
      api
    );

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
