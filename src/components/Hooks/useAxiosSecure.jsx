import axios from 'axios';
import { useEffect } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const axiosSecure = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { user } = useAuth();
  console.log(user);
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      res => {
        return res;
      },
      error => {
        console.log('error track in the interceptor', error.response);
        toast.error(error?.response?.data?.msg);
        if (error.response?.status === 401 || error.response?.status === 403) {
          logout();
          navigate('/login');
        }
      }
    );
  }, []);
  return axiosSecure;
};

export default useAxiosSecure;
