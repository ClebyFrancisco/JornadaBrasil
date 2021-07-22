import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import {
  Container
} from "@material-ui/core";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
