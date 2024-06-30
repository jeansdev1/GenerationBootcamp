const leia = require('readline-sync')

let vetor = []
let contador = 0
let soma = 0
let inserirValor = 0
let mediaVetor = 0
let elementosPares = []
let elementosImpares = []

for (i = 0; i <= 9; i++) {
    vetor[i] = leia.questionInt('Preencha o vetor abaixo :) \n')
    contador++;
    soma += vetor[i]
    if (vetor[i] % 2 === 0) {
        elementosPares.push(vetor[i]);
    } 
    if (i % 2 !== 0) {
        elementosImpares.push(vetor[i]);
    }
}

mediaVetor = soma / contador
console.log('\n Elementos nos indices Impares: ', elementosImpares.join(' - '))
console.log('\n Elementos Pares: ', elementosPares.join(' , '))
console.log('\n Soma:',soma)
console.log('\n Media:',mediaVetor)
console.log('\n ***********  Fim do programa  *************')
