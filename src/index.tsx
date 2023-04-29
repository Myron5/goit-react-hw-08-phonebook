import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

import { App } from './components/App';
import { persistor, store } from 'redux/store';

import './index.css';

const rootEl = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(rootEl).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename={'/goit-react-hw-08-phonebook'}>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
