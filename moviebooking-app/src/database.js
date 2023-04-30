/*
 * database.js
 * a library of functions to access a database
 * as defined in the database logical design
 * author: Jonathon Surles
 */


const Classes = require("./classes");
const fs = require('fs');

/*
 * parse a csv with separator |
 * input: the path to the file
 * output: a 2d array, each row being a record,
 *         and each column being a value
 */
function parseFile(path) {
    text = fs.readFileSync(path, {encoding: "utf8"});
    lines = text.split("\n");
    records = [];
    for (line of lines) {
        if (line) {
            records.push(line.split("|"));
        }
    }
    return records;
}

/*
 * write to a csv with separator |
 * input:
 *   path:    the path to the file
 *   records: the 2d array, each row being a record,
 *            each column being a value
 * output: none
 * side effects: the file at path is written as a csv
 */
function writeFile(path, records) {
    lines = [];
    for (record of records) {
        lines.push(record.join("|"));
    }
    text = lines.join("\n");
    fs.writeFileSync(path, text);
}

/*
 * get the user with the certain email from the database
 * input: email (string)
 * output: user (User object) 
 */
function getUserFromEmail(email) {
    records = parseFile("database/users.csv");
    for (record of records) {
        if (record[0] === email) {
            userType = record[5] == "admin" ?
                Classes.UserType.Admin : Classes.UserType.Customer;
            return new Classes.User(
                record[0], // email
                record[2], // name
                record[3], // phone number
                record[4], // home address
                userType, // user type
            );
        } 
    }
    return null;
}

/*
 * get the movie with the certain id from the database
 * input: id (integer)
 * output: movie (Movie object)
 */
function getMovieFromID(id) {
    records = parseFile("database/movies.csv");
    for (record of records) {
        if (record[0] === id) {
            new Classes.Movie (
                record[0], // id
                record[1], // title
                record[2], // release date
                record[3], // poster url
            );
        } 
    }
    return null;
}

/*
 * register a new customer user
 * input: user (User object), password (string)
 * output: none
 * side effect: user information is added to database
 */
// TODO: assumes no duplicate emails
function registerCustomer(user, password) {
    records = parseFile("database/users.csv");
    typestr = user.userType == Classes.UserType.Admin ?
        "admin" : "customer"
    record = [
        user.email,
        password,
        user.name,
        user.phone,
        user.home_address,
        typestr
    ];
    records.push(record);
    writeFile("database/users.csv", records);
}

/*
 * attempt to log in as a customer
 * input: email (string), password (string)
 * output:
 *   User object if login is successful
 *   null if login is unsuccessful
 */
function loginCustomer(email, password) {}

/*
 * attempt to log in as an admin
 * input: email (string), password (string)
 * output:
 *   User object if login is successful
 *   null if login is unsuccessful
 */
function loginAdmin(email, password) {}

/*
 * get the top (num) best selling movies
 * input: num (positive integer)
 * output: Movie object array
 */
function getBestSellers(num) {}

/*
 * get all current movies
 * output: Movie object array
 */
function getCurrentCatalog() {}

/*
 * get all upcoming movies
 * output: Movie object array
 */
function getUpcomingCatalog() {}

/*
 * get all current & upcoming movies
 * output: Movie object array
 */
function getFullCatalog() {}

/*
 * search all movies by a string
 * input: query (string)
 * output: Movie object array
 */
function searchMovies(query) {}

/*
 * get all reviews for a movie
 * input: movie (Movie object)
 * output: Review object array
 */
function getReviews(movie) {}

/*
 * get all reviews for a movie
 * input: movieID (integer)
 * output: Review object array
 */
function getReviewsByID(movieID) {}

/*
 * add a review for a movie
 * input: review object
 * output: none
 * side effect: review information is added to database
 */
function addReview(review) {}

/*
 * get all showings for a movie
 * input: movie (Movie object)
 * output: Showing object array
 */
function getShowings(movie) {}

/*
 * get all showings for a movie
 * input: movieID (integer)
 * output: Showing object array
 */
function getShowingsByID(movieID) {}

/*
 * add ticket to database
 * input: ticket (Ticket object)
 * output: none
 * side effect: ticket information is added to database
 */
function addTicket(ticket) {}

/*
 * add multiple tickets to database
 * input: tickets (Ticket object array)
 * output: none
 * side effect: ticket information is added to database
 */
function addTickets(tickets) {}

/*
 * get all tickets owned by a user
 * input: user (User object)
 * output: Ticket object array
 */
function getTickets(user) {}

/*
 * get all tickets owned by a user
 * input: userEmail (string)
 * output: Ticket object array
 */
function getTicketsByEmail(userEmail) {}

/*
 * get all stored payment info for a user
 * input: user (User object)
 * output: PaymentMethod object array
 */
function getPayments(user) {}

/*
 * get all stored payment info for a user
 * input: userEmail (string)
 * output: PaymentMethod object array
 */
function getPaymentsbyEmail(userEmail) {}

/*
 * add payment method to database
 * input: payment (PaymentMethod object)
 * output: none
 * side effect: payment information added to database
 */
function addPayment(payment) {}

/*
 * get all tickets of a particular movie sold
 * input: movie (Movie object)
 * output: integer
 */
function getTicketsSold(movie) {}

/*
 * get all tickets of a particular movie sold
 * input: movieID (integer)
 * output: integer
 */
function getTicketsSoldByID(movieID) {}

/*
 * delete movie from database
 * input: movie (Movie object)
 * output: none
 * side effect: movie is removed from database
 */
function removeMovie(movie) {}

/*
 * delete movie from database
 * input: movieID (integer)
 * output: none
 * side effect: movie is removed from database
 */
function removeMovieByID(movieID) {}

/*
 * add movie to database
 * input: movie (Movie object)
 * output: none
 * side effect: movie is added to database
 */
function addMovie(movie) {}
