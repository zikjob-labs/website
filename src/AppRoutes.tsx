import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './configs/routes';
import { WalletLoginPage, WalletRegisterPage } from './pages/Auth';
import { NotFoundPage } from './pages/Common';
import { HomePage } from './pages/HomePage';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.path.home} element={<HomePage />} />
        <Route path={routes.path.walletLogin} element={<WalletLoginPage />} />
        <Route
          path={routes.path.walletRegister}
          element={<WalletRegisterPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
