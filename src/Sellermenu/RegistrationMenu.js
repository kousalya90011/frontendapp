import React, { useState } from 'react';
import axios from 'axios';
import './RegistrationMenu.css';
import config from '../config';

export default function Registration() {
  const [formData, setFormData] = useState({
    itemname: '',
    email:'',
    price: '',
    varient:'',
    quantity: 1, // Set default quantity to 1
    category:'',
    offers:0,
    image: null,
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');



  const handleChange = (e) => {

    if (e.target.type === 'file') {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('itemname', formData.itemname);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('price', formData.price);
      formDataToSend.append('varient', formData.varient);
      formDataToSend.append('quantity', formData.quantity);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('offers', formData.offers);
      formDataToSend.append('image', formData.image);

      const response = await axios.post(`${config.url}/insertmenu`, formDataToSend);

      if (response.status === 200) {
        setFormData({ // Clear itemid and reset other fields on success
          itemname: '',
          email:'',
          price: '',
          varient:'',
          quantity: 1, // Reset quantity to default
          category:'',
          offers:0,
          image: null,
        });
        setMessage(response.data); // Assuming response.data contains a success message
      }

      setError('');
    } catch (error) {
      setError(error.response.data);
      setMessage('');
    }
  };

  return (
    <div className='card'>
      <h3 align="center"><u><b>Seller Menu Registration</b></u></h3>
      {message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>}

      <form onSubmit={handleSubmit}>

        <div>
          <label>Item Name</label>
          <input type="text" id="itemname" value={formData.itemname} onChange={handleChange} required />
        </div>

        <div>
          <label>Email ID</label>
          <input type="text" id="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div>
          <label>Price</label>
          <input type="number" id="price" value={formData.price} onChange={handleChange} required />
        </div>

        <div>
          <label>Quantity</label>
          <input type="number" id="quantity" value={formData.quantity} onChange={handleChange} required />
        </div>

        <div className='side-by-side'>
          <label>Varient</label>&nbsp;&nbsp;
          <select id="varient" value={formData.varient} onChange={handleChange} required>
            <option value="">Select Varient</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="familpack">Family pack</option>
            <option value="Functionpack">Function Pack</option>
          </select>
        </div>
        &nbsp;&nbsp;

        <div className='side-by-side'>
          <label>Category</label>&nbsp;&nbsp;
          <select id="category" value={formData.category} onChange={handleChange} required>
            <option value="">Select Category</option>
            <option value="tiffin">Tiffins</option>
            <option value="shaks">Shaks</option>
            <option value="pizza">Pizza</option>
          </select>
        </div>

        &nbsp;&nbsp;
        <div>
          <label>offers</label>
          <input type="number" id="offers" placeholder='Enter number' value={formData.offers} onChange={handleChange} required />
        </div>


        &nbsp;&nbsp;

        <div className='side-by-side'>
          <label>Upload Image</label>
          <input type="file" id="image" onChange={handleChange} accept="image/*" required />
        </div>

        <button type="submit">Add To Menu</button>
      </form>
    </div>
  );
}
