const leia = require('readline-sync')

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]

vetorNumero = leia.questionInt(' Digite o numero que voce deseja encontrar \n',
    { lmitiMessage: 'Valor invalido! ' })

if(vetor.includes(vetorNumero)){
    console.log('O numero', vetorNumero, 'Esta localizado na posicao', vetor.indexOf(vetorNumero))
}else{
    console.log('O numero ', vetorNumero, 'nao foi encontrado! ')
}


//Outra forma de fazer essa verificacao.


// let indices = vetor.indexOf(vetorNumero)

// if(indices !== -1){
//     console.log("O número " + vetorNumero + " existe no índice " + indices + " do vetor.");
// }else{
//     console.log('O numero ', vetorNumero, 'nao foi encontrado! ')
// }

