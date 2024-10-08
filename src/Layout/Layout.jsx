import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Layout = () => {
  return (
    <div className=" max-w-screen w-full mx-auto">
      <Navbar />
      <div className="pt-[75px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
