import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/Home';

import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard/Dashboard';

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
            <Dashboard />
          </>
        ),
        // children: [
        //   // User Routes

        //   {
        //     path: 'user-profile',
        //     element: <UserProfle />,
        //   },
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
