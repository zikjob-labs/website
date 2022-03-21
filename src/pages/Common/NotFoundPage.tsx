import routes from '@/configs/routes';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      <p>Not found!</p>
      <p>
        <Link to={routes.path.home}>Back to HomePage</Link>
      </p>
    </div>
  );
}

export default NotFoundPage;
