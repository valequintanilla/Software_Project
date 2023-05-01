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
    axios.post('http://localhost:3000/login', {user, password})
    .then((res) => {
        status = res.status
        return status
    }).catch((err) => {
        console.log(err)
    })
}

//title, year, image, id 
const getMovies = () =>{
    const movies = new Movie()

    axios.get('http://localhost:3000/browse')
    .then((res) => {
        movies = res.movies
        return movies
    }).catch((err) => {
        console.log(err)
    })

}

//get current movies
const getCurrentMovies = () =>{
    const movies = new Movie()
    movies = []

    axios.get('http://localhost:3000/movieCurrent')
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
    axios.post('http://localhost:3000/book', {ticket})
    .then((res) =>{
        status = res.status
        return status
    }).catch((err) => {
        console.log(err)
    })
}

const purchaseTicket = (payment) =>{
    const status = ''
 
    axios.post('http://localhost:3000/pay',{payment})
    .then((res) => {
        status = res.data.status
        return status
    }).catch((err) => {
        console.log(err)
    })
}

const writeReview = (review) =>{
    const status = ''
 
    axios.post('http://localhost:3000/writeReview',{review})
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

    axios.get('http://localhost:3000/reviews')
    .then((res) => {
        review = res.reviews
        return review
    }).catch((err) => {
        console.log(err)
    })

}


const movieInfo =(id) =>{
    const movie = new Movie

    axios.get('http://localhost:3000/movieInfo')
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

    axios.get('http://localhost:3000/status', {id})
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

    axios.get('http://localhost:3000/ticketsEmail', {email})
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
 
    axios.post('http://localhost:3000/addTickets',{tickets})
    .then((res) => {
        status = res.data.status
        return status
    }).catch((err) => {
        console.log(err)
    })
}

const addMovie = (movie) =>{
    const status = ''
 
    axios.post('http://localhost:3000/addMovie',{movie})
    .then((res) => {
        status = res.data.status
        return status
    }).catch((err) => {
        console.log(err)
    })
}

const deleteMovie = (movie_id) =>{
    const status = ''

    axios.delete('http://localhost:3000/deleteMovie', {data: {id: movie_id} })
    .then((res) => {
        status = res.status
    })
}

export {authourizeUser , registerUser, getMovies, bookTicket, purchaseTicket, writeReview, viewReviews, ticketsSold, addMovie, deleteMovie, } ;
