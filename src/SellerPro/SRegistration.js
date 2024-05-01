import React, { useState } from 'react';
import axios from 'axios';
import '../components/NavBar.css';

const backendUrl = 'https://backendapp-fepu.onrender.com';

export default function SRegistration() {
  const [formData, setFormData] = useState({
    restuarentname: '',
    licensenumber: '',
    pannumber: '',
    bankaccountnum: '',
    email: '',
    password: '',
    location: '',
    contact: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${backendUrl}/insertseller`, formData);
      if (response.status === 200) {
        setFormData({
          restuarentname: '',
          licensenumber: '',
          pannumber: '',
          bankaccountnum: '',
          email: '',
          password: '',
          location: '',
          contact: ''
        });
        setMessage('Registration successful!');
        setError('');
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data);
        setMessage('');
      } else {
        setError('An unexpected error occurred.');
        setMessage('');
      }
    }
  };

  return (
    <div className='card'>
      <h3 align="center"><u>Seller Registration</u></h3>
      {message && <h4 align="center">{message}</h4>}
      {error && <h4 align="center">{error}</h4>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Restaurant Name</label>
          <input type="text" id="restuarentname" value={formData.restuarentname} onChange={handleChange} required />
        </div>
        <div>
          <label>License Number</label>
          <input type="number" id="licensenumber" value={formData.licensenumber} onChange={handleChange} required />
        </div>
        <div>
          <label>PAN Number</label>
          <input type="number" id="pannumber" value={formData.pannumber} onChange={handleChange} required />
        </div>
        <div>
          <label>Bank Account Number</label>
          <input type="number" id="bankaccountnum" value={formData.bankaccountnum} onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Location</label>
          <input type="text" id="location" value={formData.location} onChange={handleChange} required />
        </div>
        <div>
          <label>Contact</label>
          <input type="number" id="contact" value={formData.contact} onChange={handleChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
