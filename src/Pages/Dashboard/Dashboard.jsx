import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useUserData from '../../components/Hooks/useUserData';

const Dashboard = () => {
  const { user, isLoading, refetch } = useUserData();

  return (
    <div className="flex w-full   mx-auto ">
      <div className="w-56 hidden  lg:block pt-5 bg-[#1b71c7]  text-white ">
        <div className=" px-4">
          <Link to={'/'}>
            <div className="flex justify-center flex-col items-center">
              <h3 className="   text-center text-3xl font-extrabold tracking-[5.4px] ">
                a<span className="text-red-500">Kash</span>
              </h3>
            </div>
          </Link>
        </div>
        <ul className="menu px-3 mt-10">
          {user?.role === 'admin' && (
            <>
              <li className="mb-1">
                <NavLink
                  to={'/dashboard/admin-profile'}
                  className={({ isActive, isPending }) =>
                    isActive
                      ? 'border-2 w-full bg-black/30  text-white font-bold '
                      : isPending
                      ? 'pending'
                      : ''
                  }
                >
                  Admin Profile
                </NavLink>
              </li>

              <li className="mb-1">
                <NavLink
                  to={'/dashboard/all-transaction'}
                  className={({ isActive, isPending }) =>
                    isActive
                      ? 'border-2 w-full bg-black/30 font-bold text-white '
                      : isPending
                      ? 'pending'
                      : ''
                  }
                >
                  All Transactions
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  to={'/dashboard/manage-users'}
                  className={({ isActive, isPending }) =>
                    isActive
                      ? 'border-2 w-full bg-black/30 font-bold text-white '
                      : isPending
                      ? 'pending'
                      : ''
                  }
                >
                  Manage Users
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  to={'/dashboard/manage-agent'}
                  className={({ isActive, isPending }) =>
                    isActive
                      ? 'border-2 w-full bg-black/30 font-bold text-white '
                      : isPending
                      ? 'pending'
                      : ''
                  }
                >
                  Manage Agents
                </NavLink>
              </li>
            </>
          )}
          {user?.role === 'agent' && (
            <>
              <li className="mb-1">
                <NavLink
                  to={'/dashboard/agent-profile'}
                  className={({ isActive, isPending }) =>
                    isActive
                      ? 'border-2 w-full bg-black/30 font-bold text-white'
                      : isPending
                      ? 'pending'
                      : ''
                  }
                >
                  Agent Profile
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  to={'/dashboard/agent-transaction'}
                  className={({ isActive, isPending }) =>
                    isActive
                      ? 'border-2 w-full bg-black/30 font-bold text-white'
                      : isPending
                      ? 'pending'
                      : ''
                  }
                >
                  Transaction History
                </NavLink>
              </li>
            </>
          )}

          {user?.role == 'user' && (
            <>
              <li className="mb-1">
                <NavLink
                  to={'/dashboard/user-profile'}
                  className={({ isActive, isPending }) =>
                    isActive
                      ? 'border-2 w-full bg-black/30 font-bold text-white'
                      : isPending
                      ? 'pending'
                      : ''
                  }
                >
                  My Profile
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  to={'/dashboard/transaction-history'}
                  className={({ isActive, isPending }) =>
                    isActive
                      ? 'border-2 w-full bg-black/30 font-bold text-white'
                      : isPending
                      ? 'pending'
                      : ''
                  }
                >
                  Transaction History
                </NavLink>
              </li>
            </>
          )}
          <div className="divider my-5"></div>

          <li className="mb-1">
            <NavLink
              to={'/'}
              className={({ isActive, isPending }) =>
                isActive
                  ? 'border-2 w-full bg-black/30 font-bold text-white'
                  : isPending
                  ? 'pending'
                  : ''
              }
            >
              HOME
            </NavLink>
          </li>
        </ul>
      </div>
      <div
        style={{ scrollbarWidth: 'none' }}
        className="flex-1  h-auto lg:h-[calc(100vh-80px)]  overflow-y-scroll  "
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
