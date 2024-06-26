const leia = require('readline-sync');

v1 = leia.questionFloat('Digite o valor 1: ')
v2 = leia.questionFloat('Digite o valor 2: ')
v3 = leia.questionFloat('Digite o valor 3: ')
v4 = leia.questionFloat('Digite o valor 4: ')

let calculoValor = (v1 * v2) - (v3 * v4)
console.log('A diferenca eh: ', calculoValor)