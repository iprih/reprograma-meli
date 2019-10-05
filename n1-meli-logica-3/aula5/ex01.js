// use Map, filter, forEach, find e ou Reduce.

const numbers = [1, 3, 4, 6,  8, 9, 56, 34, 23, 2, 89, 101, 320, 12, 13, 45, 40, 43, 88]
// retorne numeros multiplos de 3
const numbers2 = numbers.filter(n => n % 3 == 0);
console.log(numbers2);

// retorne numeros multiplos de 3 e de 5
const numbers3 = numbers.filter(n => n % 3 == 0 || n % 5 == 0);
console.log(numbers3);