import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const NotificationList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const NotificationItem = styled.li`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
`;

const GetNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:22000/api/v1/paymentManagement/getNotifications', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setNotifications(response.data.data || []);
      } catch (error) {
        console.error('Error fetching notifications:', error);
        setNotifications([
          { notificationMessage: 'New course added: React Native Fundamentals' },
          { notificationMessage: 'Payment received for JavaScript Advanced course' },
        ]);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <h1>Notifications</h1>
      <NotificationList>
        {notifications.map((notification, index) => (
          <NotificationItem key={index}>{notification.notificationMessage}</NotificationItem>
        ))}
      </NotificationList>
    </Container>
  );
};

export default GetNotifications;