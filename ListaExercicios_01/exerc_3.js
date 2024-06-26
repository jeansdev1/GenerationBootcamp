const leia = require('readline-sync');

let salarioBruto = leia.questionInt('Digite o salario: ');

console.log('O salario digitado foi:  ', salarioBruto)

let adicionalNoturno = leia.questionInt('Digite o adicional: ');

console.log('O adicional digitado foi: ', adicionalNoturno)

let horasExtras = leia.questionInt('Digite as horas extras: ');

console.log('As horas extras digitadas foram:  ', horasExtras)

let descontos = leia.questionInt('Digite os descontos: ');

console.log('Os descontos digitados foi: ', descontos)




salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5)- descontos;
console.log('O salario liquido eh: ','R$', salarioLiquido);
