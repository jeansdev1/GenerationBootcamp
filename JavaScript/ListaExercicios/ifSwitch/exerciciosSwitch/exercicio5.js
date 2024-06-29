const leia = require("readline-sync");

console.log("# ## ### ####    Bem vindo a sua conta bancaria    #### ### ## #");
console.log("# ## ### ####    O que gostaria de fazer hoje?     #### ### ## #");
console.log("1 - SALDO");
console.log("2 - SAQUE");
console.log("3 - DEPOSITO");


let contaCorrente = 1000;
let novoSaldo;


acaoCliente = leia.questionInt('Digite o que ira fazer  : \n');

switch (acaoCliente) {
    case 1:
        console.log('O seu saldo na Conta Corrente é',
            new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(contaCorrente))
        break;
    case 2:
        valorDeSaque = leia.questionInt(' Digite valor de Saque: \n')
        if (valorDeSaque > contaCorrente){
            console.log('Saldo Insuficiente')
        }else if(valorDeSaque < 0){
            console.log('Valor Invalido, precisa ser positivo')
        }else{
            novoSaldo = contaCorrente - valorDeSaque
            console.log('O seu novo saldo na Conta Corrente é',
            new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(novoSaldo))   
            }break;
    case 3:
        depositoCliente = leia.questionInt('\n Digite o valor a depositar:  \n')
        contaCorrente = depositoCliente + contaCorrente
        console.log('O seu novo saldo na Conta Correto é',
            new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(contaCorrente)) 
        break;
}
