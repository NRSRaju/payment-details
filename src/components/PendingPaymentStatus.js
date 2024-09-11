import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const PendingPaymentStatus = () => {
  const [pendingData, setPendingData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:22000/api/v1/paymentManagement/status-of-pendingpayement/:userId', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setPendingData(response.data.data || []);
      } catch (error) {
        console.error('Error fetching pending payment status:', error);
        setPendingData([
          { courseName: 'Machine Learning Basics', amount: 200, settlement: 'Pending' },
          { courseName: 'Advanced React', amount: 180, settlement: 'Processing' },
        ]);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <h1>Pending Payment Status</h1>
      <table>
        <thead>
          <tr>
            <th>Course</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {pendingData.map((item, index) => (
            <tr key={index}>
              <td>{item.courseName}</td>
              <td>${item.amount}</td>
              <td>{item.settlement}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default PendingPaymentStatus;