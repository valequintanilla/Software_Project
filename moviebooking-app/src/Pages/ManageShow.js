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

  const handleDelete = async () => {
    if (!selectedMovie) return;
    const status = await deleteMovie(selectedMovie);
    console.log('Movie deleted with status:', status);
    setMovies(movies.filter(movie => movie.id !== selectedMovie));
    setSelectedMovie(null);
    setDeleteMode(false);
  };

  return (
    <div>
      <h1>Manage Show</h1>
      {movies.map((movie) => (
        <Link to={`/edit-show/${movie.id}`} key={movie.id} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div
            style={selectedMovie === movie.id && deleteMode ? { backgroundColor: 'red' } : {}}
            onClick={() => deleteMode && setSelectedMovie(movie.id)}
          >
            <h2>{movie.title}</h2>
            <p>Release Date: {movie.release_date}</p>
            <img src={movie.poster_url} alt={movie.title} />
          </div>
        </Link>
      ))}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <button
          style={{ backgroundColor: 'white', color: 'black', padding: '10px' }}
          onClick={() => setDeleteMode(!deleteMode)}
        >
          Remove
        </button>
        {deleteMode && (
          <div>
            <button
              style={{ backgroundColor: 'white', color: 'black', padding: '10px' }}
              onClick={() => setDeleteMode(false)}
            >
              Cancel
            </button>
            <button
              style={{ backgroundColor: 'white', color: 'black', padding: '10px' }}
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        )}
        <div>
          <Link to="/add-show">
            <button style={{ backgroundColor: 'white', color: 'black', padding: '10px', marginRight: '10px' }}>Add</button>
          </Link>
          <Link to="/adminhome">
            <button style={{ backgroundColor: 'white', color: 'black', padding: '10px' }}>Homepage</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ManageShows;
