import React from 'react';
import { Outlet } from 'react-router-dom';
import Payment from './Payment';

const PaymentWrapper = () => {
  const shoppingCart = JSON.parse(
    localStorage.getItem('react-movie-app-cart')
  );

  return (
    <Payment shoppingCart={shoppingCart}>
      <Outlet />
    </Payment>
  );
};

export default PaymentWrapper;
