import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import './style/web/index.css'
import './style/phone/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);