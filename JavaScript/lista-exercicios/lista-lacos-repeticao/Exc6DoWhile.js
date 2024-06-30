const leia = require('readline-sync');

let numeros
let mediaMultiplo = 0
let contador = 0
let somaNumeros = 0

do{numeros = leia.questionInt('\n Digite os numeros ate que 0 seja digitado:  ', { limitMessage: 'Digite um valor valido' })


if (numeros % 3 === 0 && numeros > 0){
    contador++
    // console.log(contador)
    somaNumeros += numeros
    // console.log(somaNumeros)

}
}while(numeros != 0);

mediaMultiplo = somaNumeros / contador
console.log(somaNumeros)
console.log(contador)
console.log('A media de todos os numeros multiplos de 3 : ', mediaMultiplo);

console.log('FIM DO PROGRAMA!!!!!!!!!!!!!!')