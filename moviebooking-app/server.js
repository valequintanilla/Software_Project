/* 
Server API for making function calls to the database via local server
********Need to install cors, express, and possibly babel*********
*******Need to add error catches after .then promise are added*******
*/

const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const PORT = '3000'
const CLIENTID = ''
const CLIENTSECRET = ''

//Send login credentials to authorization function
app.post('/login', (req,res) => {
    //function call for login databasefunction
});

app.post('/register', (req, res) => {
    const password = req.body.pass
    const email = req.body.email
    const address = req.body.address

    // send all user info to function call that adds users to the database
});


//Grab current and upcomig movies from the database
app.get('/browse', (req,res) => {
    
    //add daatbase function to grab movies
    res.send.json({
        currentMovie: data.body.current,
        upcomingMovies: data.body.upcoming,
    })
});


//leave review for movie
app.post('/review', (req,res) => {
    const review = req.body.review
     
    //add review to database via function call

    //not sure if a res is needed here
});

//admin delete option
app.delete('/delete', (req, res) => {
    //never used delete before, need to look into use cases to set up properly 
});

//Get current status of all currently showing movies
app.get('/status', (req, res) => {
        res.send.json({
            //Need data format for movies stoored in DB
        })
});

app.listen(PORT, () => {
    console.log('listening on 3000')
});