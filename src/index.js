import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserContextProvider } from './hook/useContext/UseContextExample';
import { MainContextProvider } from './hook/useContext/MainUseContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <MainContextProvider>
  // <UserContextProvider>
     <App />
  // </UserContextProvider>
  // </MainContextProvider>
);
