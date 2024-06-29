const leia = require('readline-sync')

console.log('\n **************** Calculadora ****************')
console.log('\n **************** Digite dois numeros ****************')
numero1 = leia.questionInt('Digite o primeira valor:  ', { limitMessage: ' Numero invalido' })
numero2 = leia.questionInt('Digite o segundo valor:  ', { limitMessage: ' Numero invalido' })
console.log('\n **************** Escolha a operacao: + - * / ****************')
console.log('\n **************** 1 = Somar  ****************')
console.log('\n **************** 2 = Subtracao   ****************')
console.log('\n **************** 3 = Multiplicacao  ****************')
console.log('\n **************** 4 = Divisao  ****************')
operacao = leia.questionInt()

switch (operacao) {
    case 1:
        calculo = numero1 + numero2
        console.log('Calculo: ', numero1, '+' , numero2, '=', calculo)
        break;
    case 2:
        calculo = numero1 - numero2
        console.log('Calculo: ', numero1, '-' , numero2, '=', calculo)
        break;
    case 3:
        calculo = numero1 * numero2
        console.log('Calculo: ', numero1, '+' ,numero2, '=', calculo)
        break;
    case 4:
        calculo = numero1 / numero2
        console.log('Calculo: ', numero1, '+', numero2, '=', calculo)
        break;  
    default:
        console.log('Operacao Invalida')
}
console.log('FIM! ')
