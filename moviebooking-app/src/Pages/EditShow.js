import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditShow = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [showTime, setShowTime] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    // Fetch data from the database and set the state
    // Replace this with a call to your actual database
    const fetchData = async () => {
      const data = {
        id: 1,
        title: 'Movie 1',
        showTime: '19:00',
        price: '10',
      };

      setMovie(data);
      setShowTime(data.showTime);
      setPrice(data.price);
    };

    fetchData();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the show time and price in the database here
    console.log('Updated show time:', showTime);
    console.log('Updated price:', price);
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit Show: {movie.title}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Show Time:
          <input
            type="text"
            value={showTime}
            onChange={(e) => setShowTime(e.target.value)}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditShow;
