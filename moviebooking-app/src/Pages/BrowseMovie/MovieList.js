import React from 'react';

const MovieList = (props) => {
	const Component = props.Component;
	
	return (
		<>
			{props.movies.map((movie) => (
				<div key = {movie.id}>
					<h2>{movie.title}</h2>
					<div className='image-container d-flex justify-content-start m-3'>
					<img src={movie.poster_url} alt={movie.title}></img>
						<div
							onClick={() => props.handleClick(movie)}
							className='overlay d-flex align-items-center justify-content-center'
						>
							<Component />
						</div>
					
					</div>
				</div>
				
			))}
		</>
	);
};

export default MovieList;