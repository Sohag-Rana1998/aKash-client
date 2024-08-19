import useAgents from '../../components/Hooks/useAgents';
import useAxiosSecure from '../../components/Hooks/useAxiosSecure';

const ManageAgent = () => {
  const { allAgents, isLoading, refetch } = useAgents();
  const axiosSecure = useAxiosSecure();

  const handleVerify = async id => {
    console.log(id);
    const data = { status: 'Verified', balance: 1000 };
    try {
      const res = await axiosSecure.put(`/verify/${id}`, data);
      console.log(res);
      refetch();
    } catch (err) {
      console.log(err);
    }
  };

  const handleBlock = async (id, balance) => {
    console.log(id);
    const data = { status: 'Blocked', balance: balance };
    try {
      const res = await axiosSecure.put(`/verify/${id}`, data);
      console.log(res);
      refetch();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold underline text-center">
          Manage Agents
        </h1>

        <div className="mt-5">
          <div className="overflow-x-auto">
            <table className="table ">
              {/* head */}

              <thead>
                <tr className="bg-blue-500 text-white rounded-t-3xl">
                  <th className="p-5 ">No</th>

                  <th>User Name</th>
                  <th> User Email</th>
                  <th> User Phone</th>
                  <th> Role</th>
                  <th>Status</th>
                  <th>Verify </th>
                  <th>Block </th>
                </tr>
              </thead>

              <tbody>
                {/* row 1 */}
                {allAgents?.map((user, index) => (
                  <tr key={user?._id}>
                    <th>{index + 1}</th>

                    <td>{user?.name}</td>
                    <td>{user?.email} </td>
                    <td>{user?.mobile}</td>
                    <td>{user?.role}</td>
                    <td>{user?.status}</td>

                    {user?.status == 'pending' ? (
                      <th>
                        <button
                          onClick={() => handleVerify(user?._id)}
                          className="btn bg-blue-500 "
                        >
                          Verify
                        </button>
                      </th>
                    ) : (
                      <th></th>
                    )}
                    <th>
                      <button
                        onClick={() => handleBlock(user?._id, user?.balance)}
                        className="btn bg-red-500 "
                      >
                        Block
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAgent;
