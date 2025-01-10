import React from 'react';
import ThemeToggle from '~/components/ui/ThemeTogle';

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

export default Main;
