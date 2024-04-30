import React from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import DHomePage from '../Delivery/Main/DHomePage';
import DOrders from '../Delivery/Main/DOrders'; 
import Dlogin from '../Delivery/componets/Dlogin';
import DRegistration from '../Delivery/componets/DRegistration';
import Deliveryprofile from '../Delivery/Main/Deliveryprofile';
import './NavBar.css';

export default function DNavBar() {
const navigate = useNavigate();

  const handleLogout = () =>{
    localStorage.removeItem('isDeliveryLoggedIn');
    localStorage.removeItem('delivery');
    navigate('/dlogin');
    window.location.reload()
  }

  return (
    <div>
    <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
      <Link to="/" className="navbar-brand" style={{ fontSize: "50px" }}>FeastExpress</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
            
          <li className="nav-item">
            <Link to="/dhome" className="nav-link" style={{ fontSize: "20px" }}>Home</Link>
          </li>
          
          <li className="nav-item">
            <Link to="/dorders" className="nav-link" style={{ fontSize: "20px" }}>Orders</Link>
          </li>

          <li className="nav-item">
            <Link to="/dprofile" className="nav-link" style={{ fontSize: "20px" }}>Profile</Link>
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
        <Route path='/dhome' element={<DHomePage />} exact />
        <Route path='/dprofile' element={<Deliveryprofile />} exact />
        <Route path='/dregister' element={<DRegistration />} exact />
        <Route path='/dorders' element={<DOrders />} exact />
      </Routes>
      </div>
  );
}
