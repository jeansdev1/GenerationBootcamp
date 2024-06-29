const leia = require('readline-sync')

let numero = leia.questionInt('Digite um numero por gentileza:  ',{limitMessage: 'valor incorreto'})

if (numero > 0 && numero % 2 === 0){
    console.log('\n O numero e POSITIVO, e eh um numero PAR ')
}else if(numero > 0 && numero % 2 != 0){
    console.log('O numero e POSITIVO, e eh um numero IMPAR')
}else if(numero < 0 && numero % 2 === 0){
    console.log('O numero e NEGATIVO, e eh um numero PAR')
}else if(numero < 0 && numero % 2 != 0){
    console.log('O numero e NEGATIVO, e eh um numero IMPAR')
}

console.log('\n Fim do programa de testes :)')