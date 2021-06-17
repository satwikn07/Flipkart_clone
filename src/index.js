import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { PricecontextProvider } from './context/Pricecontext';


ReactDOM.render(
  <PricecontextProvider>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </PricecontextProvider>
  ,
  document.getElementById('root')
);