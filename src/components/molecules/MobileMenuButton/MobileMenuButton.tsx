import { IconCancel, IconMenu } from '@/assets/svg';
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
      className={`items-center justify-center btn-menu lg:!hidden ml-auto text-3xl ${
        isMobileMenuActive ? 'active' : ''
      }`}
      onClick={clickMobileMenu}
    >
      <strong className="fs-nav-open">
        <IconMenu />
      </strong>
      <strong className="fs-nav-close">
        <IconCancel />
      </strong>
    </button>
  );
}

export default MobileMenuButton;
