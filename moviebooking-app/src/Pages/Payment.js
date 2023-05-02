import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Ticket } from '../classes';
import { bookTicket } from '../API_Calls/API';

const Payment = ({ shoppingCart }) => {
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
      {shoppingCart.map((movie, index) => (
        <div key={movie.imdbID}>
          <h3>{movie.Title}</h3>
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
        <button onClick={() => navigate('/UserHome')}>Cancel</button>
        <button onClick={handleConfirmPurchase}>Confirm Purchase</button>
      </div>
    </div>
  );
};

export default Payment;
