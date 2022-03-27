import logoImg from '../../assets/images/logo.png';

function Header() {
  return (
    <header className="header sticky z-[1010] top-0 bg-white py-2.5 lg:py-3">
      <div className="container flex items-center">
        <h1 className="header__logo lg:mb-3">
          <a href="/">
            <img width="159" src={logoImg} alt="zikjob-logo" />
          </a>
        </h1>
        <nav className="header__nav hidden lg:flex items-center ml-auto">
          <ul className="navbar flex justify-center flex-nowrap whitespace-nowrap">
            <li className="navbar__item active">
              <a href="/">Home</a>
            </li>
            <li className="navbar__item">
              <a href="https://docs.zikjob.com/general/the-team">About us</a>
            </li>
            <li className="navbar__item">
              <a href="https://docs.zikjob.com/">Whitepaper</a>
            </li>
            <li className="navbar__item">
              <a href="#">News</a>
            </li>
          </ul>
          <div className="header__buttons flex">
            <button className="btn btn-primary btn-primary-gradient">
              ZIK Profile
            </button>
            <button className="btn btn-outline">For Employers</button>
          </div>
        </nav>
        <button className="text-blue items-center justify-center btn-menu lg:!hidden ml-auto text-[35px]">
          <strong className="fs-nav-open">☰</strong>
          <strong className="fs-nav-close">✖</strong>
        </button>
      </div>
    </header>
  );
}

export default Header;
