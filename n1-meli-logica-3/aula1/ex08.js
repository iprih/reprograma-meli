// 8- Dada a array const x = [23, 43, 63 ,73, 83, 93, 102];
//Itere pela array somando mais 2 de cada item e crie uma nova array com os resultados gerados.

//push adiciona no final

const x = [23, 43, 63 ,73, 83, 93, 102];
const NovaArray = [];
for(i = 0; i <= x.length - 1; i++){// se tirar o igual 
    NovaArray.push(x[i] + 2)
    //console.log(x[i] +2)
}
console.log(NovaArray)