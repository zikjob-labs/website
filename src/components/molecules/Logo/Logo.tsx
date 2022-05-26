import { Logo as LogoSVG } from '@/assets/svg';
import routes from '@/configs/routes';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to={routes.path.home}>
      <LogoSVG className="w-[134px] lg:w-[197px] text-primary dark:text-light" />
    </Link>
  );
}

export default Logo;
