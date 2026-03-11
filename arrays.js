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
