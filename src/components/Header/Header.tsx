import { Link } from 'react-router-dom';
import routes from '@/configs/routes';
import { logoImg } from '@/assets/images';
import Menu from '../Menu';
import MobileMenuButton from './MobileMenuButton';

function Header() {
  return (
    <header className="header sticky z-[1010] top-0 bg-white py-2.5 lg:py-3">
      <div className="flex items-center px-4">
        <h1 className="header__logo lg:mb-3">
          <Link to={routes.path.home}>
            <img width="159" src={logoImg} alt="zikjob-logo" />
          </Link>
        </h1>
        <nav className="header__nav hidden lg:flex lg:flex-auto lg:justify-end items-center">
          <Menu />
          <div className="header__buttons flex">
            <Link
              className="btn btn-primary btn-primary-gradient"
              to={routes.path.profile}
            >
              ZIK Profile
            </Link>
            <button className="btn btn-outline">For Employers</button>
          </div>
        </nav>
        <MobileMenuButton />
      </div>
    </header>
  );
}

export default Header;
