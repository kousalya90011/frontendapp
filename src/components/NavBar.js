// NavBar.js
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from '../Main/Sellerhome';
import Orders from '../Main/Orders';
import Sellerprofile from '../SellerPro/Sellerprofile';
import Managemenu from './Managemenu';
import './NavBar.css';
import SRegistration from '../SellerPro/SRegistration';
import ForgotPassword from '../SellerPro/ForgotPassword';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isSellerLoggedIn');
    localStorage.removeItem('seller');
    navigate('/slogin/*');
    window.location.reload()
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <Link to="/navbar" className="navbar-brand" style={{ fontSize: "50px" }}>
          FeastExpress
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="Navbar/*" className="nav-link" style={{ fontSize: "20px" }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="Sellerprofile/" className="nav-link" style={{ fontSize: "20px" }}>
                profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="orders" className="nav-link" style={{ fontSize: "20px" }}>
                Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link to="manage" className="nav-link" style={{ fontSize: "20px" }}>
                ManageMenu
              </Link>
            </li>
            <li className="nav-item">
            <Link to="logout" className="nav-link logout-button" onClick={handleLogout}>
               Logout
            </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path='Navbar/*' element={<Home />} exact />
        <Route path='orders' element={<Orders />} exact />
        <Route path='manage/*' element={<Managemenu />} />
        <Route path='Sellerprofile/' element={<Sellerprofile />} exact />
        <Route path='sregister' element={<SRegistration />} exact />
        <Route path='forgotpwd' element={<ForgotPassword />} exact />
      </Routes>
    </div>
  );
}
