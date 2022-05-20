import { Logo as LogoSVG } from '@/assets/svg';
import routes from '@/configs/routes';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to={routes.path.home}>
      <LogoSVG className="w-[134px] lg:w-[197px]" />
    </Link>
  );
}

export default Logo;
