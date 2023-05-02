import React from 'react';

const MovieList = (props) => {
	const Component = props.Component;

	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
					<div className='top-left'>
						<h2 style={{color :'darkorange'}}>{movie.Title}</h2>
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
						<h6>Release Year: {movie.Year}</h6>
						<h6>Duration: {movie.Duration}</h6>
						<h6 style={{
            color :'darkorange'
            
          }}>{movie.Rate}</h6>
					</div>
					
				</div>
			))}
		</>
	);
};

export default MovieList;