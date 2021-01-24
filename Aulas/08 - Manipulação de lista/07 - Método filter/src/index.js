let numbers = [-15, 28, 79, -8, 12];
let positives = numbers.filter((cur, idx, arr) => {
  return cur >= 0;
});
console.log(numbers);
console.log(positives);
