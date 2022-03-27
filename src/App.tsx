import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
