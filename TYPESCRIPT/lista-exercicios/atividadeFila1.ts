import { Queue } from "../interface/Queue";
import leia from 'readline-sync'

let fila = new Queue<string>();
let opcao;
let removerCliente: string
let continua = true

console.log('\n ********************************')
console.log(' 1 - Adicionar Cliente na Fila')
console.log(' 2 - Listar todos os Clientes ')
console.log(' 3 - Retirar Cliente da Fila ')
console.log(' 0 - Sair ')
console.log('\n ********************************')

do {
    let opcao = leia.questionInt('\n Entre com a opcao desejada: ')
    switch (opcao) {
        case 1:
            console.log('Fila:')
            let nome = leia.question('Digite o nome do clinte: ')
            fila.enqueue(nome)
            console.log('Cliente Adicionado!')
            break;
        case 2:
            fila.printQueue()
            break;
        case 3:
            if (fila.isEmpty()) {
                console.log('A fila esta Vazia')
                break;
            } else {
                fila.printQueue()
                console.log("\n Cliente Removido ", fila.dequeue());
                fila.printQueue()
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
