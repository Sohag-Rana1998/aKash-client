import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useUsers = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: allUsers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['all-users'],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users?role=user`);
      // console.log(data);
      return data;
    },
  });
  return { allUsers, isLoading, refetch };
};

export default useUsers;
