import readlinesync = require('readline-sync')

const valoreInteiros: Array<number> = new Array<number>()
let encontrarNumero: number = 0

for (let i = 0; i < 10; i++) {
    valoreInteiros.push(readlinesync.questionInt('\n Digite os valores: '))
}

console.log(valoreInteiros)
encontrarNumero = readlinesync.questionInt('\n Digite o numero que voce deseja encontrar:  ')
if (valoreInteiros.includes(encontrarNumero)){
    console.log(`O numero ${encontrarNumero} esta localizado na posicao ${valoreInteiros.indexOf(encontrarNumero)}`)
}else{
    console.log(`O numero ${encontrarNumero} nao foi encontrado`);
}




