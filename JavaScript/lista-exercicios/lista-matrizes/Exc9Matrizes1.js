const leia = require('readline-sync')

let matrizesInteiros = Array(3)

for (let indiceLinha = 0; indiceLinha < matrizesInteiros.length; indiceLinha++) {
    matrizesInteiros[indiceLinha] = new Array(3)
}

console.log(matrizesInteiros)

for (let indiceLinha = 0; indiceLinha < matrizesInteiros.length; indiceLinha++) {
    for (let indiceColuna  = 0; indiceColuna < matrizesInteiros[indiceLinha].length; indiceColuna++){
        matrizesInteiros[indiceLinha][indiceColuna] = leia.questionInt(`Preencha o numero do elemento [${indiceLinha}] [${indiceColuna}]`)
    }
}   
console.table(matrizesInteiros)