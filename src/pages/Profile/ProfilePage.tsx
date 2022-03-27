import routes from '@/configs/routes';
import { Link } from 'react-router-dom';

function ProfilePage() {
  return (
    <div>
      <p>Profile Page!</p>
      <p>
        <Link to={routes.path.home}>Back to HomePage</Link>
      </p>
    </div>
  );
}

export default ProfilePage;
