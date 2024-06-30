const leia = require('readline-sync');

let matrizInteiros = new Array(3);

for (let i = 0; i < matrizInteiros.length; i++) {
    matrizInteiros[i] = new Array(3);
}

for (let i = 0; i < matrizInteiros.length; i++) {
    for (let indiceColuna = 0; indiceColuna < matrizInteiros[i].length; indiceColuna++) {
        matrizInteiros[i][indiceColuna] = leia.questionInt(`Digite um numero do elemento [${i}][${indiceColuna}]: `);
    }
}

console.log("\nDados - Matriz de Inteiros\n");
console.table(matrizInteiros);

let somaPrincipal = 0;
let somaSecundaria = 0;
let elementosPrincial = [];
let elementosSecundario = [];

for (let i = 0; i < matrizInteiros.length; i++) {
    // Soma da diagonal principal
    somaPrincipal += matrizInteiros[i][i];
    elementosPrincial[i] = matrizInteiros[i][i];
    
    // Soma da diagonal secundária
    somaSecundaria += matrizInteiros[i][matrizInteiros.length - 1 - i];
    elementosSecundario[i] = matrizInteiros[i][matrizInteiros.length - 1 - i];
}

console.log("Elementos da Diagonal Principal:");
console.table(elementosPrincial);

console.log("Elementos da Diagonal Secundária:");
console.table(elementosSecundario);

console.log(`Soma da Diagonal Principal: ${somaPrincipal}`);
console.log(`Soma da Diagonal Secundária: ${somaSecundaria}`);
