const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function trimer(arg) {
  arg.pop();
  arg.shift();
  return arg;
}

console.log(trimer(arr));
