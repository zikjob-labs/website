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
        key: 'about-us',
        text: 'About us',
        to: 'https://docs.zikjob.com/general/the-team',
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
      {
        key: 'news',
        text: 'News',
        to: routes.path.profile,
        isOutside: false,
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
    <ul className="navbar flex justify-center flex-nowrap whitespace-nowrap lg:ml-8 lg:mr-auto">
      {menuItems.map((item) => (
        <MenuChild key={item.key} item={item} />
      ))}
    </ul>
  );
}

export default Menu;
