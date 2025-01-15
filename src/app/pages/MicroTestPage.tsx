import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '~/store';

import '../../index.css';

interface MicroTestPageProps {
  label?: string;
}

const MicroTestPage: React.FC<MicroTestPageProps> = ({ label }) => {
  const { isAuthenticated, token } = useSelector((state: RootState) => state.auth);

  return (
    <div className="ml-16 p-2 text-[var(--hover)]">
      {label}
      <div>{`${isAuthenticated}`}</div>
      <div>{`${token}`}</div>
    </div>
  );
};

export default MicroTestPage;
