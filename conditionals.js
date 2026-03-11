const age = 128;

if (age < 18) {
  console.log("No puedes conducir");
} else if ((age >= 80 && age <= 100) || age > 100) {
  console.log("Eres un viejo carajillo");
} else {
  console.log("Dame tu tarjeta de credito");
}

switch (age) {
  case age < 18:
    console.log("No puedes conducir");
    break;
  case age >= 80:
    console.log("Eres un viejo carajillo");
    break;
  default:
    console.log("Dame tu tarjeta de credito");
}

switch (age) {
  case 18:
    console.log("Balonja");
    break;
  case 80:
    console.log("Eres un viejo carajillo");
    break;
  default:
    console.log("Who are you?");
}

let data = 55;

switch (typeof data) {
  case "string":
    console.log("Soy string");
    break;
  case "number":
    console.log("Soy numero");
    break;
  case "boolean":
    console.log("Soy boolean");
    break;
  default:
    console.log("Soy object");
}

const ternario = false !== true ? "YES" : "NO";
console.log(ternario);
