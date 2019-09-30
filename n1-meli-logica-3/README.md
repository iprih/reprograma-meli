# n1-meli-logica-3
N1 | BackEnd | 2019 | Semana 4 | Lógica 3 | Mercado Livre


# Aula 1 

## Arrays 

Uma array é uma coleção ordenada de itens, onde cada item tem um índice(index). 
     
    const arr = ['esse é primeiro elemento', 'segundo elemento', 'último elemento'];

    console.log(arr[0]);              // logs 'esse é primeiro elemento'
    console.log(arr[1]);              // logs 'segundo elemento'
    console.log(arr[arr.length - 1]); // logs 'último elemento'
 
    *arrays em JavaScript tem o índice começando no zero.*  


   Arrays podem conter vários tipos de dados
```    
   const variavel = 'abc'
   const misturado = ['1', 2, 'três', false, variavel, 5.6];
   console.log(misturado) // logs ["1", 2, "três", false, "abc", 5.6]
```

#### métodos de Arrays

Objetos do tipo Array contém, além da propriedade length, inúmeras outras propriedades que se referem à valores de função(métodos).

Existem vários métodos já prontinhos que o JS nos dá 
para manipular dados de arrays. Eles são extremamente úteis e 
muito utilizados no dia-a-dia de pessoas desenvolvedoras. 

Alguns exemplos: 
concat, pop, join, push, split, splice, reverse, slice, indexof, typeof, trim... 
