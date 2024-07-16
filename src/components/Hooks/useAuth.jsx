import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
  console.log(auth);
};

export default useAuth;
