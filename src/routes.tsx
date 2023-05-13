import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/auth/Login';
import Peerreview from './pages/Peerreview';
import Test from './pages/auth/Test';
import MainLayout from './components/layouts/MainLayout';
import { AuthLayout } from './components/layouts/AuthLayout';
import { ProtectedLayout } from './components/layouts/ProtectedLayout';
import { Registration } from './pages/auth/Registration';
import { NavBar } from './components/common/NavBar';
import { Peerreviewbox } from './components/common/Peerreviewbox';
import { Rangesliders } from './components/common/Rangesliders';
import { Profiledescription } from './components/common/Profiledescription';
import { Personalreviewbox } from './components/common/Personalreviewbox';
import Peerreviewtest from './pages/auth/Peereviewtest';
import { Peerreviewdescription } from './components/common/Peerreviewdescription';
import Notificationbox from './components/common/Notificationbox';
import Forgotpassword from './pages/auth/Forgotpassword';
import { HashRouter as Router } from "react-router-dom";


const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AuthLayout />}>
      <Route element={<MainLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/Test/:employeeId" element={<Test />} />
        <Route path="/Peerreviewtest" element={<Peerreviewtest />} />
        <Route path="/Forgotpassword" element={<Forgotpassword />} />
      </Route>
      <Route element={<ProtectedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/NavBar" element={<NavBar title={''} raterId={0} />} />
        <Route path="/Peerreview" element={<Peerreview />} />
        <Route path="/Peereviewbox" element={<Peerreviewbox />} />
        <Route path="/Personalreviewbox" element={<Personalreviewbox />} />
        <Route path="/Peerreviewdescription" element={<Peerreviewdescription />} />
        <Route path="/Rangesliders" element={<Rangesliders />} />
        <Route path="/Profiledescription" element={<Profiledescription />} />
        <Route path="/Notificationbox" element={<Notificationbox size={''} raterId={0} />} />
      </Route>
    </Route>
  )
);

export default AppRoutes;
