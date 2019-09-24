/*Escreva um programa que sorteia um número de 1 a 10 e dá duas chances para que o usuário acerte.
Inicio
pegar o numero do usuario
gerar um numero aleatorio
comparar se o numero do usuario eh igual ao numero aleatorio 
se for igual dá parabens e diz que ta rico
se for diferente 
cliente digita o numero de novo
e se acertar da parabens
senao tenta de novo
fim
*/
const sorte = Math.floor(Math.random()*10+1); //
const num_usuario =parseInt(prompt('Digite um número de 1 a 10'));
num_usuario2 =parseInt(prompt('Tente outra vez'));


if(num_usuario == sorte){
    alert(`Parabens voce acertou, o numero da sorte é ${sorte} `)
}else{
    num_usuario2; //aqui pega o prompt de denovo, porém ele pega o mesmo numero, ou seja, tem que redeclarar a variavel
   
    //colocamos o if dentro do mesmo bloco pra ele nao pegar outro numero de sorte
    if(num_usuario2 == sorte){
        alert(`Parabens voce acertou, o numero da sorte é ${sorte} `)
    }else{
        alert(`Já era! o numero da sorte era ${sorte}`)
    }
}



