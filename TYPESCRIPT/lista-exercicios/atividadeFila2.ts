import { Queue } from "../interface/Queue";
import leia from 'readline-sync'
import { Stack } from "../interface/Stack";

let livros = new Stack<string>();
let opcao;
let removerCliente: string
let continua = true

console.log('\n ********************************')
console.log(' 1 - Adicionar Livro na pilha')
console.log(' 2 - Listar todos os livros ')
console.log(' 3 - Retirar Livros da pilha ')
console.log(' 0 - Sair ')
console.log('\n ********************************')

do {
    let opcao = leia.questionInt('\n Entre com a opcao desejada: ')
    switch (opcao) {
        case 1:
            let nome = leia.question('Digite o nome do Livro: ')
            livros.push(nome)
            console.log('\n Livro adicionado!')
            break;
        case 2:
            console.log('Lista de livros: \n')
            livros.printStack()
            break;
        case 3:
            if (livros.isEmpty()) {
                console.log('A livros esta Vazia')
                break;
            } else {
                livros.printStack()
                console.log("\n Livro removido! ", livros.pop());
                livros.printStack()
                break;
            }
        case 0:
            continua  = false
            break;    
        default:
            console.log('\n Opcao Invalida! ')
            break;
    }
} while (continua)
