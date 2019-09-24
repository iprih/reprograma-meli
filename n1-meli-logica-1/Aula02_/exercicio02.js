/*1.1. Escreva um programa que sorteia um número de 1 a 10, 
dá duas chances para que o usuário acerte, mas informa se o número sorteado é maior ou menor que o primeiro palpite.
inicio
pedir ao usuario para digitar numero de 1 a 10

*/

const num = parseInt(prompt('Digite um numero de 1 a 10'));

//aqui eu gero numero randomico
const sorte = Math.floor(Math.random()*10+1);
console.log('sorte fora do if e else: ', sorte)

//verifico pela primeravez que ela caertou 
if(num > sorte){
    alert(`O primeiro numerp é maior que o numero da sorte ${num}`)
}
//verifico pela segunda vez
else{
    
    //dou mais uma chance ao usuario
    const num2 = parseInt(prompt('Digite um numero de 1 a 10'));
    console.log('sorte dentro else: ', sorte)

    //verifico se ele acertou dessa vez
    if(num2 == sorte){
        alert(`Parabéns você acertou! O número é ${sorte}`)
    }
    // o usuario errou nas duas tentivas
    else{
        alert('não foi dessa vez :(')
    }

}