import React, { useState, useEffect } from 'react';
//import '../components/NavBar.css';

function Customerprofile() {
  const [customerData, setcustomerData] = useState({});

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
   const storedcustomerData = localStorage.getItem('customer');
    if (storedcustomerData) {
      const parsecustomerData = JSON.parse(storedcustomerData);
      setcustomerData(parsecustomerData);
    }
  }, []);

  return (
    <div className='card' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <div className="customer-card">
        <h2>{customerData.fullname}</h2>
        <p><strong>Full Name:</strong> {customerData.fullname}</p>
        <p><strong>Gender:</strong> {customerData.gender}</p>
        <p><strong>Date of Birth:</strong> {customerData.dateofbirth}</p>
        <p><strong>Email:</strong> {customerData.email}</p>
        <p><strong>Location:</strong> {customerData.location}</p>
        <p><strong>Contact:</strong> {customerData.contact}</p>
      </div>
    </div>
  );
}

export default Customerprofile;
