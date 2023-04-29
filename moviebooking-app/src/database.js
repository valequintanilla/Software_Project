/*
 * database.js
 * a library of functions to access a database
 * as defined in the database logical design
 * author: Jonathon Surles
 */

/*
 * get the user with the certain email from the database
 * input: email (string)
 * output: user (User object) 
 */
function getUserFromEmail(email) {}

/*
 * get the movie with the certain id from the database
 * input: id (integer)
 * output: movie (Movie object)
 */
function getMovieFromID(id) {}

/*
 * register a new customer user
 * input: user (User object), password (string)
 * output: none
 * side effect: user information is added to database
 */
function registerCustomer(user, password) {}

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
