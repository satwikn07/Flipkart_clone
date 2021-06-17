import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { PricecontextProvider } from './context/Pricecontext';


ReactDOM.render(
<<<<<<< HEAD
  
=======
  <PricecontextProvider>
>>>>>>> 5490263c91c282a420bc1d758d1cdd3e2f3813b2
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </PricecontextProvider>
  ,
  document.getElementById('root')
);