// 2 - Agora inverta o loop e gere números de 25 a 1
// [ [ 25, 24, 23, 22, 21 ],
//   [ 20, 19, 18, 17, 16 ],
//   [ 15, 14, 13, 12, 11 ],
//   [ 10, 9, 8, 7, 6 ],
//   [ 5, 4, 3, 2, 1 ] ]


let array = [];
let count = 25;

for(let i=0; i < 5 ; i++){ // contador // linhas
    const col = []
    for(let j=0; j < 5 ; j++){
        col [j] = count//coluna igual a contador para criar o looping
        count-- // decrementa
    } // colunas
    array[i]= col
}

console.log(array)