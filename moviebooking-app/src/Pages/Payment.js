import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Ticket } from '../classes';
import { bookTicket } from '../API_Calls/API';

const Payment = ({ shoppingCart }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [selectedTheater, setSelectedTheater] = useState('');
  const [time, setTime] = useState('');
  const [seat, setSeat] = useState('');
  const [owner, setOwner] = useState('');

  const navigate = useNavigate();

  const handleConfirmPurchase = async () => {
    if (!selectedTheater || !seat || !time || !owner) {
      alert("Please fill in all required fields.");
      return;
    }

    for (const movie of shoppingCart) {
      const ticket = new Ticket(movie.id, selectedTheater, time, seat, owner);

      try {
        const status = await bookTicket(ticket);
        console.log(`Ticket booking status: ${status}`);
      } catch (err) {
        console.error('Error booking ticket:', err);
      }
    }

    // Redirect the user to the UserHome page after successful purchase.
    navigate('/UserHome');
  };

  return (
    <div>
      <h1>Payment</h1>
      <div>
        <button onClick={() => setPaymentMethod('credit')}>Credit</button>
        <button onClick={() => setPaymentMethod('debit')}>Debit</button>
        <button onClick={() => setPaymentMethod('paypal')}>PayPal</button>
      </div>
      {paymentMethod === 'credit' && (
        <div>
          <h2>Credit Card Information</h2>
          <input type="text" placeholder="Card Number" />
          <input type="text" placeholder="Expiration Date" />
          <input type="text" placeholder="CVV" />
        </div>
      )}
      {paymentMethod === 'debit' && (
        <div>
          <h2>Debit Card Information</h2>
          <input type="text" placeholder="Card Number" />
          <input type="text" placeholder="Expiration Date" />
          <input type="text" placeholder="CVV" />
        </div>
      )}
      {paymentMethod === 'paypal' && (
        <div>
          <h2>PayPal Information</h2>
          <input type="text" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
      )}
      <div>
        <label htmlFor="theater">Theater Location:</label>
        <select
          id="theater"
          value={selectedTheater}
          onChange={(e) => setSelectedTheater(e.target.value)}
        >
          <option value="">Select a theater</option>
          <option value="1">Campus Theater</option>
          <option value="2">South Theater</option>
          <option value="3">Northwest Theater</option>
          <option value="4">Southwest Theater</option>
        </select>
      </div>
      <div>
        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="seat">Seat:</label>
        <input
          type="number"
          id="seat"
          min="1"
          max="30"
          value={seat}
          onChange={(e) => setSeat(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="owner">Name:</label>
        <input
          type="text"
          id="owner"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => navigate('/UserHome')}>Cancel</button>
        <button onClick={handleConfirmPurchase}>Confirm Purchase</button>
      </div>
    </div>
  );
};

export default Payment;

