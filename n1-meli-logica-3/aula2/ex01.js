// 1 - Usando um loop, crie uma matriz 5 x 5 cujos elementos são:
// 1 2 3 4 5
// 6 7 8 9 10
// 11 12 13 14 15
// 16 17 18 19 20
// 21 22 23 24 25

let array = [];
let count = 1;

for(let i=0; i < 5 ; i++){ // contador // linhas
    const col = []
    console.log(`o i vale ${i}`)
    console.log(`o col vale ${col}`)
    for(let j=0; j < 5 ; j++){
        console.log(`o j vale ${j}`)
        
        col [j] = count//coluna igual a contador para criar o looping
        console.log(`o count vale ${count}`)
        count++
        
    } // colunas
    array[i]= col
}

console.log(array)