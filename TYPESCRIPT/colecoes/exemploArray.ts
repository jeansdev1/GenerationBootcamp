import readlinesync = require('readline-sync')

const numeros: Array<number> = new Array<number>();

numeros.push(readlinesync.questionFloat('digite o valor'))

// adiciona valores nos primeiros indices
numeros.unshift(2.5, 2.7, 8)


// percorrer o array e printa os numeros em linhas

for(let numero of numeros)
    console.log(numero)

console.log(numeros)


// atualizacao de valor
numeros[numeros.indexOf(5)] = 10 ;

console.table(numeros);

// numeros.splice(numeros.indexOf(10), 1);