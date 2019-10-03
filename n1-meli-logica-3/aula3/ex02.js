// 2.
// Printe no console a seguinte
// frase: "Oi, meu nome é  < >.
// e meu nome japones é < >."

const pokemon = {}
pokemon.nome = 'Charizard'
pokemon.nomejapones = 'Lizardon'

pokemon.falar = function (){
    console.log(`Oi eu sou o ${pokemon.nome} e meu nome japones é ${pokemon.nomejapones}! `)}
    
console.log(pokemon.falar())