import React, { useState, useEffect } from 'react';
//import '../components/NavBar.css';

function Deliveryprofile() {
  const [deliveryData, setdeliveryData] = useState({});

  // const fetchSellerData = async () => {
  //   try {
  //     const email = window.location.pathname.split('/').pop();
  //     const response = await axios.get(`http://localhost:2032/viewdelprofile/${email}`);
  //     setSellerData(response.data);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  useEffect(() => {
   // fetchSellerData();
   const storeddeliveryData = localStorage.getItem('delivery');
    if (storeddeliveryData) {
      const parsedeliveryData = JSON.parse(storeddeliveryData);
      setdeliveryData(parsedeliveryData);
    }
  }, []);

  return (
    <div className='card' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <div className="seller-card">
        <h2>{deliveryData.name}</h2>
        <p><strong>License Number:</strong> {deliveryData.licensenumber}</p>
        <p><strong>Bank Account Number:</strong> {deliveryData.bankaccountnum}</p>
        <p><strong>Email:</strong> {deliveryData.email}</p>
        <p><strong>Password:</strong> {deliveryData.password}</p>
        <p><strong>Location:</strong> {deliveryData.location}</p>
        <p><strong>Contact:</strong> {deliveryData.contact}</p>
      </div>
    </div>
  );
}

export default Deliveryprofile;
