export const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:22791';
export const ZikJobAuthAddress =
  import.meta.env.VITE_ZIKJOB_AUTH_ADDRESS ??
  '0x0000000000000000000000000000000000000000';
export const ZeroAddress = '0x0000000000000000000000000000000000000000';

export enum ThemeTypes {
  dark = 'dark',
  light = 'light',
}

export enum Gender {
  male = 'male',
  female = 'female',
  other = 'other',
}
