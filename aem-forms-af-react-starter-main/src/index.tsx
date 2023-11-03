import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as Spectrum3Provider, defaultTheme } from '@adobe/react-spectrum'
import App from './App';
import './css/creditcardApplication.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Spectrum3Provider theme={defaultTheme}>
    <App />
   
  </Spectrum3Provider>
);