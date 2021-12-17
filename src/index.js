import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

import { AuthProvider } from './context/authContext'

import "bootswatch/dist/zephyr/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './styles/index.scss';


ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);
