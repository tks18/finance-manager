// Base
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import Main App
import { App } from '@app';

// Import All the SCSS
import '@styles';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
