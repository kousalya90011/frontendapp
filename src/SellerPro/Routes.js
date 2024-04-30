import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Slogin from './Slogin';
import Sellerprofile from './Sellerprofile';
import SRegistration from './SRegistration';
import ForgotPassword from './ForgotPassword';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Slogin />} />
    <Route path='/Sellerprofile/:email' element={<Sellerprofile/>} />
    <Route path='/register' element={<SRegistration/>} />
    <Route path='/sregister' element={<SRegistration/>} />
    <Route path='/NavBar/*' element={<NavBar/>} />
    <Route path='/profile/:email' element={<Sellerprofile/>} />
    <Route path='/forgotpwd' element={<ForgotPassword />} /> 
  </Routes>
);

export default AppRoutes;
