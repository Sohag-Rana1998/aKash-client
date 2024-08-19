const CashIn = () => {
  const handleCashIn = e => {
    e.preventDefault();
    const form = e.target;
    const mobile = form.phone.value;
    const amount = form.amount.value;
    const pin = form.pin.value;
    console.log(mobile, amount, pin);
  };
  return (
    <div>
      <h1 className="text-center text-4xl font-bold underline">Cash In</h1>
      <h1 className="text-xl">
        Please provide the following information to cash in:
      </h1>
      <form onSubmit={handleCashIn} className="mt-5 w-full md:w-[50%] mx-auto">
        <div className="">
          <div>
            <label className="font-bold " htmlFor="phone">
              Agent Phone Number
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
          <div>
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
              Your Pin Number
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
          Send Money
        </button>{' '}
      </form>
    </div>
  );
};

export default CashIn;
