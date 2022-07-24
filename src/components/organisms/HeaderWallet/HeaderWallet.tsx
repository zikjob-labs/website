import { LogoNoText } from '@/assets/svg';
import {
  WalletButton,
  Logo,
  Menu,
  MoreButton,
  NetworkSelector,
} from '@/components/molecules';
import routes from '@/configs/routes';
import { Link } from 'react-router-dom';

function HeaderWallet() {
  return (
    <header className="header bg-light dark:bg-dark sticky z-[1010] top-0 px-4 py-3 lg:px-8 lg:py-4">
      <div className="flex items-center">
        <h1 className="hidden lg:inline-flex items-start">
          <Logo />
          <span className="bg-red-500 text-xs text-white px-2 py-1 rounded-2xl">
            Testnet
          </span>
        </h1>
        <h1 className="block lg:hidden">
          <Link to={routes.path.home}>
            <LogoNoText className="text-primary dark:text-light" />
          </Link>
        </h1>
        <nav className="header__nav hidden lg:flex lg:flex-auto lg:justify-end items-center">
          <Menu />
        </nav>
        <div className="header__buttons flex gap-2 lg:gap-0 !justify-end !pb-0">
          <WalletButton />
          <NetworkSelector />
          <MoreButton />
        </div>
      </div>
    </header>
  );
}

export default HeaderWallet;
