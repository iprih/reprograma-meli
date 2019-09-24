//read line sync
// importa:
/*
var r = require("readline-sync");
var a = parseInt(r.question("Digite 1 ou 2: ")) // question pergunta
console.log(a); 
A loja Lumelância precisa de uma nova função no seu sistema para calcular um desconto nos seus produtos.
Você deverá seguir os seguintes passos:

- Crie uma variável que irá guardar o array com nome e valor dos produtos
- Crie uma variável 'posicao' para guardar o produto escolhido pelo usuário
- Crie uma variável 'porcentagem' que irá guardar qual porcentagem o usuário digitou
- Procure no array qual produto foi escolhido pelo usuário
- Calcule o desconto do produto
- Printe na tela a seguinte frase: "Produto xxx com desconto é R$ xxx"

Dica: você pode usar a função .toFixed(digits) para limitar o numero de casas decimais do desconto.
*/

var r = require("readline-sync");

var nome = r.question("Digite o nome do produto: ");
var valor = parseInt(r.question("Digite o valor do produto: "));

var lista = [
    {nome: "priscila", produto: "uva"}
]
produto = {
    nome,
    valor,
    lista
}

console.log(nome);
console.log(valor);
console.log(lista);

//var nome = [nome];
//console.log(nome);
