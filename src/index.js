import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';

ReactDOM.render(
  <BrowserRouter>
   
  <React.StrictMode>
    <App />
  </React.StrictMode>
   
  </BrowserRouter>
  ,
  document.getElementById('root')
);