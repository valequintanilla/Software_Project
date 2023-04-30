import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './MovieList';
import MovieListHeading from './MovieListHeading';
import SearchBox from './SearchBox';
import AddShoppingCart from '../BrowseMovie/AddShoppingCart';
import RemoveShoppingCart from '../BrowseMovie/RemoveShoppingCart';
import {Link} from 'react-router-dom';
const MovieCatalog = () => {
	const [movies, setMovies] = useState([]);
	const [shoppingCart, setCart] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
    //api url we can change to diff 
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();
        //sets movie to search value but we can change this to set movies to what ever we want or have on the database.
		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

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
			<div className='row'>
				<MovieList
					movies={movies}
					handleShoppingCartClick={addMovieCart}
					CartComponent={AddShoppingCart}
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