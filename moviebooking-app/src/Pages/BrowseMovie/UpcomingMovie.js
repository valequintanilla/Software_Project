import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './MovieList';
import MovieListHeading from './MovieListHeading';
import SearchBox from './SearchBox';
import SelectedMovie from './SelectMovie';
import {Link} from 'react-router-dom';
//Catalog of the upcoming movies 
const UpcomingMovie = () =>{
    const [movies, setMovies] = useState([{
		Title: "Star Wars: Episode IX - The Rise of Skywalker",
		Year: "2019",
		imdbID: "tt2527338",
		Type: "movie",
		Poster: "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg"
	},{
		Title: "Avengers: Endgame",
		Year: "2019",
		imdbID: "tt4154796",
		Type: "movie",
		Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
	},{
		Title: "Cruella",
		Year: "2021",
		imdbID: "tt3228774",
		Type: "movie",
		Poster: "https://m.media-amazon.com/images/M/MV5BOWI5YTUxOWEtZmRiZS00ZmQxLWE2NzctYTRiODA2NzE1ZjczXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
	},{
		Title: "The Super Mario Bros. Movie",
		Year: "2023",
		imdbID: "tt6718170",
		Type: "movie",
		Poster: "https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_SX300.jpg"
	}
	]);
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

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-cart', JSON.stringify(items));
	};

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
				<MovieList
					movies={movies}
					handleShoppingCartClick={showMovieInfo}
					CartComponent={SelectedMovie}
					
				/>
			</div>
			

		</div>
    );
}

export default UpcomingMovie ;