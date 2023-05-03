import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieCatalog from './MovieCatalog';
import { getMovies, deleteMovie } from '../API_Calls/API';
import { Movie } from '../classes';
import UpcomingMovieList from './BrowseMovie/UpcomingMovieList';

const ManageShows = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [deleteMode, setDeleteMode] = useState(false);
    
  const [movies, setMovies] = useState([{
    Title: "The Super Mario Bros. Movie",
    Year: "2023",
    imdbID: "tt6718170",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_SX300.jpg",
    Summary: "While working underground to fix a water main, Brooklyn plumbers Mario (Chris Pratt) and brother Luigi (Charlie Day) are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi. With the assistance of Mushroom Kingdom resident Toad (Keegan-Michael Key) and some training from the strong-willed ruler of the Mushroom Kingdom, Princess Peach (Anya Taylor-Joy), Mario taps into his own power.", 
    Duration: "1hr 32min",
    Rate: "PG",
    Tickets: 3
    
  },{
    Title: "Creed III",
    Year: "2023",
    imdbID: "tt11145118",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BYWY1ZDY4MmQtYjhiYS00N2QwLTk1NzgtOWI2YzUwZThjNDYwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
    Summary: "After dominating the boxing world, Adonis Creed (Michael B. Jordan) has been thriving in both his career and family life. When a childhood friend and former boxing prodigy, Damian (Jonathan Majors), resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. The face off between former friends is more than just a fight. To settle the score, Adonis must put his future on the line to battle Damian – a fighter who has nothing to lose. Creed III is the third installment in the successful franchise and is Michael B. Jordan’s directorial debut.", 
    Duration: "1hr 56min",
    Rate: "PG-13",
    Tickets: 3
  },{
    Title: "Hush! Girls Don't Scream",
    Year: "2013",
    imdbID: "tt2440036",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzA1Nzk2Mzc0Nl5BMl5BanBnXkFtZTgwNDQzNzc2MDE@._V1_SX300.jpg",
    Summary: "Following the latest Ghostface killings, the four survivors leave Woodsboro behind and start a fresh chapter. In Scream VI, Melissa Barrera (“Sam Carpenter”), Jasmin Savoy Brown (“Mindy Meeks-Martin”), Mason Gooding (“Chad Meeks-Martin”), JennaOrtega (“Tara Carpenter”), Hayden Panettiere (“Kirby Reed”) and Courteney Cox (“Gale Weathers”) return to their roles in the franchise alongside Jack Champion, Henry Czerny, Liana Liberato, Dermot Mulroney, Devyn Nekoda, Tony Revolori, Josh Segarra, and Samara Weaving.", 
    Duration: "2hr 2min",
    Rate: "R",
    Tickets: 3
  },{
    Title: "Shazam! Fury of the Gods",
    Year: "2023",
    imdbID: "tt10151854",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzJlM2NmZTItOGQyYS00MmE2LTkwZGUtNDFkNmJmZjRjZjcxXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_SX300.jpg",
    Summary: "From New Line Cinema comes “Shazam! Fury of the Gods,” which continues the story of teenage Billy Batson who, upon reciting the magic word “SHAZAM!,” is transformed into his adult Super Hero alter ego, Shazam.", 
    Duration: "2hr 10min",
    Rate: "PG-13",
    Tickets: 3
  }]);

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
      <div className='row'>
				<UpcomingMovieList
					movies={movies}
				/>
			</div>
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
              //onClick={handleDelete}
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
