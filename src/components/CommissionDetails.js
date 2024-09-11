import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const CommissionDetails = () => {
  const [commissionData, setCommissionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:22000/api/v1/paymentManagement/commission/:userId', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setCommissionData(response.data.data || []);
      } catch (error) {
        console.error('Error fetching commission details:', error);
        setCommissionData([
          { courseName: 'React Basics', amount: 100, date: '2023-09-01' },
          { courseName: 'Node.js Advanced', amount: 150, date: '2023-09-15' },
        ]);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <h1>Commission Details</h1>
      <table>
        <thead>
          <tr>
            <th>Course</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {commissionData.map((item, index) => (
            <tr key={index}>
              <td>{item.courseName}</td>
              <td>${item.amount}</td>
              <td>{new Date(item.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default CommissionDetails;