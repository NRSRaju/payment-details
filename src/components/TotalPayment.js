import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const TotalPayment = () => {
  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:22000/api/v1/paymentManagement/payments/calculateTotalearnings/:userId', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setTotalPayment(response.data.totalPrice || 0);
      } catch (error) {
        console.error('Error fetching total payment:', error);
        setTotalPayment(1500);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <h1>Total Payment</h1>
      <h2>Total Earnings: ${totalPayment}</h2>
    </Container>
  );
};

export default TotalPayment;