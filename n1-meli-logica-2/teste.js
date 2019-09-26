/*let nome = "Ola Priscila"

nome.indexIndexOf("i");
console.log(nome);
*/

function imprimeIdade(){
    var idade = 30;
    console.log(`Idade ${idade}`)
}

imprimeIdade();


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
var r = require("readline-sync");

function estrelas(){
    var qtd = parseInt(r.question("Digite um valor de estrelas: "));
    var i = 0;

    do{
        qtd += "*" +i;
        i++;
    }
    while(i < 5);   

}
estrelas()
