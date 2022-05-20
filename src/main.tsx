import React from 'react';
import ReactDOM from 'react-dom';

import './assets/sass/style.scss';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
