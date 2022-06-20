import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';

import routes from './configs/routes';
import { NotFoundPage } from './pages/Common';

const HomePage = lazy(() => import('./pages/HomePage'));
const ProfilePage = lazy(() => import('./pages/Profile'));

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
