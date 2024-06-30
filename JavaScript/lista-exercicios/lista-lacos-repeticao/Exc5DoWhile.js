// Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero
// seja digitado. Ao final, mostre na tela a soma de todos os números digitados, que
// sejam positivos. 

const leia = require('readline-sync');

let numeros;
contador = 0;

do{
numeros = leia.questionInt('Digite o primeiro numero:  ', { limitMessage: 'Digite um valor valido' })
if (numeros > 0){
    contador++
    soma = contador + numeros + numeros
}

}while(numeros != 0);

console.log('A soma dos números positivos é', soma);

console.log('FIM DO PROGRAMA!!!!!!!!!!!!!!')