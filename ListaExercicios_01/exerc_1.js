const leia = require('readline-sync');

let salario = leia.questionInt('Digite o salario: ');
console.log('O salario digitado foi:  ', salario)

let abono = leia.questionInt('Digite o abono: ');
console.log('O abono digitado foi: ', abono)


novosalario = salario + abono;
console.log('O novo salario eh: ', novosalario);
