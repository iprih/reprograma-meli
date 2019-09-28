const r = require("readline-sync");
let nome = r.questionPath("digite seu nome");
console.log("ola" + nome);
let texto = "";

for(;texto ! = "Tchau";){
    let nome = r.questionPath("digite seu nome");
    console.log("vc digitou" + texto);
}