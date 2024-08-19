import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';

import Profile from '../../components/Profile';
const UserProfile = () => {
  const data = localStorage.getItem('user');
  const userData = JSON.parse(data);

  const [user, setUser] = useState(userData);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const data = localStorage.getItem('user');
    const user = JSON.parse(data);
    setUser(user);
  }, [toggle]);
  console.log(toggle);
  return (
    <div>
      <Helmet>
        <title>aKash | User Profile</title>
      </Helmet>
      <Profile user={user} setToggle={setToggle} toggle={toggle} />
    </div>
  );
};
export default UserProfile;
