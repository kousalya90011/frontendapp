import axios from 'axios';
import { useEffect, useState } from 'react';
import config from '../config';

export default function ViewCart() {
  const [jobSeekers, setJobSeekers] = useState([]);

  const fetchJobSeekers = async () => {
    try {
      const response = await axios.get(`${config.url}/viewmenu`);
      setJobSeekers(response.data);
    } catch (error) {
      console.error('Error fetching menu:', error.message);
    }
  };

  // ...

const handleAddToCart = async (name) => {
    try {
      console.log('Adding item to cart with Name:', name);
  
      // Assuming you have the data structure for the item you want to add to the cart
      const itemToAddToCart = jobSeekers.find(item => item.itemname === name);
  
      const response = await axios.post(`${config.url}/insertcart`, itemToAddToCart);
  
      console.log('Add to cart response:', response.data);
  
      // You may want to handle the response accordingly
      // For example, if the response indicates success, you can update your UI or show a notification
    } catch (error) {
      console.error('Error during add to cart:', error.message);
    }
  };
  
  // ...
  
  useEffect(() => {
    fetchJobSeekers();
  }, []);


  return (
    <div>
      <h2 align="center"><b><u>YOUR MENU</u></b></h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {jobSeekers.map((jobSeeker) => (
          <div
            key={jobSeeker.itemname} // Use a unique key
            style={{ width: '200px', margin: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden', transition: 'transform 0.3s' }}
            onMouseEnter={() => setJobSeekers((prev) => prev.map(item => (item.itemname === jobSeeker.itemname ? { ...item, isHovered: true } : item)))}
            onMouseLeave={() => setJobSeekers((prev) => prev.map(item => (item.itemname === jobSeeker.itemname ? { ...item, isHovered: false } : item)))}
          >
            {jobSeeker.image && (
              <img
                src={`data:${jobSeeker.image.contentType};base64,${jobSeeker.image.data}`}
                alt=""
                style={{ width: '100%', height: '150px', objectFit: 'cover' }}
              />
            )}
            <div style={{ padding: '10px' }}>
              <h4>{jobSeeker.itemname}</h4>
              <p>Price: Rs:{jobSeeker.price}/-</p>
              <p>Varient: {jobSeeker.varient}</p>
              <p>Quantity: {jobSeeker.quantity}</p>
              <button onClick={() => handleAddToCart(jobSeeker.itemname)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
