// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import useAxiosPublic from '../components/Hooks/useAxiosPublic';
import useAxiosSecure from '../components/Hooks/useAxiosSecure';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is already logged in on initial render
    const checkLoggedIn = async () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        setLoading(false);
      } else {
        try {
          const res = await axiosSecure.get('/user');
          setUser(res.data);
          localStorage.setItem('user', JSON.stringify(res.data));
        } catch (error) {
          console.log(error);
          setUser(null);
        }
        setLoading(false);
      }
    };

    checkLoggedIn();
  }, []);

  const logout = async () => {
    try {
      await axiosPublic.post('/logout', {}, { withCredentials: true });
      localStorage.removeItem('user');
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  console.log(user);
  const authInfo = {
    user,
    loading,

    logout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
