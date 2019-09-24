/*2. Escrever um algoritmo que leia dois valores inteiro distintos e informe qual deles é o maior.
inicio
ler primeiro numero
ler segundo numero
informar qual dos dois eh maior
fim
*/


const n1 = parseInt(prompt('Digite o primeiro número: '));
const n2 = parseInt(prompt('Digite o segundo número: '));


if(n1>n2){
    alert(` ${n1} é maior que ${n2}, ou seja, o primeiro número é maior que o segundo`)
    }else{
        alert(`${n1} é menor que ${n2}, ou seja, o segundo número é maior que o primero`)
    }


