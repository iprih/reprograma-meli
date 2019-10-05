
// itere pela array modificando todos os items, multiplicando eles por 3.

const numbers = [3, 4, 5, 6, 6, 7]

const newNumbers = numbers.map(n => n * 3)
console.log(newNumbers)

// depois prite quantos numeros são maiores que 10

const newNumbers2 = newNumbers.filter(item => item >10)
console.log(newNumbers2.length)

// depois quantos são menores que 10.

const newNumbers3 = newNumbers.filter(item => item < 10)
console.log(newNumbers3.length)

// printe o numero menor que 10.

const newNumbers4 = newNumbers.filter(item => item < 10)
console.log(newNumbers4)


// var menor = newNumbers2.find( item => item < 10)
//   console.log(menor);