import { Routes, Route } from 'react-router-dom';
import routes from './configs/routes';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/Profile';
import { NotFoundPage } from './pages/Common';

function AppRoutes() {
  return (
    <Routes>
      <Route path={routes.path.home} element={<HomePage />} />
      <Route path={routes.path.profile} element={<ProfilePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
