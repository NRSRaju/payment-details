import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

const SendNotification = () => {
  const sendNotification = async () => {
    try {
      await axios.post('http://localhost:22000/api/v1/paymentManagement/sendNotificationremainder');
      alert('Notification sent successfully');
    } catch (error) {
      console.error('Error sending notification:', error);
      alert('Failed to send notification');
    }
  };

  return (
    <Container>
      <h1>Send Notification</h1>
      <Button onClick={sendNotification}>Send Reminder Notification</Button>
    </Container>
  );
};

export default SendNotification;