import { State } from 'zustand';
import { ThemeTypes } from '../constants';

export interface ThemeState extends State {
  theme: ThemeTypes;
  toggleTheme: () => void;
}
