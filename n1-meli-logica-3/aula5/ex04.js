const numbers = [
  1,
  3,
  4,
  6,
  8,
  9,
  56,
  34,
  23,
  2,
  89,
  101,
  320,
  12,
  13,
  45,
  40,
  43,
  88
]
//calcule o valor total da soma dos items da array numbers

const reducer = (x, total) => x + total;
console.log(numbers.reduce(reducer));