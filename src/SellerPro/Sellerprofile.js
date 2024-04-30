// Sellerprofile.js
import React, { useState, useEffect } from 'react';
import '../components/NavBar.css';

function Sellerprofile() {
  const [sellerData, setSellerData] = useState({});

  // const fetchSellerData = async () => {
  //   try {
  //   const email = window.location.pathname.split('/').pop();
  //   //const email = "SSS600@gmail.com";
  // const response = await axios.get(`http://localhost:2032/viewprofile/${email}`);
  //   setSellerData(response.data);
  //  } catch (error) {
  //   console.error(error.message);
  //  }
  //};

  useEffect(() => {
    // fetchSellerData();
    const storedsellerData = localStorage.getItem('seller');
    //console.log(storedsellerData);
    if (storedsellerData) {
      const parsedsellerData = JSON.parse(storedsellerData);
      setSellerData(parsedsellerData);
    }
  }, []);
  

  return (
    <div className='card' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <div className="seller-card">
        <h2>{sellerData.restuarentname}</h2>
        <p><strong>License Number:</strong> {sellerData.licensenumber}</p>
        <p><strong>PAN Number:</strong> {sellerData.pannumber}</p>
        <p><strong>Bank Account Number:</strong> {sellerData.bankaccountnum}</p>
        <p><strong>Email:</strong> {sellerData.email}</p>
        <p><strong>Password:</strong> {sellerData.password}</p>
        <p><strong>Location:</strong> {sellerData.location}</p>
        <p><strong>Contact:</strong> {sellerData.contact}</p>
      </div>
    </div>
  );
}

export default Sellerprofile;
