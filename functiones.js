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
