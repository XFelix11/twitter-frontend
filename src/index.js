import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '@containers/Login';
import App from '@containers/App';
import Register from '@containers/Register';
import Tweets from '@containers/Tweets';
import { CxtProvider } from '@utils/context';

import './index.css';

// import { startVconsole } from './utils';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CxtProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/tweets" element={<Tweets />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CxtProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// startVconsole();
