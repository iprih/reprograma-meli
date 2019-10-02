const dados = [
   ["Antonia Maria", "ar@gol.com", "Engenheira"],
   ["Joana Maranhão", "ar@gol.com", "Engenheira de software"],
   ["Juliana Paes", "argh@gol.com", "Advogada"],
   ["mariana DA SILVA", "mariana@gmail.com", "MEDICA"],
   ["MARINA BATISTA", "marina@gol.com", "professora"],
   ["Antonia Maria", "ari@gol.com", "cientista"]
 ];


 for(let i=0; i < dados.length ; i++){ // contador // linhas
    const col = []
    for(let j=0; j < dados.length ; j++){
        col [j] = count//coluna igual a contador para criar o looping
        count++ // decrementa
    } // colunas
    array[i]= col
}