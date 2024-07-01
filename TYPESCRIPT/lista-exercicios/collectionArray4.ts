import readlinesync = require('readline-sync')

const valoreInteiros: Set<number> = new Set<number>()
let encontrarNumero: number = 0

for (let i = 0; i < 10; i++) {
    valoreInteiros.add(readlinesync.questionInt('\n Digite os valores: '))
}

console.log(valoreInteiros)
encontrarNumero = readlinesync.questionInt('\n Digite o numero que voce deseja encontrar:  ')
if (valoreInteiros.has(encontrarNumero)){
    console.log(`O numero ${encontrarNumero} foi encontrado`)
}else{
    console.log(`O numero ${encontrarNumero} nao foi encontrado`);
}




