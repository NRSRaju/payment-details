import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const PaidDetails = () => {
  const [paidData, setPaidData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:22000/api/v1/paymentManagement/history/:userId', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setPaidData(response.data.data || []);
      } catch (error) {
        console.error('Error fetching paid details:', error);
        setPaidData([
          { courseName: 'JavaScript Fundamentals', amount: 90, date: '2023-08-20' },
          { courseName: 'Data Structures', amount: 130, date: '2023-08-25' },
        ]);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <h1>Paid Details</h1>
      <table>
        <thead>
          <tr>
            <th>Course</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {paidData.map((item, index) => (
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

export default PaidDetails;