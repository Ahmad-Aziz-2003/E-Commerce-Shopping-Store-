import React, { useState, useEffect } from 'react';
import './ListPayment.css'
const ListPayment = () => {
  const [allpayment, setAllPayment] = useState([]);

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    try {
      const response = await fetch('http://localhost:4002/payment/allpayment');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setAllPayment(data);
    } catch (error) {
      console.error('Error fetching payments:', error);
    }
  };

  return (
    <div className="list-product">
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>email</p>
        <p>amount</p>
        <p>date</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allpayment.map((payment, index) => (
          <div key={index} className="listproduct-format-main listproduct-format">
            <p>{payment.userEmail}</p>
            <p>${payment.amount}</p>
            <p>{payment.createdAt}</p> {/* Assuming 'createAt' is a typo and should be 'createdAt' */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListPayment;
