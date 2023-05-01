/* 
Server API for making function calls to the database via local server
********Need to install cors, express, and possibly babel*********
*******Need to add error catches after .then promise are added*******
*/
require('../src/classes')
require('../src/database')
const express = require('express')
const cors = require('cors')
const { PaymentMethod, User, UserType, Movie } = require('../src/classes')

const app = express()
app.use(cors())

const PORT = '3000'
 
//Send login credentials to authorization function
app.get('/login', (req,res) => {
    const email = req.body.email
    loginCustomer(email)
    .then((data) => {
        res.json({
            password: data.body.password,
        })
    }

    )    
});

app.get('/loginAdmin', (req,res) => {
    const email = req.body.email
    loginAdmin(email)
    .then((data) => {
        res.json({
            password: data.body.password,
        })
    }

    )    
});

app.post('/register', (req, res) => {
    const user = new User()
    new_user = req.data.user
    pass = req.data.password
    // send all user info to function call that adds users to the database
    registerCustomer(new_user, pass)
    .then(() => {
        res.json({
            status: 'success',
        })
    }).catch((err) => {
        console.log(err)
    })

});


//Grab current and upcomig movies from the database
app.get('/browse', (req,res) => {
    
    //add daatbase function to grab movies
    getFullCatalog()
    .then((data) =>{
        res.json({
            allMovies: data.movies,
        })
    }).catch((err) => {
        console.log(err)
    })
});

//book a ticket
app.post('/book', (req, res) => {
    const ticket = new Ticket(req.data.showing, req.data.seat, req.data.owner)
    const status = ''
    bookTicket(ticket)
    .then(
        res.json({
            status: 'succes',
        })
    ).catch((err) => {
        console.log(err)
    })
});

//puchase a ticket
app.post('/pay', (req, res) => {
    const payment = new PaymentMethod(req.data.user, req.data.id, req.data.payment_type, req.data.paymen_info)
    const status = ''

    addPayment(payment)
    .then(
        res.json({
            status: 'success'
        })
    ).catch((err) => {
        console.log(err)
    })

});

//Get reviews from database
app.get('/ticketsEmail', (req,res) => {
    const email = req.email
    //add daatbase function to grab movies
    getTicketsByEmail(email)
    .then((data) =>{
        res.json({
            tickets: data.tickets,
        })
    }).catch((err) => {
        console.log(err)
    })
});

//leave review for movie
app.post('/review', (req,res) => {
    const review = new Review()
    review = req.review
     
    //add review to database via function call
    addReview(review)
    .then(
        res.json({
            status: 'success',
        })
    ).catch((err) => {
        console.log(err)
    })

    //not sure if a res is needed here
});

//Get reviews from database
app.get('/viewReview', (req,res) => {
    
    //add daatbase function to grab movies
    getReviews()
    .then((data) =>{
        res.json({
            reviews: data.reviews,
        })
    }).catch((err) => {
        console.log(err)
    })
});

//admin delete option
app.delete('/delete', (req, res) => {
    //never used delete before, need to look into use cases to set up properly 
    const id = req.data.id

    removeMovieById(id)
    .then(
        res.json({
            status: 'success',
        })
    ).catch((err) => {
        console.log(err)
    })
});

//Get current status of all currently showing movies
app.get('/movieInfo', (req, res) => {
    //need to see how they will id the movie
    const id = req.id

    getMovieFromID(id)
    .then((data) => {
        res.json({
            //Need data format for movies stoored in DB
            movie: data.movie,

        }) .catch((err) => {
            console.log(err)
        })  
    })
});

//Get current status of all currently showing movies
app.get('/movieCurrent', (req, res) => {
    //need to see how they will id the movie
    const current = new Movie()

    getCurrentCatalog()
    .then((data) => {
        res.json({
            //Need data format for movies stoored in DB
            current: data.currentCatalog,

        }) .catch((err) => {
            console.log(err)
        })  
    })
});

//Get current status of all currently showing movies
app.get('/movieUpcoming', (req, res) => {
    
    getUpcomingCatalog()
    .then((data) => {
        res.json({
            //Need data format for movies stoored in DB
            upcoming: data.upcomingCatalog,

        }) .catch((err) => {
            console.log(err)
        })  
    })
});


//Get tickets sold for a moive
app.get('/status', (req, res) => {
    //need to see how they will id the movie
    const id = req.id

    getTicketsSold(id)
    .then((data) => {
        res.json({
            //Need data format for movies stoored in DB
            tickets_sold: data.sold,

        }) .catch((err) => {
            console.log(err)
        })  
    })
});

//add Movie Showing
app.post('/addTickets', (req,res) => {
    const tickets = new Ticket()
    tickets = req.tickets
     
    //add review to database via function call
    addTickets(tickets)
    .then(
        res.json({
            status: 'success',
        })
    ).catch((err) => {
        console.log(err)
    })
});


//add Movie Showing
app.post('/addMovie', (req,res) => {
    const movie = new Movie()
    movie = req.movie
     
    //add review to database via function call
    addMovie(movie)
    .then(
        res.json({
            status: 'success',
        })
    ).catch((err) => {
        console.log(err)
    })
});

app.post('/addPayment', (req,res) => {
    const payment = new 
    user = req.user
     
    //add review to database via function call
    addPayment(payment)
    .then(
        res.json({
            status: 'success',
        })
    ).catch((err) => {
        console.log(err)
    })
});

app.listen(PORT, () => {
    console.log('listening on 3000')
});