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
const obj2 = { id: 23423, name: "Sasa", age: 45 };

const [dos, uno, cinco] = arr2;
const { id, age, nombre } = obj2;

console.log(uno, cinco, dos);
console.log(id, nombre, age);
