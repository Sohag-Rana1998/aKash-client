import axios from 'axios';
import { useEffect } from 'react';

const axiosSecure = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  withCredentials: true,
});
const useAxiosSecure = () => {
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      res => {
        return res;
      },
      error => {
        console.log('error track in the interceptor', error.response);

        if (error.response?.status === 401 || error.response?.status === 403) {
        }
      }
    );
  }, []);
  return axiosSecure;
};

export default useAxiosSecure;
