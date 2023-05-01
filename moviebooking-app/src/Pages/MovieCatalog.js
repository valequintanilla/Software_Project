import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './BrowseMovie/MovieList';
import MovieListHeading from './BrowseMovie/MovieListHeading';
import SearchBox from './BrowseMovie/SearchBox';
import AddShoppingCart from './BrowseMovie/AddShoppingCart';
import RemoveShoppingCart from './BrowseMovie/RemoveShoppingCart';
import SelectedMovie from './BrowseMovie/SelectMovie';
import {Link} from 'react-router-dom';
import {getMovies} from '../API_Calls/API.js'
const MovieCatalog = () => {
	const [movies, setMovies] = useState([//{
	// 	Title: "Star Wars: Episode IX - The Rise of Skywalker",
	// 	Year: "2019",
	// 	imdbID: "tt2527338",
	// 	Type: "movie",
	// 	Poster: "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg"
	// },{
	// 	Title: "Avengers: Endgame",
	// 	Year: "2019",
	// 	imdbID: "tt4154796",
	// 	Type: "movie",
	// 	Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
	// },{
	// 	Title: "Cruella",
	// 	Year: "2021",
	// 	imdbID: "tt3228774",
	// 	Type: "movie",
	// 	Poster: "https://m.media-amazon.com/images/M/MV5BOWI5YTUxOWEtZmRiZS00ZmQxLWE2NzctYTRiODA2NzE1ZjczXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
	// },{
	// 	Title: "The Super Mario Bros. Movie",
	// 	Year: "2023",
	// 	imdbID: "tt6718170",
	// 	Type: "movie",
	// 	Poster: "https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_SX300.jpg"
	// }
	]);
	const [shoppingCart, setCart] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	useEffect(() => {
		getMovies().then((fetchMovies) =>{
			setMovies(fetchMovies);
		});
	},[]);
	


	// const getMovieRequest = async (searchValue) => {
    // //api url we can change to diff 
	// 	const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

	// 	const response = await fetch(url);
	// 	const responseJson = await response.json();
    //     //sets movie to search value but we can change this to set movies to what ever we want or have on the database.
	// 	if (responseJson.Search) {
	// 		setMovies(responseJson.Search);
	// 	}
	// };

	// useEffect(() => {
	// 	getCurrentCatalog(searchValue);
	// }, [searchValue]);
	// useEffect(() => {
	// 	getMovies();
	// },[movies]);

    //store in local storage
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

	const addMovieCart= (movie) => {
		const newCartList = [...shoppingCart, movie];
		setCart(newCartList);
		saveToLocalStorage(newCartList);
	};

	const removeMovieCart = (movie) => {
		const newCartList = shoppingCart.filter(
			(shoppingCart) => shoppingCart.imdbID !== movie.imdbID
		);

		setCart(newCartList);
		saveToLocalStorage(newCartList);
	};
	const showMovieInfo = (movie) => {

	}
	return (
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
				<MovieListHeading heading='Browse Movies:' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
				
			</div>
			<button><Link to = '/Userhome' >Go back to home</Link></button>
			<div className='row'>
				<MovieList
					movies={movies}
					handleShoppingCartClick={addMovieCart}
					CartComponent={AddShoppingCart}
					movieSelected = {SelectedMovie}
				/>
			</div>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Shopping Cart:' />
			</div>
			<div className='row'>
				<MovieList
					movies={shoppingCart}
					handleShoppingCartClick={removeMovieCart}
					CartComponent={RemoveShoppingCart}
				/>
                <button><Link to = '/payment'>Checkout</Link></button>
                    
                
			</div>
		</div>
	);
};

export default MovieCatalog;