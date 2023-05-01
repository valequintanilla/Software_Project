/*
 * database.js
 * a library of functions to access a database
 * as defined in the database logical design
 * author: Jonathon Surles
 */

// modules
const Classes = require("./classes");
const fs = require('fs');

// database paths
const d_users = "database/users.csv";
const d_movies = "database/movies.csv";
const d_theaters = "database/movies.csv";
const d_reviews = "database/reviews.csv";
const d_showings = "database/showings.csv";
const d_payments = "database/payments.csv";
const d_tickets = "database/tickets.csv";

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
 * get the next available movie id
 * output: id (integer) which is not in use in movies database
 */
function getNextMovieID() {
    i = 1;
    while (getMovieFromID(i)) {
        i += 1;
    }
    return i;
}

/*
 * get the next available review id for the given movie
 * input: movie id
 * output: id (integer) which is not in use for a review of movie
 */
function getNextReviewID(movieID) {
    reviews = getReviewsByID(movieID);
    i = 1;
    // get i as the largest value of current review ids
    for (review of reviews) {
        i = review.id > i ? review.id : i;
    }
    // then i + 1 must be unused
    return i + 1;
}

/*
 * get the next available payment id for the given user
 * input: user email
 * output: id (integer) which is not in use for a review of movie
 */
function getNextPaymentID(userEmail) {
    payments = getPaymentsByEmail(userEmail);
    i = 1;
    // get i as the largest value of current review ids
    for (payment of payments) {
        i = payment.id > i ? payment.id : i;
    }
    // then i + 1 must be unused
    return i + 1;
}

/*
 * get the user with the certain email from the database
 * input: email (string)
 * output: user (User object) 
 */
