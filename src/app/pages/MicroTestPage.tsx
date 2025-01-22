import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '~/store';

import { login } from '../../state/slices/authSlice';

interface MicroTestPageProps {
  label?: string;
}

const MicroTestPage: React.FC<MicroTestPageProps> = ({ label }) => {
  const { isAuthenticated, token } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const handleLogin = () => {
    console.log('handleLogin');
    dispatch(
      login({
        isAuthenticated: true,
        token: 'hardcoded-token-1234',
        username: 'hardcoded-user',
        roles: ['ADMIN'],
      })
    );
  };

  return (
    <div className="ml-16 p-2 text-[var(--hover)]">
      {label}
      <div>{`${isAuthenticated}`}</div>
      <div>{`${token}`}</div>
      <button onClick={() => handleLogin()}>Click Here to change status</button>
    </div>
  );
};

export default MicroTestPage;
