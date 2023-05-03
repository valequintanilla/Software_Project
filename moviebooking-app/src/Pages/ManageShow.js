import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieCatalog from './MovieCatalog';
import { getMovies, deleteMovie } from '../API_Calls/API';
import { Movie } from '../classes';

const ManageShows = () => {
  const movie = MovieCatalog();
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [deleteMode, setDeleteMode] = useState(false);

  useEffect(() => {
    getMovies().then((fetchedMovies) => {
      console.log('Fetched movies: ', fetchedMovies);
      setMovies(fetchedMovies);
    })
    .catch((error) => {
      console.error('Error fetching movies:', error);
    });
  }, []);
}
