const pessoa = {}
pessoa.nome = "Priscila"
pessoa.idade = 28


pessoa.chorar = function(){
    console.log(`Oi, meu nome é ${pessoa.nome} eu tenho ${pessoa.idade} anos e to chorano`)
}

console.log(pessoa.chorar())

//keys
console.log(Object.keys(pessoa))

//FOR IN
//itens 
for (const item in pessoa){
    console.log(`os valores itens são ${item}`)
}
//valores da propriedade

for (const item in pessoa){
    console.log(`os valores das propriedades sao ${pessoa[item]}`)
}

//hasOwnProperty

console.log(`hasOwnProperty é igual = ${pessoa.hasOwnProperty('nome')}`)