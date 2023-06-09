import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UpcomingMovieList from './UpcomingMovieList';
import MovieListHeading from './MovieListHeading';
import SearchBox from './SearchBox';
import SelectedMovie from './SelectMovie';
import {Link} from 'react-router-dom';
import Popup from 'reactjs-popup';
//Catalog of the upcoming movies 
const UpcomingMovie = () => {
	const [movies, setMovies] = useState([{

		Title: "Blue Beetle",
		Year: "2023",
		imdbID: "tt9362930",
		Type: "movie",
		Poster: "https://m.media-amazon.com/images/M/MV5BMjY4ODA0ZWMtNGY2OC00NjUxLThiOGQtNjAyZjdhNjMyZWY4XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
        Summary: "Jaime Reyes suddenly finds himself in possession of an ancient relic of alien biotechnology called the Scarab. When the Scarab chooses Jaime to be its symbiotic host, he's bestowed with an incredible suit of armor that's capable of extraordinary and unpredictable powers, forever changing his destiny as he becomes the superhero Blue Beetle.", 
		Duration: "1hr 57min",
		Rate: "PG-13",
		Tickets: 0
		
	},{
		Title: "Evil Dead Rise",
		Year: "2023",
		imdbID: "tt13345606",
		Type: "movie",
		Poster: "https://m.media-amazon.com/images/M/MV5BMmZiN2VmMjktZDE5OC00ZWRmLWFlMmEtYWViMTY4NjM3ZmNkXkEyXkFqcGdeQXVyMTI2MTc2ODM3._V1_SX300.jpg",
		Summary: "A reunion between two estranged sisters gets cut short by the rise of flesh-possessing demons, thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable.", 
		Duration: "1hr 36min",
		Rate: "R",
		Tickets: 0
	},{
		Title: "Fast X",
		Year: "2023",
		imdbID: "tt5433140",
		Type: "movie",
		Poster: "https://m.media-amazon.com/images/M/MV5BNzZmOTU1ZTEtYzVhNi00NzQxLWI5ZjAtNWNhNjEwY2E3YmZjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
		Summary: "After reuniting with Gwen Stacy, Brooklyn's full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. However, when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders. He must soon redefine what it means to be a hero so he can save the people he loves most.", 
		Duration: "2hr",
		Rate: "PG-13",
		Tickets: 0
	},{
		Title: "Spider-Man: Across the Spider-Verse",
		Year: "2023",
		imdbID: "tt9362722",
		Type: "movie",
		Poster: "https://m.media-amazon.com/images/M/MV5BNjk5YTU0OTAtMTM1NC00Zjc1LWEzZjAtOWJkYzcxOGRhNWNhXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg",
		Summary: "From New Line Cinema comes “Shazam! Fury of the Gods,” which continues the story of teenage Billy Batson who, upon reciting the magic word “SHAZAM!,” is transformed into his adult Super Hero alter ego, Shazam.", 
		Duration: "2hr 10min",
		Rate: "PG",
		Tickets: 0
	}]);
	const [shoppingCart, setCart] = useState([]);
	const [searchValue, setSearchValue] = useState('');


    useEffect(() => {
		const movieCart = JSON.parse(
			localStorage.getItem('react-movie-app-cart')
		);

		if (movieCart) {
			setCart(movieCart);
		}
	}, []);
	const showMovieInfo = (movie) => {
		
	}

	
    return(
        <div className='container-fluid movie-app'
        style={{
            background: 'black',
	        color: 'white',
            position: 'relative',
	        transition: 'transform 0.2s',
            fontsize: '20px',
            padding: '20px',
            textalign: 'center',
            
          }}>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Upcoming Movies:' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
				
			</div>
			<button><Link to = '/Userhome' >Go back to home</Link></button>
			<div className='row'>
				<UpcomingMovieList
					movies={movies}
					handleClick={showMovieInfo}
					Component={SelectedMovie}
				/>
			</div>
			

		</div>
    );
}

export default UpcomingMovie ;