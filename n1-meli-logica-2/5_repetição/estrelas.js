/*2) Crie um programa gerador de estrelas. 
O usuário informa um número, e o programa gera uma pirâmide de estrelas no seguinte formato:
// Ex.: Usuário informa 5 e o programa retorna
// *
// * *
// * * *
// * * * * 
// * * * * * 
- Você pode concatenar uma string usando: + ou +=
*/
const r = require("readline-sync");

function estrelas() { //criei a funcao
    let qtd = parseInt(r.question("Digite um valor de estrelas: ")); // pedi ao usuario digitar um valor de estrela
    let estrela = "" //let de estrela para incrementar uma na outra
    for (let i = 1; i <= qtd; i++) { //enquanto i for menor que a qtd que user digitou, ele acrescenta valor em i
        estrela += " *"
        console.log(estrela)
    }
}
estrelas();
