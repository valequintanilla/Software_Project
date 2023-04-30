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

const registerUser = ({user}) => {
    const status = ''
    axios.post('http://localhost:3000/login', {user})
    .then((res) => {
        status = res.data.status
        return status
    }).catch((err) => {
        console.log(err)
    })
}

//title, year, image, id 
const getMovies = () =>{
    const movie = new Movie()

    axios.get('http://localhost:3000/browse')
    .then((res) => {
        movie.title = res.data.title
        movie.release_date = res.data.year
        movie.poster_url = res.data.image
        movie.id = res.data.id
        return movie
    }).catch((err) => {
        console.log(err)
    })

}

const bookTicket = (ticket) =>{
    const status = ''
    axios.post('http://localhost:3000/book', {ticket})
    .then((res) =>{
        status = res.data.status
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

    axios.get('http://localhost:3000/reviews')
    .then((res) => {
        review.id = res.data.id
        review.movie = res.data.movie
        review.author = res.data.author
        review.body = res.data.body
        return review
    }).catch((err) => {
        console.log(err)
    })

}

//get tickets sold
const ticketsSold = (id) =>{
    const num_sold = ''

    axios.get('http://localhost:3000/status', {id})
    .then((res) => {
        num_sold = res.data.ticketSold
        return num_sold
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

const deleteMOvie = (movie_id) =>{
    const status = ''

    axios.delete('http://localhost:3000/deleteMovie', {data: {id: movie_id} })
    .then((res) => {
        status = res.data.status
    })
}

export {authourizeUser , registerUser, getMovies, bookTicket, purchaseTicket, writeReview, viewReviews, ticketsSold, addMovie, deleteMOvie, } ;
