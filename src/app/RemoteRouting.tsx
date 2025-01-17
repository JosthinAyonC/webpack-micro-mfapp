import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { DialogProvider } from '~/provider/DialogContext';
import { ThemeProvider } from '~/provider/ThemeProvider';
import { store } from '~/store';
import NotFoundScreen from '~/utils/NotFoundScreen';
import UnauthorizedScreen from '~/utils/UnauthorizedScreen';

import '../index.css';
import Main from './Main';
import MicroTestPage from './pages/MicroTestPage';

const RemoteRouting: React.FC = () => {
  /**
   * Si necesitamos agregar un provider|contexto personalizado debe ser en esta parte.
   *
   * Esto se debe a que los contextos son creados de forma única en cada microfrontend.
   * Y no puede acceder a los contextos del host.
   *
   * Una solución a esto podría ser crear un provider que envuelva todos los providers
   * Y lo exponga desde el host, pero esto generaria una dependencia enorme en el host.
   *
   * Por eso es preferible poner todos los providers personalizados aquí.
   */
  return (
    <Provider store={store}>
      <DialogProvider>
        <ThemeProvider>
          <Routes>
            <Route path="/home" element={<Main />} />
            <Route path="/test" element={<MicroTestPage />} />

            {/* Ruta para not found page */}
            <Route path="*" element={<NotFoundScreen />} />

            {/* Ruta de unauthorized */}
            <Route path="/unauthorized" element={<UnauthorizedScreen />} />
          </Routes>
        </ThemeProvider>
      </DialogProvider>
    </Provider>
  );
};

export default RemoteRouting;
