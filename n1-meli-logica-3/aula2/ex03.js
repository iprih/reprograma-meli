// 3 - Retorne o valor mais alto das somas entre o total de valors por linha, de uma array 4x4.
//const arr4x4 = [[23, 56, 9, 0], [8, 24, 50, 5], [9, 10, 40, 7], [9, 48, 15, 2]]
// exemplo:
// 4 4 4 4
// 5 6 6 7
// 9 9 9 9
// Resultado esperado -> 36

/*
const arr4x4 = [[23, 56, 9, 0], [8, 24, 50, 5], [9, 10, 40, 7], [9, 48, 15, 2]]
let soma = 0

for(let i = 0; i < arr4x4.length ; i++){
    //console.log(arr4x4[i]);
    for(let j = 0; j < arr4x4[i].length; j++){
        soma += arr4x4[i][j];
        console.log(`aqui é a soma ${soma}`)
        console.log(`aqui é o tamanho de cada elemento do array grandao${arr4x4[i].length}`)
   
    }
       
}
*/
//console.log(soma);


//console.log(arr4x4[0][1])
//console.log(arr4x4.length)



const arr4x4 = [[23, 56, 9, 0], [8, 24, 50, 5], [9, 10, 40, 7], [9, 48, 15, 2]]

for (let i =0; i <arr4x4.length; i++){
    let linha = 0
    for(let j = 0; j <arr4x4.length;j++){
        linha += arr4x4[i][j]
    }
    soma.push(linha)
    console.log(soma)
}
console.log(Math.max(...soma))