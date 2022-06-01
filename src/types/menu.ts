import { State } from 'zustand';

export interface MenuItem {
  key: string;
  text: string;
  to: string;
  isOutside: boolean;
  isActive: boolean;
}

export interface MenuState extends State {
  isMobileMenuActive: boolean;
  setIsMobileMenuActive: (newVal: boolean) => void;
}
