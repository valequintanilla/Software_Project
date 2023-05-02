import React from 'react';

const MovieList = (props) => {
	const Component = props.Component;

	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
					<div className='top-left'><h2>{movie.Title}</h2>
						<img src={movie.Poster} alt='movie'></img>
						<div
							onClick={() => props.handleClick(movie)}
							className='d-flex align-items-center justify-content-left'
						>
							<Component />
							
						</div>
					</div>
					<div>
						<h6>Movie Summary:</h6>
						<p>{movie.Summary}</p>
						
					</div>
					
				</div>
			))}
		</>
	);
};

export default MovieList;