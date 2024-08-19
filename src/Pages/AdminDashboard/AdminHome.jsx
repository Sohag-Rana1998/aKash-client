import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const AdminHome = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 w-full md:w-[80%] mx-auto gap-5">
      <Link to={'/dashboard/manage-users'}>
        <div className="bg-slate-200 h-[150px]  w-full md:w-[180px] border-2 border-blue-400 rounded-md flex justify-center items-center shadow-md 0">
          <h2 className="text-xl font-bold text-center">Manage Users</h2>
        </div>
      </Link>
      <Link to={'/dashboard/manage-agent'}>
        {' '}
        <div className="bg-slate-200 h-[150px]  w-full md:w-[180px] border-2 border-blue-400 rounded-md flex justify-center items-center shadow-md 0">
          <h2 className="text-xl font-bold text-center">Manage Agents</h2>
        </div>
      </Link>
    </div>
  );
};

export default AdminHome;
