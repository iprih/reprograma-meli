/*Solicite que o usuário digite um número. Informe então se este número é par ou ímpar.
inicio
usuario digita numero
se o resto da divisao do numero for == 0 entao é par
%2
se nao eh impar

*/


const n1 = parseInt(prompt('Digite um numero para saber se é par ou impar: '));

if(n1%2 == 0){
    alert(` O ${n1} é par` )

}else{
    alert(`O ${n1} é impar`)
}


