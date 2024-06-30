// Escreva um algoritmo, que leia 10 números inteiros via teclado e mostre na tela
// quantos números são pares e quantos número são ímpares


const leia = require('readline-sync');

var numeros;
var contador1 = 0
var contador2 = 0

for (i = 0; i < 10; i++) {
    let numeros = leia.questionInt('Digite os numeros: ')
    if (numeros % 2 === 0) {
        contador1 = 1 + contador1
    } else if (numeros % 2 === 1) {
        contador2 = 1 + contador2
    }
}
console.log('Total de numero pares:  ', contador1);
console.log('Total de numero impares:  ', contador2);

console.log('FIM DO PROGRAMA!!!!!!!!!!')