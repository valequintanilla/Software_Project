// TODO: these classes have no type validation in their constructors
// They are currently just shells to get the idea of the data format to be expected

// The UserType "enumeration" is used to differentiate between customers and admins
const UserType = {
  Customer: Symbol("customer"),
  Admin: Symbol("admin")
}

// The PaymentType "enumeration" is used to tell what payment type some data is representing
const PaymentType = {
  Card: Symbol("card"),
  PayPal: Symbol("paypal"),
  ApplePay: Symbol("applepay"),
  GooglePay: Symbol("googlepay")
}

// A user object is used to represent a user of the system, either an admin or 
class User {
  constructor(email, name, phone, home_address, user_type) {
    this.email = email;
    this.name = name;
    this.phone = phone;
    this.home_address = home_address;
    this.user_type = user_type;
  }
}

class Movie {
  constructor(title, release_date, poster_url) {
    this.title = title;
    this.release_date = release_date;
    this.poster_url = poster_url;
  }
}

class Theater {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
}

class Review {
  constructor(movie, author, body) {
    this.movie = movie;
    this.author = author;
    this.body = body;
  }
}

class Showing {
  constructor(movie, theater, time) {
    this.movie = movie;
    this.theater = theater;
    this.time = time;
  }
}

class PaymentMethod {
  constructor(user, payment_type, payment_info) {
    this.user = user;
    this.payment_type = payment_type;
    this.payment_info = payment_info;
  }
}

class Ticket {
  constructor(showing, seat, owner) {
    this.showing = showing;
    this.seat = seat;
    this.owner = owner;
  }
}
