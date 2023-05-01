import axios from "axios";
import { Movie, PaymentMethod, Ticket, User} from "../classes";


const authourizeUser = (email) => {
    const password = ' '
    axios.get('http://localhost:3000/login', {email})
    .then((res) => {
        password = res.data.password
        return password
    }).catch((err) => {
        console.log(err)
    })
}

const authourizeAdmin = (email) => {
    const password = ' '
    axios.get('http://localhost:3000/loginAdmin', {email})
    .then((res) => {
        password = res.password
        return password
    }).catch((err) => {
        console.log(err)
    })
}

const registerUser = ({user, password}) => {
    const status = ''
    axios.post('http://localhost:3000/login', {user, password}) //this might have to be changed to /register (look at App.js)
    .then((res) => {
        status = res.status
        return status
    }).catch((err) => {
        console.log(err)
    })
}

//title, year, image, id 
const getMovies = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get('http://localhost:3000/browse'); //the page to browse movies and current movies is the same page(just one page) 
        const fetchedMovies = response.data.map((movieData) => {
          const movie = new Movie();
          movie.title = movieData.title;
          movie.release_date = movieData.year;
          movie.poster_url = movieData.image;
          movie.id = movieData.id;
          return movie;
        });
        resolve(fetchedMovies);
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  };

//get current movies
const getCurrentMovies = () =>{
    const movies = new Movie()
    movies = []

    axios.get('http://localhost:3000/movieCurrent') //same as browse?
    .then((res) => {
        movies = res.current
        return movies
    }).catch((err) => {
        console.log(err)
    })

}

//get upcoming movies 
const getUpcomingMovies = () =>{
    const movies = new Movie()
    movies = []

    axios.get('http://localhost:3000/movieUpcoming')
    .then((res) => {
        movies = res.upcoming
        return movies
    }).catch((err) => {
        console.log(err)
    })
}


const bookTicket = (ticket) =>{
    const status = ''
    axios.post('http://localhost:3000/book', {ticket}) //add route to app.js
    .then((res) =>{
        status = res.status
        return status
    }).catch((err) => {
        console.log(err)
    })
}

const purchaseTicket = (payment) =>{
    const status = ''
 
    axios.post('http://localhost:3000/pay',{payment}) //add route to routes in app.js
    .then((res) => {
        status = res.data.status
        return status
    }).catch((err) => {
        console.log(err)
    })
}

const writeReview = (review) =>{
    const status = ''
 
    axios.post('http://localhost:3000/writeReview',{review}) //add route to the routes in app.js
    .then((res) => {
        status = res.data.status
        return status
    }).catch((err) => {
        console.log(err)
    })
}

//view reviews
const viewReviews = () =>{
    const review = new review()
    review = []

    axios.get('http://localhost:3000/reviews') //add route to the routes in app.js
    .then((res) => {
        review = res.reviews
        return review
    }).catch((err) => {
        console.log(err)
    })

}


const movieInfo =(id) =>{
    const movie = new Movie

    axios.get('http://localhost:3000/movieInfo') //add route to the routes in app.js
    .then((res) => {
        movie = res.movie
        return movie
    }).catch((err) => {
        console.log(err)
    })
}

//get tickets sold
const ticketsSold = (id) =>{
    const num_sold = ''

    axios.get('http://localhost:3000/status', {id}) //add route to the routes in app.js
    .then((res) => {
        num_sold = res.data.tickets_sold
        return num_sold
    }).catch((err) => {
        console.log(err)
    })

}

//get tickets sold
const getTicketsByEmail = (email) =>{
    const tickets = new Ticket()
    tickets = []

    axios.get('http://localhost:3000/ticketsEmail', {email}) //add route to the routes in app.js
    .then((res) => {
        tickets = res.data.tickets
        return tickets
    }).catch((err) => {
        console.log(err)
    })

}

//add multiple tickets
const addTickets = (tickets) =>{
    const status = ''
 
    axios.post('http://localhost:3000/addTickets',{tickets}) //add route to the routes in app.js
    .then((res) => {
        status = res.data.status
        return status
    }).catch((err) => {
        console.log(err)
    })
}

const addMovie = (movie) =>{
    const status = ''
 
    axios.post('http://localhost:3000/addMovie',{movie}) //add route to the routes in app.js
    .then((res) => {
        status = res.data.status
        return status
    }).catch((err) => {
        console.log(err)
    })
}

const deleteMovie = (movie_id) =>{
    const status = ''

    axios.delete('http://localhost:3000/deleteMovie', {data: {id: movie_id} }) //add route to the routes in app.js
    .then((res) => {
        status = res.status
    })
}

export {authourizeUser , registerUser, getMovies, bookTicket, purchaseTicket, writeReview, viewReviews, ticketsSold, addMovie, deleteMovie, getCurrentMovies,authourizeAdmin} ;
