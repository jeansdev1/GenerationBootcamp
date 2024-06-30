const leia = require('readline-sync')

let matrizInteiros = new Array(3)

elementosPrincial = Array(3)
elementosSecundario = Array(3)
soma = 0

for (i = 0; i < matrizInteiros.length; i++) {
    matrizInteiros[i] = new Array(3);
}
for (let i = 0; i < matrizInteiros.length; i++) {
    for (let indiceColuna = 0; indiceColuna < matrizInteiros.length; indiceColuna++) {
        matrizInteiros[i][indiceColuna] = leia.questionInt(
            `Digite um numero do elemento [${i}][${indiceColuna}]: `
        );
    }
}

console.log("\nDados - Matriz de Inteiros\n")

console.table(matrizInteiros)

for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++) {

    for (let indiceColuna = 0; indiceColuna < matrizInteiros.length; indiceColuna++) {
        if (indiceLinha === indiceColuna) {
            soma += matrizInteiros[indiceColuna][indiceLinha];
            elementosPrincial[indiceLinha] = soma;
        } else if ((indiceLinha + indiceColuna) == matrizInteiros - 1){
            soma += matrizInteiros[indiceColuna][indiceLinha];
            elementosSecundario[indiceLinha] = soma;
        }
        soma = 0;

    }
}
console.table(elementosPrincial)
console.table(elementosSecundario)