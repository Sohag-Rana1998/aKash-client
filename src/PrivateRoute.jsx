import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const data = localStorage.getItem('user');
  const user = JSON.parse(data);
  const [loading1, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(setLoading, 500, false);
  }, []);

  if (loading1) {
    return (
      <div className="w-[80%] mx-auto flex justify-center items-center min-h-screen ">
        Loading
      </div>
    );
  } else if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
