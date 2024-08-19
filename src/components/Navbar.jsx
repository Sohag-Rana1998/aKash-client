import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Swal from 'sweetalert2';
import useAxiosSecure from './Hooks/useAxiosSecure';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useUserData from './Hooks/useUserData';

const Navbar = () => {
  const { user, loading, logout } = useContext(AuthContext);
  const { user: user1, refetch, isLoading } = useUserData();

  const axiosSecure = useAxiosSecure();

  const handleLogout = () => {
    logout();
  };
  console.log(user);
  const Links = (
    <div className="flex flex-col   lg:flex-row gap-2">
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive
              ? 'border-2 font-bold   border-[#ff4153]'
              : isPending
              ? 'pending'
              : ''
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to={
            (user?.role === 'admin' && '/dashboard/admin-home') ||
            (user?.role === 'agent' && '/dashboard/agent-home') ||
            '/dashboard/user-home'
          }
          className={({ isActive, isPending }) =>
            isActive
              ? 'border-2 font-bold    border-[#ff4153]'
              : isPending
              ? 'pending'
              : ''
          }
        >
          DASHBOARD
        </NavLink>
      </li>
    </div>
  );

  return loading ? (
    <div>loading</div>
  ) : (
    <div
      className={
        'navbar fixed z-50 px-3 rounded-b-md text-black  pt-2 mx-auto  bg-[#F1F1F2]'
      }
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40"
          >
            {Links}
            <div className="navbar-end mt-2 ">
              <div className=" ">
                {user ? (
                  <div className="">
                    <div className="avatar" title={user?.name || ''}>
                      <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                        <img
                          src={
                            (user1 && user1?.photo) ||
                            'https://i.ibb.co/zmbRY07/images.png'
                          }
                          className="mr-4 mb-2 w-full h-full cursor-pointer bg-no-repeat bg-cover bg-[url(https://i.ibb.co/zmbRY07/images.png)]"
                        />
                      </div>
                    </div>

                    <Link to={'/user-profile'}>
                      <button className="btn w-32  bg-blue-600 hover:bg-blue-gray-900   text-white">
                        User Profile
                      </button>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="btn w-32  bg-blue-600    text-white"
                    >
                      Log Out
                    </button>
                  </div>
                ) : (
                  <div>
                    <Link to={'/login'}>
                      <button className="btn w-32  bg-blue-500 mr-3 text-white">
                        Log In
                      </button>
                    </Link>
                    <Link to={'/register'}>
                      <button className="btn w-32  bg-black mr-3 text-white">
                        Register
                      </button>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="btn bg-blue-500 hover:bg-gray-500 text-white"
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </ul>
        </div>
        <div className="flex w-full justify-between items-center ">
          <Link to={'/'}>
            <div className="self-center cursor-pointer hover:scale-[105%] duration-700 w-28 h-8 font-semibold">
              <h1 className="text-black text-2xl font-extrabold">
                a<span className="text-red-500">Kash</span>
              </h1>
            </div>
          </Link>
        </div>
      </div>

      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal px-1"> {Links}</ul>
      </div>

      <div className="navbar-end hidden md:flex lg:flex">
        <div className="flex  ">
          {user ? (
            <div className="">
              <nav className=" ">
                <ul className="flex items-center">
                  <h2 className=" text-lg  font-bold mr-2">
                    {user?.name || ''}
                  </h2>
                  <li>
                    <div className="avatar mr-4">
                      <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                        <img
                          src={
                            (user1 && user1?.photo) ||
                            'https://i.ibb.co/zmbRY07/images.png'
                          }
                          className="mr-4 w-full h-full cursor-pointer bg-no-repeat bg-cover bg-[url(https://i.ibb.co/zmbRY07/images.png)]"
                        />
                      </div>
                    </div>{' '}
                  </li>
                  <li>
                    {' '}
                    <button
                      onClick={handleLogout}
                      className="btn w-28 bg-blue-500 hover:bg-gray-500 text-white"
                    >
                      Log Out
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link to={'/login'}>
                <button className="btn bg-blue-500 hover:bg-gray-500mr-3 text-white">
                  Log In
                </button>
              </Link>
              <Link to={'/register'}>
                <button className="btn bg-blue-500 hover:bg-gray-500 mr-3 text-white">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
