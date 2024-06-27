const leia = require("readline-sync");

console.log("# ## ### ####    Bem vindo a sua conta bancaria    #### ### ## #");
console.log("# ## ### ####    O que gostaria de fazer hoje?     #### ### ## #");
console.log("1 - SALDO");
console.log("2 - SAQUE");
console.log("3 - DEPOSITO");


let contaCorrente = 1000;

acaoCliente = leia.questionInt('Digite o que ira fazer');
switch(acaoCliente){
    case 1:
        console.log('\n Bom dia sr. O seu saldo eh:  ', contaCorrente)
        break;
    case 2:
        valorDeSaque = leia.questionInt('\n Digite valor de Saque')
        if (valorDeSaque > contaCorrente)
            console.log('Saldo Insuficiente')
        else
            console.log('\n Seu novo saldo eh', contaCorrente - valorDeSaque)
        break;
    case 3:
        depositoCliente = leia.questionInt('\n Digite o valor a depositar:  ')
        contaCorrente = depositoCliente + contaCorrente
        console.log('Seu novo saldo eh: ', contaCorrente)
        break;
}
