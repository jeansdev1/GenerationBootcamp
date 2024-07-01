import readlinesync = require('readline-sync')


let numero1: number;
let numero2: number;


numero1 = readlinesync.questionFloat('digite o 1: ')
numero2 = readlinesync.questionFloat('digite o 2: ')

console.log(`\n Soma: ${numero1} + ${numero2} = ${numero1 + numero2}`);
console.log(`\n Sub: ${numero1} - ${numero2} = ${numero1 - numero2}`);
console.log(`\n Multiply: ${numero1} * ${numero2} = ${numero1 * numero2}`);
console.log(`\n Divid: ${numero1} / ${numero2} = ${numero1 / numero2}`);
