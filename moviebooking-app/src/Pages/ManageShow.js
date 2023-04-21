import React, { useState } from 'react';

const Movie = ({ movie, onSelect }) => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        color: 'black',
        margin: '10px',
        padding: '10px',
        width: '200px',
        cursor: 'pointer',
      }}
      onClick={() => onSelect(movie)}
    >
      <img src={movie.image} alt={movie.title} style={{ width: '100%', height: '300px' }} />
      <h3>{movie.title}</h3>
    </div>
  );
};

const ManageShow = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
  };

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
      <h1>Manage Show</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} onSelect={handleSelectMovie} />
        ))}
      </div>
      {selectedMovie && (
        <div>
          <h2>Edit {selectedMovie.title}</h2>
          {/* Add form fields to edit movie details such as time and price */}
        </div>
      )}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          padding: '20px',
        }}
      >
        <div style={{ display: 'flex' }}>
          <button
            style={{
              backgroundColor: 'white',
              color: 'black',
              marginRight: '10px',
              padding: '10px',
            }}
            onClick={() => console.log('Add button clicked')}
          >
            Add
          </button>
          <button
            style={{
              backgroundColor: 'white',
              color: 'black',
              padding: '10px',
            }}
            onClick={() => console.log('Remove button clicked')}
          >
            Remove
          </button>
        </div>
        <button
          style={{
            backgroundColor: 'white',
            color: 'black',
            padding: '10px',
          }}
          onClick={() => console.log('Homepage button clicked')}
        >
          Homepage
        </button>
      </div>
    </div>
  );
};

export default ManageShow;
