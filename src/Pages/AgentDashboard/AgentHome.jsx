import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const AgentHome = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 w-full md:w-[80%] mx-auto gap-5">
      <Link to={'/dashboard/check-balance'}>
        {' '}
        <div className="bg-slate-200 h-[150px] w-full md:w-[180px] border-2 border-blue-400 rounded-md flex justify-center items-center shadow-md 0">
          <h2 className="text-xl font-bold">Check Balance</h2>
        </div>
      </Link>

      <div className="bg-slate-200 h-[150px]  w-full md:w-[180px] border-2 border-blue-400 rounded-md flex justify-center items-center shadow-md 0">
        <h2 className="text-xl font-bold text-center">
          Check Cash Out Request
        </h2>
      </div>
      <div className="bg-slate-200 h-[150px]  w-full md:w-[180px] border-2 border-blue-400 rounded-md flex justify-center items-center shadow-md 0">
        <h2 className="text-xl font-bold text-center">Check Cash In Request</h2>
      </div>
    </div>
  );
};

export default AgentHome;
