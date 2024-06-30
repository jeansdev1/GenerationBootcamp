const leia = require('readline-sync')

console.log('\n **************** PESQUISA LGBTQIA+ ****************')
console.log('\n **************** DE FUNCIONARIOS DEV ****************')
console.log('\n **************** BOLSA BRASIL BALCAO - B3  ****************')
let continua = true
var pessoasBackEnd = 0, cisTransFront = 0, cisTransMob40 = 0, naoBinFull30 = 0, totalPessoasPesq = 0, mediaIdadePesq = 0, contadorIdade = 0

while (continua) {
    idade = leia.questionInt('\n Digite a idade do Colaborador:  ', { limitMessage: ' Numero invalido' })

    console.log('\n **************** Identidade de Genero  ****************')
    console.log('\n **************** Apenas Numeros:  ****************')
    console.log('\n **************** 1 = Mulher Cis  ****************')
    console.log('\n **************** 2 = Homem Cis  ****************')
    console.log('\n **************** 3 = Nao binario  ****************')
    console.log('\n **************** 4 = Mulher Trans  ****************')
    console.log('\n **************** 5 = Homen Trans  ****************')
    console.log('\n **************** 6 = Outros  ****************')

    console.log('\n **************** Apenas Numeros:  ****************')
    identidadeGen = leia.questionInt('\n Identidade de genero de 1 - 6:  ', { limitMessage: 'Valor Invalido' })

    console.log('\n **************** 1 = Backend  ****************')
    console.log('\n **************** 2 = Frontend  ****************')
    console.log('\n **************** 3 = Mobile  ****************')
    console.log('\n **************** 4 = Fullstack  ****************')
    pessoaDev = leia.questionInt('\n Agora Digite o cargo de 1 - 4:  ', { limitMessage: 'Valor Invalido' })

    totalPessoasPesq++;
    contadorIdade += idade

    if ((identidadeGen === 1 || identidadeGen === 4) && (pessoaDev === 2)) {
        cisTransFront++;
    } else if ((identidadeGen === 2 || identidadeGen === 4) && (pessoaDev === 3 && idade > 40)) {
        cisTransMob40++;
    } else if ((identidadeGen === 3 && pessoaDev === 4) && (idade < 30)) {
        naoBinFull30++;
    } else if (pessoaDev === 1) {
        pessoasBackEnd++;
    }

    continua = leia.keyInYNStrict('Deseja continuar a leitura dos dados de um novo colaborador?? ')
}

mediaIdadePesq = contadorIdade / totalPessoasPesq

console.log('\n O numero de pessoas dev Back End : ', pessoasBackEnd)
console.log('\n O numero de Mulheres Cis e Trans Dev Front End : ', cisTransFront)
console.log('\n O numero de Homem Cis e Trans Dev Mobile + 40 Anos : ', cisTransMob40)
console.log('\n O numero de Nao Binarios Dev Fullstack - 30 Anos : ', naoBinFull30)
console.log('\n O numero Total de pessoas que responderam a pesquisa : ', totalPessoasPesq)
console.log('\n A media da idade de pessoas que responderam a pesquisa: ', mediaIdadePesq)
console.log('Fim da pesquisa! ')
