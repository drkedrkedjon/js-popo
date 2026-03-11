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
    remainingSeats: function () {
      return seats - seatsSold;
    },
  };
}

var roomOne = movieTheater();

// call the remainingSeats method of the instace of movieTheater
console.log(roomOne.remainingSeats());

const miH1 = document.querySelector("h1");
miH1.innerText = "Bottega Pinga Course";
