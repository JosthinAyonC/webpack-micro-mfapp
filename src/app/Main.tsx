import React from 'react';
import { useTheme } from '~/provider/ThemeContext';

import MicroTestPage from '../pages/MicroTestPage';

const Main: React.FC = () => {
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: hosts</div>
      <div>Framework: react</div>
      <div>Language: TypeScripst</div>
      <div>CSS: Tailwind</div>
      <MicroTestPage />
      <ThemeToggle />
    </div>
  );
};

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="p-2 rounded bg-primary-light dark:bg-primary-dark text-font-light dark:text-font-dark" onClick={toggleTheme}>
      Cambiar a {theme === 'light' ? 'modo oscuro' : 'modo claro'}
    </button>
  );
};

export default Main;
