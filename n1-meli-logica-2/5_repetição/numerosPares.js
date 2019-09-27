/*1) Crie um programa para printar todos os números pares de 1 a 100.
- Números pares são todos os números que dividos por 2 tem resto 0
- Qual operador que retorna o resto da divisão? Vamos usar ele!*/

//num % 2 === 0 = par

for(let num = 1; num % 2 ===0; num++){
    if (num <= 100){ 
    console.log(`O numero ${num} é par`)
    }
    num++
};

/* codigo da prof
for (let i=1; i<=100; i++){
    if (i %2===0){
        console.log(`O numero ${num} é par`);

    }
}
*/