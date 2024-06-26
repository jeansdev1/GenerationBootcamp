const leia = require('readline-sync');

n1 = leia.questionFloat('Digite a nota 1: ')
n2 = leia.questionFloat('Digite a nota 2: ')
n3 = leia.questionFloat('Digite a nota 3: ')
n4 = leia.questionFloat('Digite a nota 4: ')

let result = (n1+n2+n3+n4) /4
console.log('A media final eh', result.toFixed(1))
