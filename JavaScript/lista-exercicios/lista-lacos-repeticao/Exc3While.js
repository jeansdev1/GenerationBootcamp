// Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros),
//  via teclado e mostre na tela o total de pessoas cuja idade seja menor que 
//  21 anos e o total de pessoas cuja idade, seja maior que 50 anos. 
//  A leitura dos dados deve ser finalizada ao digitar uma idade negativa. 

const leia = require('readline-sync');

let idade = true;
let contador1 = 0 
contador2 = 0
 
while(idade > 0){
idade = leia.questionInt('Digite a idade das pessoas:  ');
    if (idade > 0 && idade <= 21){
        contador1 ++
    }else if(idade >= 50){
        contador2 ++
    }
}
console.log('Total de pessoas abaixo de 21 anos ', contador1);
console.log('Total de pessoas acima de 50 anos ', contador2);

console.log('FIM DO PROGRAMA!!! ')

