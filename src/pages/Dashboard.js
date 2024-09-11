import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 30px;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const Card = styled(Link)`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  color: #333;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const CardTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const Dashboard = () => {
  return (
    <Container>
      <Title>Payment Management Dashboard</Title>
      <CardContainer>
        <Card to="/commission/:userId">
          <CardTitle>Commission Details</CardTitle>
          <p>View your commission details</p>
        </Card>
        <Card to="/commission/getAllUnpaid">
          <CardTitle>Unpaid Details</CardTitle>
          <p>View all unpaid commissions</p>
        </Card>
        <Card to="/history/:userId">
          <CardTitle>Paid Details</CardTitle>
          <p>View your payment history</p>
        </Card>
        <Card to="/status-of-pendingpayement/:userId">
          <CardTitle>Pending Payment Status</CardTitle>
          <p>Check status of pending payments</p>
        </Card>
        <Card to="/payments/calculateTotalearnings/:userId">
          <CardTitle>Total Earnings</CardTitle>
          <p>View your total earnings</p>
        </Card>
        <Card to="/sendNotificationremainder">
          <CardTitle>Send Notification</CardTitle>
          <p>Send payment reminders</p>
        </Card>
        <Card to="/getNotifications">
          <CardTitle>Notifications</CardTitle>
          <p>View all notifications</p>
        </Card>
      </CardContainer>
    </Container>
  );
};

export default Dashboard;