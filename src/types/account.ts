import { State } from 'zustand';

export interface AccountStore extends State {
  isLogged: boolean;
  connect: () => void;
  disconnect: () => void;
}
