let nombre = null;

function noDefinida() {
  nombre = "Caty";
  return "Soy return";
}

const ret = noDefinida();

console.log(nombre);
console.log(ret);

function strings() {
  // Use slice to return a substring starting from the "w" through the end of the sentence
  var str = "The five boxing wizards jump quickly";
  const obj = {
    stringi: str,
  };
  return obj.stringi.slice(16);
}
strings();
console.log(strings());

// Variable scope
const user = "Sasa";

function nombres() {
  const user = "Caty";
  return user;
}
console.log(nombres());
console.log(user);

function sasa(name = "Caty") {
  console.log(name);
}

sasa();

function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(2, 6));

// Closures
function closure(arg1) {
  const id = arg1;

  return function (name) {
    return {
      id: id,
      name: name,
    };
  };
}

const laDeDentro = closure(798724);
console.log(laDeDentro("Sasa"));

// Take the variable roomOne and call the function on it to return the seats remaining.
function movieTheater() {
  var seats = 50;
  var seatsSold = 28;

  return {
    remainingSeats: function (newSale = 1) {
      seatsSold += newSale;
      return seats - seatsSold;
    },
  };
}

var roomOne = movieTheater();

// call the remainingSeats method of the instace of movieTheater
console.log(roomOne.remainingSeats(7));
console.log(roomOne.remainingSeats(7));

// Class
let name = "Pepe";

class Sasa {
  constructor(name) {
    this.name = name;
  }

  nombre() {
    console.log(this.name);
  }
}

const sasenko = new Sasa("Sasa");
const catuska = new Sasa("Caty");

sasenko.nombre();
catuska.nombre();

// Use 'this' to run the code and determine how many seats are left.

var seats = {
  seats: 50,
  seatsSold: 28,
  remainingSeats: function () {
    return this.seats - this.seatsSold;
  },
  enoughSeats: function () {
    if (this.remainingSeats() > 0) {
      return this.remainingSeats();
    }
  },
};

console.log(seats.enoughSeats());
