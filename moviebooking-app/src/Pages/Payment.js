import React, { useState } from 'react';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement payment processing based on the selected payment method
    console.log('Payment submitted');
  };

  const formStyle = {
    display: 'grid',
    gap: '10px',
    gridTemplateColumns: '100px 300px',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const inputStyle = {
    width: '100%',
  };

  const renderCreditDebitForm = () => (
    <div style={formStyle}>
      <label htmlFor="cardNumber">Card Number:</label>
      <input id="cardNumber" type="text" style={inputStyle} />
      <label htmlFor="expirationDate">Expiration Date:</label>
      <input id="expirationDate" type="text" style={inputStyle} />
      <label htmlFor="cvc">CVC:</label>
      <input id="cvc" type="text" style={inputStyle} />
    </div>
  );

  const renderPayPalForm = () => (
    <div style={formStyle}>
      <label htmlFor="paypalEmail">PayPal Email:</label>
      <input id="paypalEmail" type="text" style={inputStyle} />
      <label htmlFor="paypalPassword">PayPal Password:</label>
      <input id="paypalPassword" type="password" style={inputStyle} />
    </div>
  );

  return (
    <div
      style={{
        backgroundColor: 'red',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>Payment</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <button
            style={{
              backgroundColor: 'white',
              color: 'black',
              marginRight: '10px',
            }}
            onClick={() => setPaymentMethod('credit')}
          >
            Credit
          </button>
          <button
            style={{
              backgroundColor: 'white',
              color: 'black',
              marginRight: '10px',
            }}
            onClick={() => setPaymentMethod('debit')}
          >
            Debit
          </button>
          <button
            style={{
              backgroundColor: 'white',
              color: 'black',
            }}
            onClick={() => setPaymentMethod('paypal')}
          >
            PayPal
          </button>
        </div>

        {paymentMethod === 'credit' || paymentMethod === 'debit' ? (
      renderCreditDebitForm()
    ) : paymentMethod === 'paypal' ? (
      renderPayPalForm()
    ) : null}

        <div>
          <button
            style={{
              backgroundColor: 'white',
              color: 'black',
              marginRight: '10px',
              padding: '10px',
            }}
            onClick={() => console.log('Cancel button clicked')}
          >
            Cancel
          </button>
          <button
            style={{
              backgroundColor: 'white',
              color: 'black',
              padding: '10px',
            }}
            type="submit"
          >
            Confirm Purchase
          </button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
