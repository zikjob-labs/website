import { Link } from 'react-router-dom';
import routes from '@/configs/routes';
import {
  Logo,
  Menu,
  MobileMenuButton,
  ThemeButton,
} from '@/components/molecules';
import useMenuStore from '@/stores/useMenuStore';

function Header() {
  const [isMobileMenuActive, setIsMobileMenuActive] = useMenuStore((state) => [
    state.isMobileMenuActive,
    state.setIsMobileMenuActive,
  ]);

  return (
    <header className="header bg-light dark:bg-dark sticky z-[1010] top-0 px-4 py-3 lg:px-8 lg:py-4">
      <div className="flex items-center">
        <h1>
          <Logo />
        </h1>
        <nav
          className={`header__nav ${
            isMobileMenuActive ? 'flex flex-col justify-between' : 'hidden'
          } lg:flex lg:flex-auto lg:justify-end items-center`}
        >
          <Menu />
          <div className="header__buttons flex">
            <Link
              className="btn btn-primary"
              to={routes.path.profile}
              onClick={() => setIsMobileMenuActive(false)}
            >
              ZIK Profile
            </Link>
            <Link
              className="btn btn-outline lg:ml-4"
              to={routes.path.home}
              onClick={() => setIsMobileMenuActive(false)}
            >
              For Employers
            </Link>
            <ThemeButton />
          </div>
        </nav>
        <MobileMenuButton />
      </div>
    </header>
  );
}

export default Header;
