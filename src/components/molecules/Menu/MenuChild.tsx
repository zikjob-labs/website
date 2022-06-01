import { Link } from 'react-router-dom';
import useMenuStore from '@/stores/useMenuStore';
import { MenuItem } from '@/types/menu';
import { memo } from 'react';

interface Props {
  item: MenuItem;
}

function MenuChild(props: Props) {
  const item = props.item;
  const setIsMobileMenuActive = useMenuStore(
    (state) => state.setIsMobileMenuActive
  );

  const clickMenu = () => {
    setIsMobileMenuActive(false);
  };

  return (
    <li
      key={item.key}
      className={`navbar__item ${item.isActive ? 'active' : ''}`}
      onClick={clickMenu}
    >
      {item.isOutside ? (
        <a href={item.to}>{item.text}</a>
      ) : (
        <Link to={item.to}>{item.text}</Link>
      )}
    </li>
  );
}

const compare = (prevProps: Readonly<Props>, nextProps: Readonly<Props>) =>
  prevProps.item.isActive == nextProps.item.isActive;

export default memo(MenuChild, compare);
