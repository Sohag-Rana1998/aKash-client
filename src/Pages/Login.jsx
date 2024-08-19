import { Link, useLocation, useNavigate } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';
import { useContext, useEffect, useState } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';

import useAxiosPublic from '../components/Hooks/useAxiosPublic';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
  const { updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const [type, setType] = useState(false);

  const location = useLocation();
  // console.log(location);
  const handleLogIn = async e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pin = form.pin.value;

    try {
      const res = await axiosPublic.post(
        '/login',
        { email, pin },
        { withCredentials: true }
      );

      localStorage.setItem('user', JSON.stringify(res.data));
      updateUser();
      navigate('/');
      console.log(res.data);
    } catch (error) {
      console.error('Login failed:', error);
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
        <title>Job Portal | Login</title>
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
            <form
              onSubmit={handleLogIn}
              noValidate=""
              action=""
              className="space-y-6"
            >
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block font-bold mb-2 text-sm"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Email"
                    className="w-full mb-3 px-2 py-2 border-b-2  border-white bg-[#00523f] "
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="pin" className="text-sm font-bold">
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type={type ? 'text' : 'password'}
                      name="pin"
                      id="pin"
                      placeholder="Inter Your Pin"
                      className="w-full  py-2 px-2 border-b-2  border-white bg-[#00523f] "
                      required
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
                  <div className="flex justify-end">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="text-xs hover:underline "
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <input
                    type="submit"
                    value="Log In"
                    className="w-full px-8 py-3 cursor-pointer font-semibold rounded-md bg-[#FFC42A] text-[#00523f]"
                  />
                </div>
                <p className="px-6 text-sm text-center">
                  Don&apos;t have an account yet?
                  <Link to={'/register'}>
                    <button
                      rel="noopener noreferrer"
                      href="#"
                      className="hover:underline cursor-pointer font-bold text-xl "
                    >
                      Sign up
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

export default Login;
