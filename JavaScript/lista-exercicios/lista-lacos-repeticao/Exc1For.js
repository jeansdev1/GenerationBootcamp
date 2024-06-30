const leia = require('readline-sync');
let numero1;
let numero2;

numero1 = leia.questionInt('Digite o primeiro numero:  ', { limitMessage: 'Digite um valor valido' });
numero2 = leia.questionInt('Digite o primeiro numero:  ', { limitMessage: 'Digite um valor valido' });
if (numero1 > numero2) {
    console.log('ERRO, INTERVALO INVALIDO');
}

for (i = numero1; i <= numero2; i++){   
    if(i % 3 === 0 && i % 5 === 0){
    i;
    console.log(i,'E multiplo de 3 e 5')
    }
}

console.log('FIM DO PROGRAMA!!!!!!!!!!!!!!!!!!!!!! ')