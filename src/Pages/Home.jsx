import React from 'react';

const Home = () => {
  return (
    <div>
      <div className=" w-full h-[calc(100vh-80px)] bg-[url(https://i.postimg.cc/BnB0WBtF/fintech-main-h2.webp)] text-white  flex items-center justify-center  px-5 text-center py-5 bg-no-repeat bg-center bg-cover">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold">
            Seamless and Secure <br /> Financial Transactions at Your Fingertips
          </h1>
          <p className="mt-4">
            Simplify your financial transactions with our MFS application.
            Experience seamless money transfers <br /> and secure cash-outs with
            ease.
          </p>
          <button className="btn mt-4 btn-outline text-white border-white">
            Get Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
