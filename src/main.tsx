import { Buffer } from 'buffer';
import React from 'react';
import ReactDOM from 'react-dom';
import { Toaster } from 'react-hot-toast';

import './assets/sass/style.scss';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import App from './App';
import reportWebVitals from './reportWebVitals';

window.Buffer = window.Buffer || Buffer;

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Toaster />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
