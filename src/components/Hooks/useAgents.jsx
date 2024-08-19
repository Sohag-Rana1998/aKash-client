import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useAgents = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: allAgents = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['all-agents'],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/agents?role=agent`);
      // console.log(data);
      return data;
    },
  });
  return { allAgents, isLoading, refetch };
};

export default useAgents;
