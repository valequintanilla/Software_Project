import React from 'react';
import QRCode from 'react-qr-code';
import './TicketPage.css';

const TicketPage = ({ movieName, movieLocation, timeOfShowing, seatNumber, onHomepageClick }) => {
  const ticketData = {
    movieName: movieName,
    movieLocation: movieLocation,
    timeOfShowing: timeOfShowing,
    seatNumber: seatNumber,
  };

  const ticketString = JSON.stringify(ticketData);

  // Convert timeOfShowing string to Date object and format it
  const showingDate = new Date(timeOfShowing);
  const formattedDate = showingDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedTime = showingDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="ticket-page">
      <h1>Thank You!</h1>
      <div className="ticket">
        <div className="ticket-details">
          <p>Movie Name: {movieName}</p>
          <p>Movie Location: {movieLocation}</p>
          <p>Date of Showing: {formattedDate}</p>
          <p>Time of Showing: {formattedTime}</p>
          <p>Seat Number: {seatNumber}</p>
        </div>
        <div className="barcode">
          <QRCode value={ticketString} />
        </div>
      </div>
      <button className="homepage-button" onClick={onHomepageClick}>
        Homepage
      </button>
    </div>
  );
};

export default TicketPage;
