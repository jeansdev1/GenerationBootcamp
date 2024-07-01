import readlinesync = require('readline-sync')

const cores: Array<string> = new Array<string>()
for (let i = 0; i < 6; i++) {
    i = cores.push(readlinesync.question('Digite a cor: '))
}

console.log('\n Lista todas as cores\n ')
for (let cor of cores)
    console.log(cor)

console.log('\n Ordena as cores \n')
for (let cor of cores.sort())
    console.log(cor)

