import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ModalProvider, ToastProvider } from '~/provider';
import { DialogProvider } from '~/provider/DialogContext';
import { ThemeProvider } from '~/provider/ThemeProvider';
import { RootState } from '~/store';
import NotFoundScreen from '~/utils/NotFoundScreen';
import UnauthorizedScreen from '~/utils/UnauthorizedScreen';

import '../index.css';
import Main from './Main';
import LoginPage from './auth/LoginPage';
import { LogoutDialog } from './dialogs/LogoutDialog';
import MicroTestPage from './pages/MicroTestPage';

const RemoteRouting: React.FC = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  /**
   * Si necesitamos agregar un provider|contexto personalizado para el actual micro front end debe ser en esta parte.
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
    <ToastProvider>
      <DialogProvider>
        <ThemeProvider>
          <ModalProvider keyId="logout" content={LogoutDialog}>
            <Routes>
              {/* Rutas del micro front end */}
              <Route path="/home" element={<Main />} />
              <Route path="/test" element={<MicroTestPage />} />

              {/* Ruta para not found page */}
              <Route path="*" element={<NotFoundScreen />} />

              {/* Ruta de auth */}
              <Route path="auth/login" element={isAuthenticated ? <Navigate to={'/'} /> : <LoginPage />} />

              {/* Ruta de unauthorized */}
              <Route path="/unauthorized" element={<UnauthorizedScreen />} />
            </Routes>
          </ModalProvider>
        </ThemeProvider>
      </DialogProvider>
    </ToastProvider>
  );
};

export default RemoteRouting;
