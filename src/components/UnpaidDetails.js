import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const UnpaidDetails = () => {
  const [unpaidData, setUnpaidData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:22000/api/v1/paymentManagement/commission/getAllUnpaid', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setUnpaidData(response.data.data || []);
      } catch (error) {
        console.error('Error fetching unpaid details:', error);
        setUnpaidData([
          { name: 'John Doe', courseName: 'Python for Beginners', amount: 80 },
          { name: 'Jane Smith', courseName: 'Web Development 101', amount: 120 },
        ]);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <h1>Unpaid Details</h1>
      <table>
        <thead>
          <tr>
            <th>Agent</th>
            <th>Course</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {unpaidData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.courseName}</td>
              <td>${item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default UnpaidDetails;