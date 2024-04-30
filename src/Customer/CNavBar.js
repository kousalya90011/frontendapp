import React from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import CRegistration from './CRegistration';
import Cprofile from './Customerprofile';
import Clogin from './Clogin';
import Chome from './Chome';
import Coffers from './Coffers';

export default function DNavBar() {
const navigate = useNavigate();

  const handleLogout = () =>{
    localStorage.removeItem('isCustomerLoggedIn');
    localStorage.removeItem('customer');
    navigate('/clogin');
    console.log("handlelogout");
    window.location.reload()
  }

  return (
    <div>
    <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
      <Link to="/" className="navbar-brand" style={{ fontSize: "50px" }}>FeastExpress</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
            
          <li className="nav-item">
            <Link to="/chome" className="nav-link" style={{ fontSize: "20px" }}>Home</Link>
          </li>

          <li className="nav-item">
            <Link to="/coffers" className="nav-link" style={{ fontSize: "20px" }}>Offers</Link>
          </li>

          <li className="nav-item">
            <Link to="/cprofile" className="nav-link" style={{ fontSize: "20px" }}>Profile</Link>
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
        <Route path='/chome' element={<Chome />} exact />
        <Route path='/cprofile' element={<Cprofile/>} exact />
        <Route path='/coffers' element={<Coffers/>} exact />
        <Route path='/cregister' element={<CRegistration />} exact />
        <Route path='/clogin' element={<Clogin/>}/>

        
      </Routes>
      </div>
  );
}
