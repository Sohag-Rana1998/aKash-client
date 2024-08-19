import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useUserData = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: user,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/user`);
      // console.log(data);
      return data;
    },
  });
  return { user, isLoading, refetch };
};

export default useUserData;
