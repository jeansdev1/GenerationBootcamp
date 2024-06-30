const leia = require('readline-sync')

nome = leia.question('Digite o nome do colaborador:  \n')
console.log('**** Cargo 1 = Gerente')
console.log('**** Cargo 2 = Vendedor')
console.log('**** Cargo 3 = Supervisor')
console.log('**** Cargo 4 = Motorista')
console.log('**** Cargo 5 = Estoquista')
console.log('**** Cargo 6 = Tecnico de TI')

cargo = leia.questionInt('Digite o Cargo do colaborador \n')
salario = leia.questionInt('Digite o salario do colaborador:  \n')

let percentual = 0
let reajuste
let novoSalario

switch (cargo){
    case 1:
        percentual = 0.10
        reajuste = salario * percentual
        novoSalario = salario + reajuste
        console.log('Nome' , nome, 'cargo:Gerente \n', 'Novo salario: \n' , novoSalario)
        break;
    case 2:
        percentual = 0.07
        reajuste = salario * percentual
        novoSalario = salario + reajuste
        console.log('Nome' , nome, 'cargo:Gerente \n', 'Novo salario: \n' , novoSalario)
        break;
}

