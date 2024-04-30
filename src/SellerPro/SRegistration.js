//SRegistration.js
import React, { useState } from 'react';
import axios from 'axios';
import '../components/NavBar.css'
import config from '../config';

export default function SRegistration() 
{
  //formData state variable is initialized with all required keys and empty values
  const [formData, setFormData] = useState({
    restuarentname: '',
    licensenumber: '',
    pannumber: '',
    bankaccountnum:'',
    email: '',
    password: '',
    location: '',
    contact: ''
  });

  //message state variable
  const [message, setMessage] = useState('');
  //error state variable
  const [error, setError] = useState('');

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    }
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const response = await axios.post(`${config.url}/insertseller`, formData);
      if (response.status === 200) 
      {
        //It will set all fields to ""
        setFormData({
            restuarentname: '',
            licensenumber: '',
            pannumber: '',
            bankaccountnum:'',
            email: '',
            password: '',
            location: '',
            contact: ''
        });
      }
      setMessage(response.data);
      setError(''); //set error to ""
    } 
    catch(error) 
    {
      setError(error.response.data);
      setMessage(''); //set message to ""
    }
  };
  
  return (
    <div className='card'>
      <h3 align="center"><u>Seller Registration</u></h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }

      <form onSubmit={handleSubmit}>
        <div>
          <label>Restuarent Name</label>
          <input type="text" id="restuarentname" value={formData.restuarentname} onChange={handleChange} required />
        </div>
        <div>
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