/*
1. Escreva um programa que solicita o nome e a altura de 5 atletas. 
Ao final da entrada de dados, informe A ALTURA do atleta mais alto. 

    1.1. Complemente o exercício anterior agora informando o NOME e a ALTURA do atleta mais alto. 

    1.2 informe também a altura média destes 5 atletas. 

    1.3 não restrinja a entrada de dados a apenas 5 atletas. Agora após a inclusão de cada atleta o programa deve perguntar ao usuário se deseja incluir outro. 
    A resposta é dada com (S/N). O programa continua mostrando o nome do mais alto, e a altura média.
        
    INICIO
    Solicitar a 5 pessoas que digam o nome e altura 
    Verificar qual é a pessoa mais alta
    
    FIM
    
 /

   
    const nome = prompt('Digite seu nome');
    const altura = parseFloat(prompt('Digite sua altura, usando ponto'));
    
    let cont = 0;

    while (cont < 5){
        const nome = prompt('Digiteseu nome');
        const altura = parseFloat(prompt('Digite sua altura, usando ponto')); 
        cont = cont + 1   
        console.log(altura)
        console.log(nome)
        if(altura > 0){

        }
    }




*/



    let cont, nome, nome2, altura, altura2;    
    nome2 = "";
    altura2 = 0; 
    cont = 0

    while (cont < 5){
         nome = prompt('Digite seu nome')
         altura = parseFloat(prompt('Digite sua altura, usando ponto')) 
        
        //console.log(altura)
        //console.log(nome)
        
    if(altura > altura2){
        nome2 = nome;
        altura2 = altura;
    } 
    cont++;
    }
    document.write (`${nome2} é atleta com maior altura e tem ${altura2}`)


