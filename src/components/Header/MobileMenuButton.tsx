import useMenuStore from '@/stores/useMenuStore';

function MobileMenuButton() {
  const [isMobileMenuActive, setIsMobileMenuActive] = useMenuStore((state) => [
    state.isMobileMenuActive,
    state.setIsMobileMenuActive,
  ]);
  const clickMobileMenu = () => {
    document.body.classList.toggle('menu-opened');
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  return (
    <button
      className={`text-blue items-center justify-center btn-menu lg:!hidden ml-auto text-3xl ${
        isMobileMenuActive ? 'active' : ''
      }`}
      onClick={clickMobileMenu}
    >
      <strong className="fs-nav-open">☰</strong>
      <strong className="fs-nav-close">✖</strong>
    </button>
  );
}

export default MobileMenuButton;
