import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

import "bootswatch/dist/zephyr/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './styles/index.scss';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
