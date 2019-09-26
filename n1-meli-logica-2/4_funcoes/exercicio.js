/*A Lumelância esta precisando de uma calculadora basica para auxiliar seus prestadores.
O usuário deverá digitar:
    - qual operação quer fazer (somar, subtrair, multiplicar e dividir)
    - qual é o valor 1
    - qual é o valor 2 
Crie um funções para calcular cada uma das operações.
De acordo com a operação escolhida, utilize o switch para escolher a operação e printar o resultado.
Caso o usuário não escolha nenhuma, deve mostrar "Operação inválida".*/

var r = require("readline-sync");

function calculadora(){
    var v1 = parseInt(r.question("Digite um valor: "));
    var v2 = parseInt(r.question("Digite outro valor: "));
    var escolha = r.question("Digite o operador para realizar o calculo (+,-,*,/): ");
    //colocar a variavel que está avaliando
    switch(escolha){
        case '+':
            console.log(`A soma é ${v1+v2}`)
            break;
        case '-':
            console.log(`A subtração é ${v1-v2}`)
            break;
        case '*':
            console.log(`A multiplicacao é ${v1*v2}`)
            break;
        case '/':
            console.log(`A divisao é ${v1/v2}`)
            break;
        default:
            console.log("O operador digitado é invalido, tente novamente.")      
    }
}

calculadora(); // chama a funcao // se tiver parametro coloca o parametro desejado