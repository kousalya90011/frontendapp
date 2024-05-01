import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function Viewmenu() {
  const [jobseekers, setJobSeekers] = useState([]);

  const fetchJobSeekers = async () => {
    try {
      const response = await axios.get(`${config.url}/viewmenu`);
      setJobSeekers(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDelete = async (name) => {
    try {
      console.log('Deleting item with Name:', name);
  
      const response = await axios.delete(`${config.url}/deletemenu/${name}`);
      
      console.log('Delete response:', response.data);
  
      if (response.data === "Deleted Successfully") {
        // Remove the deleted item from the state
        setJobSeekers((prevJobSeekers) => prevJobSeekers.filter(item => item.itemname !== name));
      } else {
        console.error("Failed to delete item");
      }
    } catch (error) {
      console.error('Error during delete:', error.message);
    }
  };
  

  useEffect(() => {
    fetchJobSeekers();
  }, []);

  const cardStyle = {
    width: '200px',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'transform 0.3s',
  };

  const hoverStyle = {
    transform: 'scale(1.05)',
  };

  return (
    <div>
      <h2 align="center"><b><u>YOUR MENU</u></b></h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {jobseekers.map((jobseeker, index) => (
          <div
            key={index}
            style={{ ...cardStyle, ...(jobseeker.isHovered ? hoverStyle : {}) }}
            onMouseEnter={() => setJobSeekers(prevState => prevState.map((item, i) => (i === index ? { ...item, isHovered: true } : item)))}
            onMouseLeave={() => setJobSeekers(prevState => prevState.map((item, i) => (i === index ? { ...item, isHovered: false } : item)))}
          >
            {jobseeker.image && (
              <img
                src={`data:${jobseeker.image.contentType};base64,${jobseeker.image.data}`}
                alt=""
                style={{ width: '100%', height: '150px', objectFit: 'cover' }}
              />
            )}
            <div style={{ padding: '10px' }}>
              <h4>{jobseeker.itemname}</h4>
              <p>Price: Rs:{jobseeker.price}/-</p>
              <p>Varient: {jobseeker.varient}</p>
              <p>Quantity: {jobseeker.quantity}</p>
              <button onClick={() => handleDelete(jobseeker.itemname)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
