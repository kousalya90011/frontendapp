import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${config.url}/vieworders`);
      setOrders(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDelete = async (itemId) => {
    try {
      console.log('Deleting order with Item ID:', itemId);

      const response = await axios.delete(`${config.url}/deleteorder/${itemId}`);

      console.log('Delete response:', response.data);

      if (response.data === "Deleted Successfully") {
        // Remove the deleted order from the state
        setOrders((prevOrders) => prevOrders.filter(order => order._id !== itemId));
      } else {
        console.error("Failed to delete order");
      }
    } catch (error) {
      console.error('Error during delete:', error.message);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const cardStyle = {
    width: '300px',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'transform 0.3s',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const hoverStyle = {
    transform: 'scale(1.05)',
  };

  return (
    <div>
      <h2 align="center"><b><u>ORDERS</u></b></h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {orders.map((order, index) => (
          <div
            key={index}
            style={{ ...cardStyle, ...(order.isHovered ? hoverStyle : {}) }}
            onMouseEnter={() => setOrders(prevState => prevState.map((item, i) => (i === index ? { ...item, isHovered: true } : item)))}
            onMouseLeave={() => setOrders(prevState => prevState.map((item, i) => (i === index ? { ...item, isHovered: false } : item)))}
          >
            <div style={{ padding: '10px' }}>
              <h4>{order.itemname}</h4>
              <p>Customer Name: {order.customername}</p>
              <p>Customer Email:{order.customeremail}</p>
              <p>Contact: {order.contact}</p>
              <p>Price: Rs:{order.price}/-</p>
              <p>Varient: {order.varient}</p>
              <p>Quantity: {order.quantity}</p>
              <div style={buttonContainerStyle}>
                <button style={{ backgroundColor: 'green', color: 'white' }} >Accept</button>
                <button onClick={() => handleDelete(order._id)}>Cancel</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
