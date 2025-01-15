import React from 'react';
import ThemeToggle from '~/components/ui/ThemeTogle';
import { useDialog } from '~/provider/DialogContext';
import { ModalProvider } from '~/provider/ModalProvider';

import { MicroTestDialog } from './dialogs/MicroTestDialog';
import MicroTestPage from './pages/MicroTestPage';

const Main: React.FC = () => {
  const { openDialog } = useDialog();

  return (
    <ModalProvider keyId="dialogTesting" content={MicroTestDialog}>
      <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <div>Name: hosts</div>
        <div>Framework: react</div>
        <MicroTestPage />
        <ThemeToggle />
        <button onClick={() => openDialog('dialogTesting', '2222')}>Click here to open Modal</button>
      </div>
    </ModalProvider>
  );
};

export default Main;
