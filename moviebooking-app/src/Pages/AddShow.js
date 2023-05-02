import React, { useState } from 'react';
import { addMovie } from '../API_Calls/API';
import { Movie } from '../classes';
import { Link } from 'react-router-dom';

const AddShow = () => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [release_date, setReleaseDate] = useState('');
  const [poster_url, setPosterUrl] = useState('');
  const [summary, setSummary] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Convert the release_date input to the desired format
    const formattedReleaseDate = new Date(release_date).toISOString();
  
    // Create a new instance of the Movie class with the formatted release date
    const newMovie = new Movie(id, title, formattedReleaseDate, poster_url, summary);
  
    try {
      const status = await addMovie(newMovie);
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
        backgroundColor: 'black',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'darkorange'
      }}
    >
      <h1>Add Show</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label htmlFor="id">ID:</label>
        <input
          id="id"
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          style={inputStyle}
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={inputStyle}
        />
        <label htmlFor="release_date">Release Date:</label>
        <input
          id="release_date"
          type="date"
          value={release_date}
          onChange={(e) => setReleaseDate(e.target.value)}
          style={inputStyle}
        />
        <label htmlFor="poster_url">Poster URL:</label>
        <input
          id="poster_url"
          type="text"
          value={poster_url}
          onChange={(e) => setPosterUrl(e.target.value)}
          style={inputStyle}
        />
        <label htmlFor="summary">Summary:</label>
        <textarea
          id="summary"
          rows="4"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          style={inputStyle}
        />
        <div />
        <div>
        <Link to="/manage-show">
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
          </Link>
          <button
            style={{
              backgroundColor: 'darkorange',
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
