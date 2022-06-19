import { ThemeTypes } from '@/constants';

export const isDark = (theme: ThemeTypes) => theme == ThemeTypes.dark;
export const setTheme = (theme: ThemeTypes) => {
  const root = window.document.documentElement;
  root.classList.remove(isDark(theme) ? ThemeTypes.light : ThemeTypes.dark);
  root.classList.add(theme);
};

export const parseDataInput = (data?: string | string[]) =>
  Array.isArray(data) ? data : data != '' ? data?.split(',') : undefined;

export const getDefaultData = (yearStart?: number, yearEnd?: number) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const currentYear = new Date().getFullYear();
  const startYears = [...Array(151).keys()]
    .map((i) => i + (currentYear - 100))
    .reverse()
    .filter((y) => y <= (yearStart ?? currentYear));
  const endYears = [...Array(151).keys()]
    .map((i) => i + (currentYear - 100))
    .reverse()
    .filter((y) => y <= (yearEnd ?? currentYear));

  return { months, startYears, endYears };
};

export const parseWalletAddress = (address?: string) => {
  if (!address) return 'Unknown Wallet';

  return `${address.substring(0, 3)}...${address.substring(
    address.length - 4,
    address.length
  )}`;
};
