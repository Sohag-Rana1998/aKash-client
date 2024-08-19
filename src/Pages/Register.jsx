import { Link, useNavigate } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';
import { useContext, useEffect, useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import Swal from 'sweetalert2';

import toast from 'react-hot-toast';
import useAxiosPublic from '../components/Hooks/useAxiosPublic';
import axios from 'axios';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
  const [type, setType] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const mobile = form.mobile.value;
    const email = form.email.value;
    const pin = form.password.value;
    const confirmPassword = form.confirm_password.value;
    const balance = 0;
    const status = 'Pending';
    const role = 'user';

    if (password.length < 5) {
      toast.error('Pin Must Be Minimum 05 Character.');
      return;
    } else if (pin !== confirmPassword) {
      toast.error('Pin and Confirm Pin should be matched.');
      return;
    }

    const userData = { name, mobile, email, status, balance, pin, role };
    const user = { email, pin, mobile };
    console.log(userData);
    try {
      const res = await axiosPublic.post('/jwt', user, {
        withCredentials: true,
      });
      console.log(res.data);
      if (res?.data?.success === true) {
        try {
          const res = await axiosPublic.post('/register', userData, {
            withCredentials: true,
          });
          console.log(res.data);
          navigate('/login');
          // setUser(res.data.user);
        } catch (error) {
          console.error('Registration failed:', error);
        }
      }
    } catch (error) {
      console.log(error?.response?.data?.msg);
      toast.error(error?.response?.data?.msg);
    }
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(setLoading, 500, false);
  }, []);

  return loading ? (
    <div className="w-[80%] mx-auto min-h-screen ">Loading</div>
  ) : (
    <div className="text-white relative flex flex-col   bg-[#00523f]">
      <Helmet>
        <title>Job Portal | Register</title>
      </Helmet>
      <div className="w-full  flex justify-between">
        <div className="w-full  my-14 h-full px-5 mx-auto md:mx-0 flex flex-col justify-center items-center">
          <div className=" w-60 mb-5">
            <img
              className="h-full w-full "
              src="https://i.postimg.cc/zvPQTYpS/avatar-with-man-in-green-shirt-and-orange-hat.png"
              alt=""
            />
          </div>
          <div className=" w-[20%] mb-8">
            <img src="https://i.postimg.cc/tCZS8f2w/WELCOME.png" alt="" />
          </div>
          <div>
            <form onSubmit={handleSubmit} className="">
              <div className=" grid grid-cols-2 gap-10 ">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 font-bold text-sm"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Your Name"
                    className="w-full mb-3 px-2 py-2 border-b-2  border-white bg-[#00523f] "
                  />
                </div>
                <div>
                  <label
                    htmlFor="mobile"
                    className="block mb-2 font-bold text-sm"
                  >
                    Your Mobile Number
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    id="mobile"
                    required
                    placeholder="Your Mobile Number"
                    className="w-full  px-2 py-2 border-b-2  border-white bg-[#00523f]  "
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 font-bold text-sm"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    id="email"
                    placeholder="Email address"
                    className="w-full mb-3 px-2 py-2 border-b-2  border-white bg-[#00523f] "
                  />{' '}
                </div>
                <div>
                  <div className="flex  justify-between mb-2">
                    <label htmlFor="password" className="text-sm font-bold">
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type={type ? 'text' : 'password'}
                      name="password"
                      id="password"
                      required
                      placeholder="password"
                      className="w-full mb-3 px-2 py-2 border-b-2  border-white bg-[#00523f] "
                    />
                    <span
                      className="absolute right-5 top-2 "
                      onClick={() => setType(!type)}
                    >
                      {type ? (
                        <IoEye className="text-2xl" />
                      ) : (
                        <IoEyeOff className="text-2xl" />
                      )}
                    </span>{' '}
                  </div>
                </div>
                <div>
                  <div className="flex  justify-between mb-2">
                    <label
                      htmlFor="confirm_password"
                      className="text-sm font-bold"
                    >
                      Confirm Password
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type={type ? 'text' : 'password'}
                      name="confirm_password"
                      id="confirm_password"
                      required
                      placeholder="Confirm-password"
                      className="w-full mb-3 px-2 py-2 border-b-2  border-white bg-[#00523f] "
                    />
                    <span
                      className="absolute right-5 top-2 "
                      onClick={() => setType(!type)}
                    >
                      {type ? (
                        <IoEye className="text-2xl" />
                      ) : (
                        <IoEyeOff className="text-2xl" />
                      )}
                    </span>{' '}
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <input
                    type="submit"
                    value="Register"
                    className="w-full px-8 py-3 font-semibold cursor-pointer rounded-md bg-blue-600 text-gray-50"
                  />
                </div>
                <p className="px-6 text-sm text-center ">
                  Already have an account yet?
                  <Link to={'/login'}>
                    {' '}
                    <button className="hover:underline cursor-pointer font-bold text-xl text-blue-600">
                      Log In
                    </button>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