function getUserFromEmail(email) {
    records = parseFile(d_users);
    for (record of records) {
        if (record[0] === email) {
            userType = record[5] == "admin" ?
                Classes.UserType.Admin : Classes.UserType.Customer;
            return new Classes.User(
                record[0], // email
                record[2], // name
                record[3], // phone number
                record[4], // home address
                userType   // user type
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
    records = parseFile(d_movies);
    for (record of records) {
        if (record[0] === id) {
            new Classes.Movie (
                parseInt(record[0]), // id
                record[1],           // title
                new Date(record[2]), // release date
                record[3]            // poster url
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
    records = parseFile(d_users);
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
    writeFile(d_users, records);
}

/*
 * attempt to log in as a customer
 * input: email (string), password (string)
 * output:
 *   User object if login is successful
 *   null if login is unsuccessful
 */
function loginCustomer(email, password) {
    records = parseFile(d_users);
    for (record of records) {
        if (record[0] === email) {
            // check for incorrect password or wrong user type
            if (record[1] != password || record[5] != "customer") {
                return null;
            }
            return new Classes.User(
                record[0], // email
                record[2], // name
                record[3], // phone number
                record[4], // home address
                Classes.UserType.Customer // user type
            );
        } 
    }
    return null;
}

/*
 * attempt to log in as an admin
 * input: email (string), password (string)
 * output:
 *   User object if login is successful
 *   null if login is unsuccessful
 */
function loginAdmin(email, password) {
    records = parseFile(d_users);
    for (record of records) {
        if (record[0] === email) {
            // check for incorrect password or wrong user type
            if (record[1] != password || record[5] != "customer") {
                return null;
            }
            return new Classes.User(
                record[0], // email
                record[2], // name
                record[3], // phone number
                record[4], // home address
                Classes.UserType.Customer // user type
            );
        } 
    }
    return null;
}

/*
 * get the top (num) best selling movies
 * input: num (positive integer)
 * output: Movie object array
 */
// TODO (skipped)
function getBestSellers(num) {}

/*
 * get all current & upcoming movies
 * output: Movie object array
 */
function getFullCatalog() {
    records = parseFile(d_movies);
    movies = []
    for (record of records) {
        movie = new Classes.Movie(
            parseInt(record[0]), // id
            record[1],           // title
            new Date(record[2]), // release date
            record[3]            // poster url
        );
        movies.push(movie);
    }
    return movies;
}

/*
 * get all current movies
 * output: Movie object array
 */
function getCurrentCatalog() {
    fullCatalog = getFullCatalog();
    currentCatalog = [];
    currentDate = new Date();
    for (movie of fullCatalog) {
        if (movie.releaseDate < currentDate) {
            currentCatalog.push(movie);
        }
    }
    return currentCatalog;
}

/*
 * get all upcoming movies
 * output: Movie object array
 */
function getUpcomingCatalog() {
    fullCatalog = getFullCatalog();
    upcomingCatalog = [];
    currentDate = new Date();
    for (movie of fullCatalog) {
        if (currentDate < movie.releaseDate) {
            currentCatalog.push(movie);
        }
    }
    return upcomingCatalog;
}

/*
 * search all movies by a string
 * input: query (string)
 * output: Movie object array
 */
function searchMovies(query) {
    catalog = getFullCatalog();
    searchResults = [];
    for (movie of catalog) {
        if (movie.title.includes(query)) {
            searchResults.push(movie);
        }
    }
    return searchResults;
}

/*
 * delete movie from database
 * input: movie (Movie object)
 * output: none
 * side effect: movie is removed from database
 */
function removeMovie(movie) {
    removeMovieByID(movie.id);
}

/*
 * delete movie from database
 * input: movieID (integer)
 * output: none
 * side effect: movie is removed from database
 */
function removeMovieByID(movieID) {
    records = parseFile(d_movies);
    for (i in records) {
        if (parseInt(records[i][0]) == movieID) {
            records.splice(i, 1); // delete ith record
            break;
        }
    }
    writeFile(d_movies);
}

/*
 * add movie to database
 * input: movie (Movie object)
 * output: none
 * side effect: movie is added to database
 */
function addMovie(movie) {
    records = parseFile(d_movies);
    record = [
        movie.id,
        movie.title,
        movie.release_date.toISOString(),
        movie.poster_url,
    ];
    records.push(record);
    writeFile(d_users, records);
}

/*
 * get all reviews for a movie
 * input: movie (Movie object)
 * output: Review object array
 */
function getReviews(movie) {
    return getReviewsByID(movie.id);
}

/*
 * get all reviews for a movie
 * input: movieID (integer)
 * output: Review object array
 */
function getReviewsByID(movieID) {
    records = parseFile(d_reviews);
    reviews = []
    for (record of records) {
        review = new Classes.Review(
            parseInt(record[0]), // movie id
            parseInt(record[1]), // review id
            record[2],           // author email
            record[3]            // review body
        )
        if (review.movieID == movieID) {
            revies.push(review);
        }
    }
    return reviews;
}

/*
 * add a review for a movie
 * input: review (Review object)
 * output: none
 * side effect: review information is added to database
 */
function addReview(review) {
    records = parseFile(d_reviews);
    record = [
        movie.id,
        movie.title,
        movie.release_date.toISOString(),
        movie.poster_url,
    ];
    records.push(record);
    writeFile(d_reviews, records);
}

/*
 * get all showings for a movie
 * input: movie (Movie object)
 * output: Showing object array
 */
function getShowings(movie) {
    return getShowingsByID(movie.id);
}

/*
 * get all showings for a movie
 * input: movieID (integer)
 * output: Showing object array
 */
function getShowingsByID(movieID) {
    records = parseFile(d_showings);
    showings = []
    for (record of records) {
        if (parseInt(record[0]) == movieID) {
            showings.push(new Classes.Record(
                parseInt(record[0]), // movie id
                parseInt(record[1]), // theater id
                new Date(record[2])  // datetime
            ));
        }
    }
    return showings;
}

/*
 * add ticket to database
 * input: ticket (Ticket object)
 * output: none
 * side effect: ticket information is added to database
 */
function addTicket(ticket) {
    records = parseFile(d_tickets);
    record = [
        ticket.movie,
        ticket.theater,
        ticket.time.toISOString(),
        ticket.seat,
        ticket.owner
    ];
    records.push(record);
    writeFile(d_tickets, records);
}

/*
 * add multiple tickets to database
 * input: tickets (Ticket object array)
 * output: none
 * side effect: ticket information is added to database
 */
function addTickets(tickets) {
    for (ticket of tickets) {
        addTicket(ticket);
    }
}

/*
 * get all tickets owned by a user
 * input: user (User object)
 * output: Ticket object array
 */
function getTickets(user) {
    return getTicketsByEmail(user.email);
}

/*
 * get all tickets owned by a user
 * input: userEmail (string)
 * output: Ticket object array
 */
function getTicketsByEmail(userEmail) {
    records = parseFile(d_tickets);
    tickets = [];
    for (record of records) {
        if (record[4] == userEmail) {
            tickets.append(new Classes.Ticket(
                parseInt(record[0]), // movie id
                parseInt(record[1]), // theater id
                new Date(record[2]), // datetime
                parseInt(record[3]), // seat number
                record[4]            // owner email
            ));
        }
    }
    return tickets;
}

/*
 * get all tickets of a particular movie sold
 * input: movie (Movie object)
 * output: integer
 */
function getTicketsSold(movie) {
    const sold = getTicketsSoldByID(movie.id);
    return sold
}

/*
 * get all tickets of a particular movie sold
 * input: movieID (integer)
 * output: integer
 */
function getTicketsSoldByID(movieID) {
    records = parseFile(d_tickets);
    count = 0;
    for (record of records) {
        if (parseInt(record[0]) == movieID) {
            count += 1;
        }
    }
    return count;
}

/*
 * get all stored payment info for a user
 * input: user (User object)
 * output: PaymentMethod object array
 */
function getPayments(user) {
    return getPaymentsByEmail(user.email);
}

/*
 * get all stored payment info for a user
 * input: userEmail (string)
 * output: PaymentMethod object array
 */
function getPaymentsByEmail(userEmail) {
    records = parseFile(d_payments);
    payments = []
    for (record of records) {
        if (record[0] == userEmail) {
            payments.push(new PaymentMethod(
                record[0],           // user email
                parseInt(record[1]), // id (for user)
                record[2],           // payment type
                record[3]            // payment information
            ));
        }
    }
}

/*
 * add payment method to database
 * input: payment (PaymentMethod object)
 * output: none
 * side effect: payment information added to database
 */
function addPayment(payment) {
    records = parseFile(d_payments);
    records.push([
        payment.user,
        payment.id,
        payment.payment_type,
        payment.payment_info
    ]);
    writeFile(d_payments, records);
}

