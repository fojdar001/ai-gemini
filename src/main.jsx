import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ContextProvider from './context/context.jsx';
import { HashRouter } from 'react-router-dom'; 

createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <ContextProvider>
      <HashRouter> 
        <App />
      </HashRouter>
    </ContextProvider>
  </React.StrictMode>,
);
