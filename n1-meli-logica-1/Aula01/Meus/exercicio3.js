/*Altere o exercício anterior de forma que ele informe também se os números são iguais.
inicio

ler primeiro numero
ler segundo numero
informar qual dos dois eh maior
se nao for verificar se sao iguais
fim
*/


const n1 = parseInt(prompt('Digite o primeiro número: '));
const n2 = parseInt(prompt('Digite o segundo número: '));


if(n1>n2){
    alert(` ${n1} é maior que ${n2}, ou seja, o primeiro número é maior que o segundo`)
}else{
    if(n1===n2){
        alert(`${n1} é igual a ${n2}, ou seja, eles são iguais`)
    }else{
        alert(`${n1} é menor que ${n2}, ou seja, o segundo número é maior que o primero`)
    }
}


