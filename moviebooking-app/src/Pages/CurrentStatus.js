import React from 'react';

const Movie = ({ image, ticketsSold }) => {
  return (
    <div style={{ marginRight: '10px' }}>
      <img src={image} alt="Movie" style={{ width: '200px', height: '300px' }} />
      <div
        style={{
          backgroundColor: 'white',
          color: 'black',
          marginTop: '5px',
          padding: '5px',
        }}
      >
        Tickets sold: {ticketsSold}
      </div>
    </div>
  );
};

const CurrentStatus = ({ movies = [] }) => {
  const totalTicketsSold = movies.reduce((sum, movie) => sum + movie.ticketsSold, 0);

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
      <h1>Current Status</h1>
      <h2>Total tickets sold: {totalTicketsSold}</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {movies.map((movie) => (
          <Movie key={movie.id} image={movie.image} ticketsSold={movie.ticketsSold} />
        ))}
      </div>
    </div>
  );
};

export default CurrentStatus;

