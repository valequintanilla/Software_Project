/* 
Server API for making function calls to the database via local server
********Need to install cors, express, and possibly babel*********
*******Need to add error catches after .then promise are added*******
*/
require('../src/classes')
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const PORT = '3000'
const CLIENTID = ''
const CLIENTSECRET = ''

//Send login credentials to authorization function
app.get('/login', (req,res) => {
    const email = req.body.email
    getUser(email)
    .then((data) => {
        res.json({
            password: data.body.password,
        })
    }

    )    
});

app.post('/register', (req, res) => {
    const password = req.body.pwd
    const email = req.body.email
    // send all user info to function call that adds users to the database
    addUser(password,email)
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
    getMovies()
    .then((data) =>{
        res.json({
            currentMovie: data.body.current,
            upcomingMovies: data.body.upcoming,
        })
    }).catch((err) => {
        console.log(err)
    })
});


//leave review for movie
app.post('/review', (req,res) => {
    const review = req.body.review
     
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

//admin delete option
app.delete('/delete', (req, res) => {
    //never used delete before, need to look into use cases to set up properly 
});

//Get current status of all currently showing movies
app.get('/status', (req, res) => {
    //need to see how they will id the movie
    const id = req.moviename

    getMovieInfo()
    .then((data) => {
        res.json({
            //Need data format for movies stoored in DB
            ticketSold: data.body.numberOfTickets,

        }) .catch((err) => {
            console.log(err)
        })  
    })
});

app.listen(PORT, () => {
    console.log('listening on 3000')
});