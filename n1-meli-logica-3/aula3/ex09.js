//9 Faça uma função construtora de pokemon
//funcao construtora usa a primeira maiuscula
//() argumentos/parametros necessarios
function Pokemon(nome, nomeJapa, evolucao) {
    this.nome = nome
    this.nomeJapa = nome.Japa
    this.evolucao = evolucao
}

//criando o pokemoon

const pokemon1 = new Pokemon('charmander', 'hitokage', 'ovo')
Pokemon.prototype.jogarBola = function(){

}
console.log(pokemon1.nome)