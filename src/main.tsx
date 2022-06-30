import './assets/sass/style.scss';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import React from 'react';

import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';

import App from './App';
import reportWebVitals from './reportWebVitals';
import nprogressFetch from './nprogressFetch';

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
    <Toaster />
  </React.StrictMode>
);

reportWebVitals();
nprogressFetch();
