import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCurrentMovies, ticketsSold } from '../API_Calls/API';

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

const CurrentStatus = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedMovies = getCurrentMovies();
      for (let movie of fetchedMovies) {
        movie.ticketsSold = ticketsSold(movie.id);
      }
      setMovies(fetchedMovies);
    };

    fetchData();
  }, []);

  const totalTicketsSold = movies.reduce((sum, movie) => sum + movie.ticketsSold, 0);
  
  return (
    <div
      style={{
        backgroundColor: 'black',
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
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '10px',
        }}
      >
        <Link
          to="/adminhome"
          style={{
            backgroundColor: 'darkorange',
            color: 'black',
            padding: '10px 20px',
            textDecoration: 'none',
            borderRadius: '5px',
          }}
        >
          Homepage
        </Link>
      </div>
    </div>
  );
};

export default CurrentStatus;
