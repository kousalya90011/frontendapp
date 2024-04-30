// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import CNavBar from './Customer/CNavBar';
import DNavBar from './components/DNavBar';
import MainNavBar from './Main/MainNavBar';

function App() 
{
  const [isSellerLoggedIn, setIsSellerLoggedIn] = useState(false);
  const [isDeliveryLoggedIn, setIsDeliveryLoggedIn] = useState(false);
  const [isCustomerLoggedIn,setIsCustomerLoggedIn] = useState(false);

  useEffect(() => {
    const SellerLoggedIn = localStorage.getItem('isSellerLoggedIn') === 'true';
    const DeliveryLoggedIn = localStorage.getItem('isDeliveryLoggedIn') === 'true';
    const CustomerLoggedIn = localStorage.getItem('isCustomerLoggedIn') === 'true' ;
    
    setIsSellerLoggedIn(SellerLoggedIn);
    setIsDeliveryLoggedIn(DeliveryLoggedIn);
    setIsCustomerLoggedIn(CustomerLoggedIn);
  }, []);


  const onSellerLogin = () => {
    localStorage.setItem('isSellerLoggedIn', 'false');
    setIsSellerLoggedIn(true);
  };

  const onDeliveryLogin = () => {
    localStorage.setItem('isDeliveryLoggedIn', 'true');
    setIsDeliveryLoggedIn(true);
  }

  const onCustomerLogin = () => {
    localStorage.setItem('isCustomerLoggedIn', 'true');
    setIsCustomerLoggedIn(true);
  }

  return (
    <div className="App">
    <Router>
        {/* <Routes/> */}
        {isSellerLoggedIn ? (
          <NavBar />
         ) : isDeliveryLoggedIn?(
         <DNavBar/>
        ):isCustomerLoggedIn?(
          <CNavBar/>
        ):(
        <MainNavBar 
      onSellerLogin={onSellerLogin}
      onDeliveryLogin={onDeliveryLogin}
      onCustomerLogin={onCustomerLogin}
      
        />
      )} 
    </Router>
    </div>
  );
}

export default App;
