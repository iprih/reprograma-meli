const palavrinhas = [
  "bolacha",
  "biscoito",
  "bombom",
  "bala",
  "abestalhado",
  "MASSA",
  "pastilha"
]

const novaArr = palavrinhas.filter(item => item.length < 5)
console.log(novaArr)

// retorne palavras que tenham menos de 5 letras

