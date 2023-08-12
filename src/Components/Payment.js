import React from 'react';
import '../Styles/Payment.style.css';
import Progressbar from './Progressbar';
import Paymentform from './Paymentform';

const Payment = () => {
  return (
    <div className="card">
      <Progressbar></Progressbar>
      <Paymentform></Paymentform>
    </div>
  )
}

export default Payment;
