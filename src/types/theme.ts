import { State } from 'zustand';
import { ThemeTypes } from '../constants';

export interface ThemeStore extends State {
  theme: ThemeTypes;
  toggleTheme: () => void;
}
