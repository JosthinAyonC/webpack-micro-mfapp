import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '~/store';

import RemoteRouting from './app/RemoteRouting';
import './index.css';

const App = () => (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <RemoteRouting />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
