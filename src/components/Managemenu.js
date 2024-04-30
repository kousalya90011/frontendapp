// Managemenu.js
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Register from '../Sellermenu/RegistrationMenu';
import Viewmenu from '../Sellermenu/Viewmenu';
import './Managemenu.css'; // Import the CSS file

export default function Managemenu() {
  return (
    <div className="managemenu-container">
      <nav className="managemenu-nav">
        <ul className="managemenu-nav-list">
          <li className="managemenu-nav-item">
            <Link to="register" className="managemenu-nav-link">RegisterMenu</Link>
          </li>
          &nbsp;&nbsp;&nbsp;
          <li className="managemenu-nav-item">
            <Link to="viewmenu" className="managemenu-nav-link">ViewMenu</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="viewmenu" element={<Viewmenu />} />
      </Routes>
    </div>
  );
}
