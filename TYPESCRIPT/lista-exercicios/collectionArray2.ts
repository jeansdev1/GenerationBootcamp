import readlinesync = require('readline-sync')

// Duas formas, entradas de dados, ou sem entrada de dados! 
// const valoreInteiros: Array<number> = new Array<number>()
const valoreInteiros: Array<number> = new Array<number>(7, 2, 3, 4, 5, 6, 7, 8, 9, 10)


// for (let i = 0; i < 10; i++) {
// valoreInteiros.push(readlinesync.questionInt('\n Digite os valores: '))
// }

let encontrarNumero: number = 0
console.log(valoreInteiros)

encontrarNumero = readlinesync.questionInt('\n Digite o numero que voce deseja encontrar:  ')
if (valoreInteiros.includes(encontrarNumero)) {
    console.log(`O numero ${encontrarNumero} esta localizado na posicao ${valoreInteiros.indexOf(encontrarNumero)}`)
} else {
    console.log(`O numero ${encontrarNumero} nao foi encontrado`);
}




