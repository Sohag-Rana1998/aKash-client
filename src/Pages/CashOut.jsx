import { useEffect } from 'react';
import useUserData from '../components/Hooks/useUserData';
import toast from 'react-hot-toast';
import useAxiosSecure from '../components/Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
const CashOut = () => {
  const { user, isLoading, refetch } = useUserData();
  const axiosSecure = useAxiosSecure();
  console.log(user);
  const handleCashOut = async e => {
    e.preventDefault();
    const form = e.target;
    const receiverMobile = form.phone.value;
    const amount = form.amount.value;
    const pin = form.pin.value;

    if (amount < 50) return toast.error('You have send minimum 50tk');

    const senderId = user?._id;
    const senderMobile = user?.mobile;
    const sendData = { amount, pin, senderId, senderMobile, receiverMobile };
    console.log(sendData);

    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to cash out your money',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Send',
    }).then(async result => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.put('/cash-out', sendData);

          console.log(res);
          if (res?.status == 200) {
            toast.success(res?.data?.msg);
          }
          if (res?.status == 404) {
            toast.error(res?.data?.msg);
          }
        } catch (err) {
          console.log(err);
          toast.error(err.data.msg);
        }
      }
    });
  };
  return (
    <div className="pl-0 md:pl-5">
      <h1 className="text-center text-4xl font-bold underline">Cash Out</h1>
      <h1 className="text-xl">
        Please provide the following information to cash out your Money:
      </h1>
      <form onSubmit={handleCashOut} className="mt-5 w-full md:w-[50%] mx-auto">
        <div className="flex items-center gap-3">
          <div>
            <label className="font-bold " htmlFor="phone">
              Agent's Phone Number
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              className="input w-full border mt-1 mb-3 bg-slate-200"
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="w-32">
            <label className="font-bold" htmlFor="amount">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              className="input w-full  mt-1 mb-3 border bg-slate-200"
              placeholder="Amount"
              required
            />
          </div>
        </div>
        <div className="w-full mx-auto">
          <div>
            <label className="font-bold  mb-2" htmlFor="pin">
              Enter Pin
            </label>
            <input
              type="password"
              id="pin"
              name="pin"
              className="input w-full mt-1 mb-3 border-2  bg-slate-200"
              placeholder="Enter Your Pin Number"
              required
            />
          </div>
        </div>
        <button className="btn w-full bg-blue-500 text-white hover:bg-gray-800">
          Cash Out
        </button>
      </form>
    </div>
  );
};

export default CashOut;
