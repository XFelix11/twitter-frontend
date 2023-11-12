import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from '@containers/Login';
// import Register from './containers/Register';
// import { startVconsole } from './utils';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById('root'),
);

// startVconsole();
