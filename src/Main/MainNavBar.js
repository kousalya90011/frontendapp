import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './MainNavBar.css';
import Slogin from '../SellerPro/Slogin';
import Dlogin from '../Delivery/componets/Dlogin';
import Clogin from '../Customer/Clogin';
import CRegistration from '../Customer/CRegistration';
import Home from './Sellerhome';
import SRegistration from '../SellerPro/SRegistration';
import ForgotPassword from '../SellerPro/ForgotPassword';
import DRegistration from './../Delivery/componets/DRegistration';
import Contact from './Contact';

export default function MainNavBar({ onSellerLogin , onDeliveryLogin, onCustomerLogin}) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <Link to="/navbar" className="navbar-brand" style={{ fontSize: "50px" }}>
          FeastExpress
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="home" className="nav-link" style={{ fontSize: "20px" }}>
                Home
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link">Registration</Link>
              <div className="dropdown-content">
                <Link to="/sregister" className="nav-link" style={{ fontSize: "20px" }}>Seller Registration</Link>
                <Link to="/dregistration" className="nav-link">Delivery Registration</Link>
                <Link to="/cregistration" className="nav-link">Customer Registration</Link>

                {/* <Link to="/admin">Admin Login</Link> */}
              </div>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link">Login</Link>
              <div className="dropdown-content">
              <Link to="/clogin" className="nav-link">Customer Login</Link>
                <Link to="/slogin" className="nav-link" style={{ fontSize: "20px" }}>Seller Login</Link>
                <Link to="/dlogin" className="nav-link">Delivery Login</Link>
                {/* <Link to="/admin">Admin Login</Link> */}
              </div>
            </li>

            <li className="nav-item">
              <Link to="contact" className="nav-link" style={{ fontSize: "20px" }}>
                Contact
              </Link>
            </li>

          </ul>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/home' element={<Home />} exact />
        <Route path='/contact' element={<Contact />} exact />
        <Route path='sregister' element={<SRegistration />} exact />
        <Route path='/forgotpwd' element={<ForgotPassword />} exact />
        <Route path='slogin/*' element={<Slogin onSellerLogin={onSellerLogin} />} />
        <Route path='clogin/*' element={<Clogin onCustomerLogin={onCustomerLogin} />} />
        <Route path='dlogin' element={<Dlogin onDeliveryLogin={onDeliveryLogin}/>} exact />
        <Route path='dregistration' element={<DRegistration />} />
        <Route path='cregistration' element={<CRegistration />} />

      </Routes>
    </div>
  );
}
