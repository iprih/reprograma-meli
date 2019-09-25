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

var produtos = [//lista de produto [array]
    {nome: "maca", preco: 10},//objeto
    {nome: "pera", preco: 8.00},//objeto
    {nome: "melancia", preco: 50.00},//objeto
    {nome: "uva", preco: 2.00}//objeto
];
    
var posicao = parseInt(r.question("Digite a posicao do produto entre 0  e 3: ")); //vai pedir ao usuario o produto
var porcentagem = parseInt(r.question("Digite a porcentagem: ")); // escolher desconto

var produtoSelecionado = produtos[posicao];//procuto que o usuario escolheu - procura dentro do array qual eh a posição

var desconto = produtoSelecionado.preco * (porcentagem / 100); // calcula o valor do desconto
console.log(`Produto selecionado é ${produtoSelecionado.nome} o valor dele é com desconto é R$ ` + desconto.toFixed(2)); // o to fixed printa apenas duas casas decimais
    