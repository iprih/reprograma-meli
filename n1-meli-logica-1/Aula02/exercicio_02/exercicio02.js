/*1.1. Escreva um programa que sorteia um número de 1 a 10, 
dá duas chances para que o usuário acerte, mas informa se o número sorteado x'é maior ou menor que o primeiro palpite.
inicio
pedir ao usuario para digitar numero de 1 a 10

*/


const sorte = Math.floor(Math.random() * 10 + 1);
cont = 0
let resp = '';

console.log(`sorte: `, sorte) // aqui mostra o numero da sorte

while(cont < 2){
    const num = parseInt(prompt('Digite um numero de 1 a 10'))
    console.log('cont: ', cont)

    if(num == sorte){
        resp = 'Acertou, miseravi!'
        break;
    }else{
        if(sorte > num){
            alert('Sorte é maior')
            resp ="digite novamente um numero de acordo com a dica"
        }else{
            alert('Sorte é menor')
            resp = 'Errou'
        }
    }
    cont= cont + 1
}alert(`Voce ${resp} a sorte era ${sorte}`)


/*
if (num == sorte) {
    alert(`Parabéns você acertou! O número é ${num}`)
} else {
    if (sorte > num)
        alert('sorte é maior que numero digitado, tente novamente')
        else alert('sorte é menor tente novamente')
const num2 = parseInt(prompt('Digite um numero de 1 a 10'))
        //console.log('sorte dentro else: ', sorte)
    }if (num2 == sorte) {
        alert(`Parabéns você acertou! O número é ${sorte}`)
    }
    else {
        alert('não foi dessa vez :(')
    }

}