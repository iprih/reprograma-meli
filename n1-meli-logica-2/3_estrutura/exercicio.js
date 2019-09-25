var r = require("readline-sync");

var nome = "";
//var tempoDeValidade = Number;
var congelado = Boolean;


var produtos = [
    {nome: "nescau", tempoDeValidade: 90, congelado: false},
    {nome: "sorvete", tempoDeValidade: 60, congelado: true},
    {nome: "bolacha", tempoDeValidade: 30, congelado: false},
    {nome: "leite", tempoDeValidade: 70, congelado: false}
]

var posicao = parseInt(r.question("Digite a posicao do produto entre 0  e 3: ")); //vai pedir ao usuario o produto
var diasParaVencimento = parseInt(r.question("Digite quantos dias faltam para vencer: ")); //vai pedir ao usuario o produto

var produtoSelecionado = produtos[posicao];

var porcentagem = (diasParaVencimento*100)/produtoSelecionado.tempoDeValidade;

console.log(`A porcentagem é ${porcentagem}`);

if (porcentagem <= 2){
console.log("O produto deve ser descartado, está muito proximo ao vencimento")
}
else if(porcentagem <= 10 && !produtoSelecionado.congelado){
console.log("Desconto! Produto não congelado e próximo da validade.")
}
else if (porcentagem <= 5 && produtoSelecionado.congelado){
console.log("Desconto! Produto congelado e próximo da validade.")
}
else{
    console.log("Produto longe do vencimento")
}

//console.log(typeof porcentagem);
//console.log(typeof tempoDeValidade);
//console.log(typeof diasParaVencimento);

//console.log(produtoSelecionado);

// console.log(diasParaVencimento);
//


//var porcentagem = parseInt(r.question("Digite a porcentagem: ")); // escolher desconto

//var produtoSelecionado = produtos[posicao];//procuto que o usuario escolheu - procura dentro do array qual eh a posição

//var desconto = produtoSelecionado.preco * (porcentagem / 100); // calcula o valor do desconto
//console.log(`Produto selecionado é ${produtoSelecionado.nome} o valor dele é com desconto é R$ ` + desconto.toFixed(2)); // o to fixed printa apenas duas casas decimais
