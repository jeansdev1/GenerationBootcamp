const leia = require('readline-sync');

v1 = leia.questionFloat('Digite o valor 1: ',{limitMessage: 'numero invalido'})
v2 = leia.questionFloat('Digite o valor 1: ',{limitMessage: 'numero invalido'})
v3 = leia.questionFloat('Digite o valor 1: ',{limitMessage: 'numero invalido'})
v4 = leia.questionFloat('Digite o valor 1: ',{limitMessage: 'numero invalido'})


let calculoValor = (v1 * v2) - (v3 * v4)
console.log('A diferenca eh: ', calculoValor)