import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Header } from '../common/Header';
import { NavBar } from '../common/NavBar';
import { SideBar } from '../common/SideBar';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { UserInterface } from '../../slices/auth/userSlice';
import { useEffect } from 'react';
import { isExpired } from 'react-jwt';
import { Peerreviewbox } from '../common/Peerreviewbox';
import { Personalreviewbox } from '../common/Personalreviewbox';
import { Rangesliders } from '../common/Rangesliders';

export const ProtectedLayout = () => {
  const [user, setUser] = useLocalStorage<UserInterface>('user', null as unknown as UserInterface);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user) {
      if (!isExpired(user.token)) {
        navigate(location.pathname);
      } else setUser(null as unknown as UserInterface);
    }
    navigate('/login');
  }, []);
  return (
    <>
      <Header />
      <NavBar title="" raterId={0} />
      <SideBar />
      <Outlet />
      <Peerreviewbox />
      <Personalreviewbox />
      <Rangesliders />
    </>
  );
};
