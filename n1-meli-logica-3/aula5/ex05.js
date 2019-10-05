const mulheres = [
  {
    user: 234,
    name: "Marcia",
    idade: 40,
    hobbies: ["estudar", "comer", "falar"]
  },
  {
    user: 235,
    name: "Lorena",
    idade: 20,
    hobbies: ["dançar", "assistir tv", "estudar"]
  },
  {
    user: 236,
    name: "Patricia",
    idade: 24,
    hobbies: ["correr", "acampar", "surfar"]
  },
  {
    user: 237,
    name: "Mariana",
    idade: 15,
    hobbies: ["skate", "bicicleta", "break dance"]
  },
  {
    user: 238,
    name: "Isis",
    idade: 34,
    hobbies: ["ler", "estudar", "discutir"]
  },
  {
    user: 239,
    name: "Pietra",
    idade: 23,
    hobbies: ["jogar dominó", "sinuca", "cartas"]
  }
]

// retore a mulher que tiver o user = 238

var encontra = mulheres.find(function(user) {
    return user === 238;
  });

console.log(encontra)

var encontra = mulheres.find(item => item.user===238)//se quiser encontrar so algo especifico é colocar no console log
console.log(encontra)
// retorne o nome das mulheres que gostam de estudar

var estudiosa = mulheres.filter(item => item.hobbies.indexOf('estudar')> -1)
console.log(estudiosa)