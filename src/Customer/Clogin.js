// Dlogin.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config';



export default function Clogin({onCustomerLogin}) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/checkcustomerlogin`, formData);
      console.log('Login Response:', response.data);

      if (response.data != null) {
        console.log('Login Successful');
        onCustomerLogin();
        localStorage.setItem('customer',JSON.stringify(response.data));
        //navigate(`/dhome/${formData.email}`);  // Pass email as a URL parameter
        navigate('chome');
      } else {
        setMessage("Login Failed");
        setError("");
      }
    } catch (error) {
      console.error('Login Error:', error.message);
      setMessage("");
      setError(error.message);
    }
  };
  const handlesignup = () => {
    navigate('/cregister');
  };


  return (
    <div className='card'>
      <h3 align="center"><u>Customer Login</u></h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="button">Login</button>
        <h4 align="center">
          No Account?
          <button
            to='register'
            className='registerButton'
            onClick={handlesignup}
          >
            Register
          </button>
          </h4>
      </form>
    </div>
  );
}
