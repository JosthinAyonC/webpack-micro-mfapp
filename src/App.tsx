import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import RemoteRouting from './app/RemoteRouting';
import './index.css';

const App = () => (
  <React.StrictMode>
    <BrowserRouter>
      <RemoteRouting />
    </BrowserRouter>
  </React.StrictMode>
);
const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
