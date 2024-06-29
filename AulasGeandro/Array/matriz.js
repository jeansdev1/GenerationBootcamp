const leia = require('readline-sync')


let matrizInteiros = Array(3);

for (i = 0; i < matrizInteiros.lenght; i++) {
    matrizInteiros[i] = Array(3)
}
for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++) {

    for (let indiceColuna = 0; indiceColuna < matrizInteiros.length; indiceColuna++) {
        matrizInteiros[indiceLinha][indiceColuna] = leia.questionInt('Digite um numero ')
    }
}
console.log(matrizInteiros)