    let cont, nome, nome2, altura, altura2, soma;    
    nome2 = "";
    altura2 = 0; 
    cont = 0;
    soma = 0


    while (cont < 5){
         nome = prompt('Digite seu nome')
         altura = parseFloat(prompt('Digite sua altura, usando ponto')) 
        
        //console.log(altura)
        //console.log(nome)
        
    if(altura > altura2){
        nome2 = nome;
        altura2 = altura;

    } 
    soma = (soma + altura2);
    cont++;
    }
    media = (soma/5)
    document.write (`${nome2} é atleta com maior altura e tem ${altura2} e media ${media}`)