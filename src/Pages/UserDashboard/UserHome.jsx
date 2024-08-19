import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const UserHome = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 w-[80%] mx-auto">
      <Link to={'/dashboard/check-balance'}>
        {' '}
        <div className="bg-slate-200 h-[150px] w-full md:w-[180px] border-2 border-blue-400 rounded-md flex justify-center items-center shadow-md 0">
          <h2 className="text-2xl font-bold">Check Balance</h2>
        </div>
      </Link>
      <Link to={'/dashboard/send-money'}>
        <div className="bg-slate-200 h-[150px]  w-full md:w-[180px] border-2 border-blue-400 rounded-md flex justify-center items-center shadow-md 0">
          <h2 className="text-2xl font-bold">Send Money</h2>
        </div>
      </Link>
      <Link to={'/dashboard/cash-out'}>
        {' '}
        <div className="bg-slate-200 h-[150px]  w-full md:w-[180px] border-2 border-blue-400 rounded-md flex justify-center items-center shadow-md 0">
          <h2 className="text-2xl font-bold">Cash Out</h2>
        </div>
      </Link>
      <Link to={'/dashboard/cash-in'}>
        {' '}
        <div className="bg-slate-200 h-[150px]  w-full md:w-[180px] border-2 border-blue-400 rounded-md flex justify-center items-center shadow-md 0">
          <h2 className="text-2xl font-bold">Cash In</h2>
        </div>
      </Link>
    </div>
  );
};

export default UserHome;
