import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Dashboard from './pages/Dashboard';
import CommissionDetails from './components/CommissionDetails';
import UnpaidDetails from './components/UnpaidDetails';
import PaidDetails from './components/PaidDetails';
import PendingPaymentStatus from './components/PendingPaymentStatus';
import TotalPayment from './components/TotalPayment';
import SendNotification from './components/SendNotification';
import GetNotifications from './components/GetNotifications';

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Sidebar = styled.nav`
  width: 250px;
  background-color: #333;
  color: white;
  padding: 20px;
`;

const NavLink = styled(Link)`
  display: block;
  color: white;
  text-decoration: none;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #555;
  }
`;

const Content = styled.main`
  flex: 1;
  padding: 20px;
`;

const Layout = ({ children }) => (
  <AppContainer>
    <Sidebar>
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/commission/:userId">Commission</NavLink>
      <NavLink to="/commission/getAllUnpaid">Unpaid</NavLink>
      <NavLink to="/history/:userId">Paid</NavLink>
      <NavLink to="/status-of-pendingpayement/:userId">Pending</NavLink>
      <NavLink to="/payments/calculateTotalearnings/:userId">Total Payment</NavLink>
      <NavLink to="/sendNotificationremainder">Send Notification</NavLink>
      <NavLink to="/getNotifications">Notifications</NavLink>
    </Sidebar>
    <Content>{children}</Content>
  </AppContainer>
);

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/commission/:userId" element={<CommissionDetails />} />
        <Route path="/commission/getAllUnpaid" element={<UnpaidDetails />} />
        <Route path="/history/:userId" element={<PaidDetails />} />
        <Route path="/status-of-pendingpayement/:userId" element={<PendingPaymentStatus />} />
        <Route path="/payments/calculateTotalearnings/:userId" element={<TotalPayment />} />
        <Route path="/sendNotificationremainder" element={<SendNotification />} />
        <Route path="/getNotifications" element={<GetNotifications />} />
      </Routes>
    </Layout>
  );
};

export default App;