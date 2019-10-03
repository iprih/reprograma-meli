// 4.
// Adicione um método ao seu pokemon
// chamado `voar` que retorna "Desculpa, nao sei voar." ou "
// To voaaaaaando!".

const pokemon = {
nome: 'Charizard',
nomejapones: 'Lizardon',
tipo: 'fogo-e-voador',
evolucaode: 'charmander',
sabe_voar: 
//false
//Boolean
true
}


if (pokemon.sabe_voar == true){
    console.log('eu sei vuaaaaa')
}else{
        console.log('faiou, tenho que aprender')
}



/*
pokemon.voar = function(){
     
    console.log(`Oi eu sou o ${pokemon.nome} e meu nome japones é ${pokemon.nomejapones}! Sou do tipo ${pokemon.tipo}, sou a evolução do ${pokemon.evolucaode}
    e faço p Ataque do dragão`)

}

console.log(pokemon.voar())
//for (const item in pokemon){console.log(${item})}*/