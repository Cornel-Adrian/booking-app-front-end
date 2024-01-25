import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from 'react-auth-kit';
import { AppContextProvider } from './context/AppContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <AuthProvider authType={'localstorage'}
        authName={'_auth'}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </AppContextProvider>
  </React.StrictMode>
);

