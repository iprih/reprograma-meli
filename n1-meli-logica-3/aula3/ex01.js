
// 1.
// Defina um objeto de
// Javascript que descreva
// um dos pokemons da lista
// de pokemons do Wikipedia.
// com pelo menos 4 propriedades e 1 método
// ref: https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon

const pokemon = {}
pokemon.nome = 'Charizard'
pokemon.nomejapones = 'Lizardon'
pokemon.tipo = 'fogo-e-voador'
pokemon.evolucaode = 'charmander'
//console.log(pokemon)

pokemon.atacar = function (){
    console.log(`Oi eu sou o ${pokemon.nome} e meu nome japones é ${pokemon.nomejapones}! Sou do tipo ${pokemon.tipo}, sou a evolução do ${pokemon.evolucaode}
    e faço p Ataque do dragão`)}
    
console.log(pokemon.atacar())

