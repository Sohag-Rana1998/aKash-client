import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/Home';

import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard/Dashboard';
import UserHome from './Pages/UserDashboard/UserHome';
import CheckBalance from './Pages/CheckBalance';
import SendMoney from './Pages/SendMoney';
import AgentHome from './Pages/AgentDashboard/AgentHome';
import CashOut from './Pages/CashOut';
import CashIn from './Pages/CashIn';
import Transactions from './Pages/UserDashboard/Transactions';
import AgentProfile from './Pages/AgentDashboard/AgentProfile';
import UserProfile from './Pages/UserDashboard/UserProfile';
import AdminHome from './Pages/AdminDashboard/AdminHome';
import ManageUsers from './Pages/AdminDashboard/ManageUsers';
import AdminProfile from './Pages/AdminDashboard/AdminProfile';
import AllTransaction from './Pages/AdminDashboard/AllTransaction';
import AgentTransaction from './Pages/AgentDashboard/AgentTransaction';
import PrivateRoute from './PrivateRoute';
import ManageAgent from './Pages/AdminDashboard/ManageAgent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/dashboard',
        element: (
          <>
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          </>
        ),
        children: [
          // User Routes

          {
            path: 'user-home',
            element: <UserHome />,
          },
          {
            path: 'user-profile',
            element: <UserProfile />,
          },
          {
            path: 'check-balance',
            element: <CheckBalance />,
          },
          {
            path: 'send-money',
            element: <SendMoney />,
          },
          {
            path: 'cash-out',
            element: <CashOut />,
          },
          {
            path: 'cash-in',
            element: <CashIn />,
          },
          {
            path: 'transaction-history',
            element: <Transactions />,
          },
          {
            path: 'agent-home',
            element: <AgentHome />,
          },
          {
            path: 'agent-profile',
            element: <AgentProfile />,
          },
          {
            path: 'agent-transaction',
            element: <AgentTransaction />,
          },
          {
            path: 'admin-home',
            element: <AdminHome />,
          },
          {
            path: 'admin-profile',
            element: <AdminProfile />,
          },
          {
            path: 'manage-users',
            element: <ManageUsers />,
          },
          {
            path: 'manage-agent',
            element: <ManageAgent />,
          },
          {
            path: 'all-transaction',
            element: <AllTransaction />,
          },
        ],
        //   {
        //     path: 'wishlist',
        //     element: <Wishlist />,
        //   },
        //   {
        //     path: 'bought-properties',
        //     element: <PropertyBought />,
        //   },
        //   {
        //     path: 'my-reviews',
        //     element: <MyReviews />,
        //   },
        //   {
        //     path: 'wishlist/:id',
        //     element: <MakeOffer />,
        //   },
        //   {
        //     path: 'bought-properties/:id',
        //     element: <Payment />,
        //   },

        //   // Agents routes

        //   {
        //     path: 'agent-profile',
        //     element: (
        //       <>
        //         <AgentProfile />
        //       </>
        //     ),
        //   },
        //   {
        //     path: 'add-property',
        //     element: (
        //       <>
        //         <AddProperty />
        //       </>
        //     ),
        //   },
        //   {
        //     path: 'added-properties',
        //     element: (
        //       <>
        //         <MyAddedProperties />
        //       </>
        //     ),
        //   },
        //   {
        //     path: 'requested-properties',
        //     element: (
        //       <>
        //         <RequestedProperties />
        //       </>
        //     ),
        //   },
        //   {
        //     path: 'sold-properties',
        //     element: (
        //       <>
        //         <MySoldProperties />
        //       </>
        //     ),
        //   },
        //   {
        //     path: 'added-properties/:id',
        //     element: (
        //       <>
        //         <UpdateProperty />
        //       </>
        //     ),
        //   },

        //   // Admin Routes
        //   {
        //     path: 'admin-profile',
        //     element: (
        //       <>
        //         <AdminProfile />
        //       </>
        //     ),
        //   },
        //   {
        //     path: 'manage-properties',
        //     element: (
        //       <>
        //         <ManageProperties />
        //       </>
        //     ),
        //   },
        //   {
        //     path: 'manage-users',
        //     element: (
        //       <>
        //         <ManageUsers />
        //       </>
        //     ),
        //   },
        //   {
        //     path: 'manage-reviews',
        //     element: (
        //       <>
        //         <ManageReviews />
        //       </>
        //     ),
        //   },
        //   {
        //     path: 'advertise-property',
        //     element: (
        //       <>
        //         <AdvertiseProperty />
        //       </>
        //     ),
        //   },
        //   {
        //     path: 'reported-properties',
        //     element: (
        //       <>
        //         <ReportedProperty />
        //       </>
        //     ),
        //   },
        // ],
      },
    ],
  },
]);

export default router;
