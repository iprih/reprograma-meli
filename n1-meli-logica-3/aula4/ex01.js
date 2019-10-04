// 1- Crie uma função construtora para Terreno, cada terreno deve ter:
// largura, comprimento, area(largura x comprimento)
//area vai ser a multiolicação

function Terreno(largura, comprimento){
    this.largura = largura
    this.comprimento = comprimento
    this.area = largura*comprimento
}

// 2 crie métodos usando o prototype, eles devem ser:
// - calcularPreco -> que vai ser a area x 1000 reais.
// - mostrarInfos -> que mostrar a area e o preço do terreno.

Terreno.prototype.calcularPreco = function() {
    this.preco = this.area*1000 //tem que colocar o this porque vc nao tem variavel area
    // aqui pode colocar o return preco
    }

Terreno.prototype.mostrarInfos = function() {
    console.log(`A area é ${this.area} e o preco é ${this.preco}`)
    }

// 3 - Crie 5 instancias do terreno, usando o operador new. ex: const t1 = new Terreno(arg1, arg2)

const terreno1 = new Terreno(30,40)
const terreno2 = new Terreno(30,40)
const terreno3 = new Terreno(25,30)
const terreno4 = new Terreno(10,20)
const terreno5 = new Terreno(40,50)

// 4 - use a função calcular preco para que todas as instancias tenham seus precos.
 
terreno1.calcularPreco()
terreno2.calcularPreco()
terreno3.calcularPreco()
terreno4.calcularPreco()
terreno5.calcularPreco()
//console.log(terreno1)

// 5 - crie uma array vazia chamada terrenos.
const terrenos = [];

// 6 - insira as instancias criadas(que os precos já tenham sido calculados) na array terrrenos.
terrenos.push(terreno1,terreno2,terreno3,terreno4,terreno5)
//console.log(terrenos)

// 7 - Imprima na tela o último terreno da array terrenos.
console.log(terrenos[terrenos.length-1])

// 8 - Imprima a area do terceiro item da array terrenos
console.log(terrenos[2].area)

// 9 - (for in/map) Usando um loop, execute o método mostrarInfos de todos os terrenos.
const todos = terrenos.map(function(itens){
    console.log(itens.mostrarInfos())
})

//a prof fez em for in (for in intera e for of mostra)
// for(const item of terrenos){
//     console.log(item.mostrarInfos())
// }

// 10 - Crie uma função que vai receber a array de objetos e vai ordenar a lista do mais barato para o mais caro.


function ordenaTerrenos(arrTerrenos){
    const ordenados = arrTerrenos.sort(function(a, b){
        return a.preco - b.preco
    })
    console.log(ordenados)
}
ordenaTerrenos(terrenos)

// 11 - Crie uma função que Imprima o mais barato


// 12 - Crie uma função que Imprima o mais caro.
