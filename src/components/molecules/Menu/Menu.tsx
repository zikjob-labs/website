import { useMatch } from 'react-router-dom';
import routes from '@/configs/routes';
import { MenuItem } from '@/types/menu';
import MenuChild from './MenuChild';

function Menu() {
  const menuItems = (
    [
      {
        key: 'home',
        text: 'Home',
        to: routes.path.home,
        isOutside: false,
        isActive: false,
      },
      {
        key: 'jobs',
        text: 'Job',
        to: '#',
        isOutside: true,
        isActive: false,
      },
      {
        key: 'marketplace',
        text: 'Marketplace',
        to: '#',
        isOutside: true,
        isActive: false,
      },
      {
        key: 'whitepaper',
        text: 'Whitepaper',
        to: 'https://docs.zikjob.com',
        isOutside: true,
        isActive: false,
      },
    ] as MenuItem[]
  ).map((i) => {
    if (useMatch(i.to)) {
      i.isActive = true;
    } else {
      i.isActive = false;
    }

    return i;
  });

  return (
    <ul className="navbar flex justify-center flex-nowrap whitespace-nowrap lg:ml-8 lg:mr-auto lg:mt-3">
      {menuItems.map((item) => (
        <MenuChild key={item.key} item={item} />
      ))}
    </ul>
  );
}

export default Menu;
