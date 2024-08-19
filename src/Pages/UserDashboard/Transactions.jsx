const Transactions = () => {
  const users = [];
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold underline text-center">
          Transaction History
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
                  <th> Role</th>
                  <th> Make Admin</th>
                  <th> Make Agent</th>
                  <th> Mark as Fraud</th>
                  <th> Delete</th>
                </tr>
              </thead>

              <tbody>
                {/* row 1 */}
                {users?.map((user, index) => (
                  <tr key={user?._id}>
                    <th>{index + 1}</th>

                    <td>{'User'}</td>
                    <td>{'User'} </td>
                    <td>{'User'}</td>
                    <th>
                      <button
                        onClick={() => handleDelete(user?._id || '')}
                        className="btn bg-red-500 "
                      >
                        <RiDeleteBin5Line className="text-white text-xl" />
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

export default Transactions;
