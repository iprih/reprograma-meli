/*3) Crie um programa que pergunta ao usuário seu nome. 
Depois que o usuário digitar o nome, o programa deverá responder
 "Olá [nome]".
Enquanto usuário digitar qualquer palavra, print o que ele está digitando mas avise que para sair ele pode dizer "Tchau".
O programa vai dizer "Tchau [nome]" e finalizar o programa.
- Aqui você pode usar while ou do/while para resolver*/

const r = require("readline-sync");


function interacao() {
    let nome = r.question("Qual seu nome? ");
    console.log(`Ola ${nome}`);
    let palavras = r.question("Digite qualquer palavra, mas se quiser sair digite tchau! ");
    let tchau = "tchau"
    while (palavras != tchau) {

        palavras = r.question("Digite qualquer palavra, mas se quiser sair digite tchau! ");


    }
    console.log(`Tchau ${nome}`)
}

interacao();

/* codigo da prof
let nome = r.questiona("Digite seu nome: ")
console.log(`Ola ${nome}`)
let texto "";
do{
    texto = r.questiona("digite de novo mas se quiser sair digite tchau");
    console.log("voce digitou" + texto) 
} while (texto != "tchau");
console.log("tchau" + nome);




*/