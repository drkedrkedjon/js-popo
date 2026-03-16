// const sasa = "Sasa";
// console.log(`I am ${(() => "flabla")()}`);

const namee = "Fuera";
const obj = {
  namee: "Dentro",
  printNameOne() {
    return this.namee;
  },
  printNameTwo: () => namee,
};

console.log(obj.printNameOne());
console.log(obj.printNameTwo());

// Heading generator

function headingGen(nivel, contenido) {
  const heading = document.createElement(`h${nivel}`);
  heading.innerText = contenido;
  document.querySelector("body").appendChild(heading);
}

headingGen(2, "hola caracola");

//  Swap values in variables
//  Version antugua
let one = "Sasa";
let two = "Caty";

let intOne = one;
let intTwo = two;

two = intOne;
one = intTwo;

//  Version moderna
[two, one] = [one, two];
console.log(one, two);

// Destructuring in JS

const arr2 = [1, 2, 3];
const obj2 = { id: 23423, nombre: "Sasa", age: 45 };

const [dos, uno, cinco] = arr2;
const { id, age, nombre } = obj2;

console.log(uno, cinco, dos);
console.log(id, nombre, age);

function destructuracion({ id, nombre = "user", age }) {
  console.log(id, nombre, age);
}
destructuracion(obj2);

//  Spread y Rest operators with arrays
let spreader = [1, 2, 3, 4, 5];
let spreaderCopy = [...spreader];

console.log(spreaderCopy === spreader);
console.log(spreaderCopy);

const [prm, seg, ...rest] = spreader;
console.log(rest);

// Spread and Rest with objects
let spreadObj = { a: 1, b: 2, c: 3, d: 4 };
let spreadObjCopy = { ...spreadObj };

console.log(spreadObjCopy === spreadObj); // false
console.log(spreadObjCopy); // { a: 1, b: 2, c: 3, d: 4 }

const { a, d, ...restObj } = spreadObj;
console.log(restObj); // { c: 3, d: 4 }

// In the return below, use Math and spread operators to find the highest number of the highscore array.
function yourTest() {
  const highscore = [237.0198, 256.1, 234.846, 237.21, 256.654];

  return Math.max(...highscore);
}

console.log(yourTest());
