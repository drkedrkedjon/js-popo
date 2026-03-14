const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function trimer(arg) {
  arg.pop();
  arg.shift();
  return arg;
}

console.log(trimer(arr));

const mixed = [
  1,
  "Hi",
  [1, 2, 3, 4, 5],
  { name: "Sasa" },
  function hello() {
    console.log("hello");
  },
];

console.log(mixed[0]);
console.log(mixed[1]);
console.log(mixed[2]);
console.log(mixed[2][1]);
console.log(mixed[3].name);
console.log(mixed[4]());

const arrr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (let i = 0; i < arrr.length; i++) {
  console.log(arrr[i]);
}

for (let i in arrr) {
  // Pulls index from array or key from object
  console.log(arrr[i]);
}
for (let number of arrr) {
  // Pulls value from array - solo array
  console.log(number);
}

arrr.forEach((number) => console.log(number));

const fooArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

do {
  console.log(fooArr.pop());
} while (false);

while (fooArr.length > 0) {
  const poped = fooArr.pop();
  console.log(fooArr);
}
