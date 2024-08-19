import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const CheckBalance = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="pl-0 md:pl-5">
      <h3 className="text-xl"> Hello,</h3>
      <h2>
        <span className="text-2xl font-bold">{user?.name}</span>
      </h2>
      <div className="flex justify-center items-center">
        <h4 className="text-xl font-bold">
          Your Current Balance is:{' '}
          <span className="text-3xl font-bold">{user?.balance} </span>BDT.
        </h4>
      </div>
    </div>
  );
};

export default CheckBalance;
