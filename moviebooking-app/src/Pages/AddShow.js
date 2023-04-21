import React, { useState } from 'react';

const AddShow = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [runtime, setRuntime] = useState('');
  const [cast, setCast] = useState('');
  const [synopsis, setSynopsis] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the movie object
    const newMovie = {
      title,
      price,
      runtime,
      cast,
      synopsis,
    };

    // Replace the URL with the actual URL of your backend service to add the movie to the database
    try {
      const response = await fetch('/api/movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMovie),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log('Movie added successfully:', newMovie);
    } catch (error) {
      console.error('Error adding movie:', error);
    }
  };

  const formStyle = {
    display: 'grid',
    gap: '10px',
    gridTemplateColumns: '100px 300px',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const inputStyle = {
    width: '100%',
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
      <h1>Add Show</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={inputStyle}
        />
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={inputStyle}
        />
        <label htmlFor="runtime">Runtime:</label>
        <input
          id="runtime"
          type="text"
          value={runtime}
          onChange={(e) => setRuntime(e.target.value)}
          style={inputStyle}
        />
        <label htmlFor="cast">Cast:</label>
        <input
          id="cast"
          type="text"
          value={cast}
          onChange={(e) => setCast(e.target.value)}
          style={inputStyle}
        />
        <label htmlFor="synopsis">Synopsis:</label>
        <textarea
          id="synopsis"
          rows="4"
          value={synopsis}
          onChange={(e) => setSynopsis(e.target.value)}
          style={inputStyle}
        />
        <div />
        <div>
          <button
            style={{
              backgroundColor: 'white',
              color: 'black',
              marginRight: '10px',
              padding: '10px',
            }}
            onClick={() => console.log('Cancel button clicked')}
          >
            Cancel
          </button>
          <button
            style={{
              backgroundColor: 'white',
              color: 'black',
              padding: '10px',
            }}
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddShow;
