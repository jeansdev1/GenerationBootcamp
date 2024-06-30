const leia = require('readline-sync')

let resulDoacao;
let nome = leia.question('\n  Digite o nome do Doador :  ')
let idade = leia.questionInt('\n  Digite a idade do Doador :  ')


if (idade > 18 && idade < 60 ){
    console.log(nome, 'apto! ')
} 
if (idade > 60 && idade < 69){
    let doacao = leia.question('\n Ja doou sangue antes? Responda com S ou N').toUpperCase();
    if(doacao === 'S'){
        resulDoacao = true
    }else{
        resulDoacao = false
    }
    if (resulDoacao == true){
        console.log(nome, 'Esta apto para doar sangue')    
    }else{
        console.log(nome, 'Nao esta apto!')
    }
}

