
import React, { useState, useEffect } from 'react';
import { getMovies } from '../API_Calls/API';
import { Movie } from '../classes';

const ManageShows = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then((fetchedMovies) => {
      setMovies(fetchedMovies);
    });
  }, []);

  return (
    <div>
      <h1>Manage Show</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>Release Date: {movie.release_date}</p>
          <img src={movie.poster_url} alt={movie.title} />
        </div>
      ))}
    </div>
  );
};

export default ManageShows;

