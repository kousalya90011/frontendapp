import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

export default function Coffers() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ setMessage] = useState('');
  const [ setError] = useState('');
  const [customerData, setCustomerData] = useState('');

  useEffect(() => {
    const storedCustomerData = localStorage.getItem('customer');
    if (storedCustomerData) {
      const parseCustomerData = JSON.parse(storedCustomerData);
      setCustomerData(parseCustomerData);
    }
  }, []);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get(`${config.url}/viewmenu`);
        if (response.status === 200) {
          // Filter menu items with offers greater than or equal to 1
          const filteredMenuItems = response.data.filter(item => item.offers >= 1);
          setMenuItems(filteredMenuItems);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    fetchMenuItems();
  }, []);

  const handleCart = async (itemname, email) => {
    try {
      const response = await axios.post(`${config.url}/insertcart`, { itemname, email });
      setMessage(response.data);
      setError('');
    } catch (error) {
      setError(error.response.data);
      setMessage('');
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Menu Items with Offers</h2>
      {menuItems.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No menu items with offers found</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {menuItems.map(item => (
            <li key={item.itemname} style={{ marginBottom: '20px' }}>
              <div style={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', padding: '10px', margin: '20px auto', transition: 'transform 0.3s ease', maxWidth: '300px', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ marginTop: 0, fontSize: '1.5rem', color: '#333' }}>{item.itemname}</h3>
                {item.image && (
                  <img
                    src={`data:${item.image.contentType};base64,${item.image.data}`}
                    alt={item.itemname}
                    style={{ maxWidth: '100%', borderRadius: '4px', alignSelf: 'center' }}
                  />
                )}
                <p style={{ margin: '5px 0', textAlign: 'center' }}><b>Price:Rs: {item.price}/-</b></p>
                <p style={{ margin: '5px 0' }}>Variant: {item.varient}</p>
                <p style={{ margin: '5px 0' }}>Quantity: {item.quantity}</p>
                <p style={{ margin: '5px 0' }}>Category: {item.category}</p>
                <p style={{ margin: '5px 0' }}>Offers: {item.offers}</p>
                <button style={{ backgroundColor: '#ea7f05', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}
                  onClick={() => handleCart(item.itemname, customerData.email)}>Add To Cart</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
