import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Ticket } from '../classes';
import { bookTicket } from '../API_Calls/API';

const Payment = ({ shoppingCart, incrementMovieTickets }) => {
  const navigate = useNavigate();

  const [movieDetails, setMovieDetails] = useState(
    shoppingCart.map((movie) => ({
      movieId: movie.imdbID,
      theater: '',
      time: '',
      seat: '',
      owner: '',
    }))
  );

  const [paymentMethod, setPaymentMethod] = useState('');

  const updateMovieDetails = (index, key, value) => {
    const updatedDetails = [...movieDetails];
    updatedDetails[index][key] = value;
    setMovieDetails(updatedDetails);
  };

  const handleConfirmPurchase = async () => {
    if (
      !movieDetails.every(
        (movie) =>
          movie.theater && movie.time && movie.seat && movie.owner
      )
    ) {
      alert('Please fill in all required fields for each movie.');

      return;
    }

    for (const movie of movieDetails) {
      const ticket = new Ticket(
        movie.movieId,
        movie.theater,
        movie.time,
        movie.seat,
        movie.owner
      );

      try {
        const status = await bookTicket(ticket);
        console.log(`Ticket booking status: ${status}`);
        incrementMovieTickets(movie.movieId);
      } catch (err) {
        console.error('Error booking ticket:', err);
      }
    }

    // Redirect the user to the UserHome page after successful purchase.
    navigate('/tickets', {
      state: {
        movieDetails: movieDetails,
      },
    });
  };

  return (
    <div>
      <h1>Payment</h1>
      {shoppingCart.map((movie, index) => (
        <div key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <div>
            <label htmlFor="paymentMethod">Payment Method:</label>
            
              <option value="creditCard">Credit Card</option>
              <option value="debitCard">Debit Card</option>
              <option value="paypal">PayPal</option>
            
          </div>
        </div>
      ))}
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
      {shoppingCart.map((movie, index) => (
        <div key={movie.imdbID}>
          <label htmlFor={`theater-${index}`}>Theater Location:</label>
          <select
            id={`theater-${index}`}
            value={movieDetails[index].theater}
            onChange={(e) =>
              updateMovieDetails(index, 'theater', e.target.value)
            }
          >
            <option value="">Select a theater</option>
            <option value="1">Campus Theater</option>
            <option value="2">South Theater</option>
            <option value="3">Northwest Theater</option>
            <option value="4">Southwest Theater</option>
          </select>
          <label htmlFor={`time-${index}`}>Time:</label>
          <input
            type="time"
            id={`time-${index}`}
            value={movieDetails[index].time}
            onChange={(e) => updateMovieDetails(index, 'time', e.target.value)}
          />
          <label htmlFor={`seat-${index}`}>Seat:</label>
          <input
            type="number"
            id={`seat-${index}`}
            min="1"
            max="30"
            value={movieDetails[index].seat}
            onChange={(e) => updateMovieDetails(index, 'seat', e.target.value)}
          />
          <label htmlFor={`owner-${index}`}>Name:</label>
          <input
            type="text"
            id={`owner-${index}`}
            value={movieDetails[index].owner}
            onChange={(e) => updateMovieDetails(index, 'owner', e.target.value)}
          />
        </div>
      ))}
      <div>
        <button onClick={() => navigate('/Userhome')}>Cancel</button>
        <button onClick={handleConfirmPurchase}>Confirm Purchase</button>
      </div>
    </div>
  );
};

export default Payment;

