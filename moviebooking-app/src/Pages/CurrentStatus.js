import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCurrentMovies, ticketsSold } from '../API_Calls/API';
import { Movie } from '../classes';
import MovieList from './BrowseMovie/MovieList';

// const Movie = ({ image, ticketsSold }) => {
//   return (
//     <div style={{ marginRight: '10px' }}>
//       <img src={image} alt="Movie" style={{ width: '200px', height: '300px' }} />
//       <div
//         style={{
//           backgroundColor: 'white',
//           color: 'black',
//           marginTop: '5px',
//           padding: '5px',
//         }}
//       >
//         Tickets sold: {ticketsSold}
//       </div>
//     </div>
//   );
// };

// const CurrentStatus = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const fetchedMovies = getCurrentMovies();
//       for (let movie of fetchedMovies) {
//         movie.ticketsSold = ticketsSold(movie.id);
//       }
//       setMovies(fetchedMovies);
//     };

//     fetchData();
//   }, []);

//   const totalTicketsSold = movies.reduce((sum, movie) => sum + movie.ticketsSold, 0);
  
//   return (
//     <div
//       style={{
//         backgroundColor: 'black',
//         height: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <h1>Current Status</h1>
//       <h2>Total tickets sold: {totalTicketsSold}</h2>
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//         {movies.map((movie) => (
//           <Movie key={movie.id} image={movie.image} ticketsSold={movie.ticketsSold} />
//         ))}
//       </div>
//       <div
//         style={{
//           position: 'absolute',
//           bottom: '10px',
//           left: '10px',
//         }}
//       >
//         <Link
//           to="/adminhome"
//           style={{
//             backgroundColor: 'darkorange',
//             color: 'black',
//             padding: '10px 20px',
//             textDecoration: 'none',
//             borderRadius: '5px',
//           }}
//         >
//           Homepage
//         </Link>
//       </div>
//     </div>
//   );
// };

const CurrentStatus = () => {
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

  const totaltickets = 12;

  //className='image-container d-flex justify-content-start m-3'
  return(
    <>
      <div style={{
            backgroundColor: 'black',
            
          }} className=' d-flex justify-content-start'>
            <button style={{
            marginTop:'40px',
            marginLeft: '20px'
          }}>
              <Link to="/adminhome" style={{
                backgroundColor: 'darkorange',
                color: 'black',
                padding: '10px 20px',
                textDecoration: 'none'
                
              }}>Homepage</Link>
            </button>
      </div>
      <div style={{ 
          background: 'black',
        }} className=' d-flex justify-content-center'>
            <h2 style={{ 
          color: 'white',
        }}>Total Tickets Sold:</h2>
            
      </div>
      <div style={{ 
          background: 'black',
        }} className=' d-flex justify-content-center'>
        <h4 style={{ 
            color: 'white',
          }}>{totaltickets}</h4>
      </div>
      {movies.map((movie, index) => (
        <div style={{ 
          background: 'black',
          color: 'white',
          padding: '25px',
          border: '5px solid black',
          justifyContent: 'center'}} className=' d-flex justify-content-center'>
          <div >
            <h5 style={{color :'darkorange'}}>{movie.Title}</h5>
            <img src={movie.Poster} alt='movie'></img>
            <h6>Tickets:</h6>
            <p>{movie.Tickets}</p>
          </div> 
          <div>
            
          </div> 
          
        </div>
        
      ))}
      
      
    </>
  )

}

export default CurrentStatus;
