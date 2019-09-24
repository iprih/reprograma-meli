/*
1. Faça um algoritmo que receba um número e mostre uma mensagem caso este número seja maior que 10.
inicio
    receber numero
    se numero > 10
        'numero é maior que 10'
    se não 
        'numero não é maior que 10'
fim
*/

const n1 = parseInt(prompt('Digite um número: '));
if(n1>10){
    alert(`O numero ${n1} é maior que 10`)
}else{
    if(n1 === 10){
        alert(`O numero ${n1} é igual 10`)
    }else{
        alert(`O numero ${n1} não é maior e nem igual a 10`)
    }

}

