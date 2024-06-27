const leia = require("readline-sync");

let opcao;

console.log("# ## ### #### #########   Menu   ########## #### ### ## #");
console.log("\n Digite o codigo do produto entre 1 e 6 da tabela abaixo");
console.log("\n 1 = cachorro quente = R$ 10,00 ");
console.log("\n 2 = X-Salada = R$ 15,00 ");
console.log("\n 3 = X-Bacon = R$ 18,00 ");
console.log("\n 4 = Bauru = R$ 12,00 ");
console.log("\n 5 = Refrigerante = R$ 8,00 ");
console.log("\n 6 = Suco de Laranja = R$ 13,00 ");

opcao = leia.questionInt();

switch (opcao) {
    case 1:
        opcao = 10
        console.log(`Cachorro quente! O valor eh R$ 10,00`);
        break;
    case 2:
        opcao = 15
        console.log(`X-Salada, o valor eh R$ 15,00`);
        break;
    case 3:
        opcao = 18
        console.log(`X-Bacon, o valor  eh R$ 18,00 `);
        break;
    case 4:
        opcao = 12
        console.log('Bauru, o valor eh R$ 12,00')
        break;
    case 5:
        opcao = 8
        console.log('Refrigerante o valor eh R$ 8,00')
        break;
    case 6: 
    opcao = 13
    console.log('Suco de laranja o valor eh R$ 13,00')
    break;
}
console.log('\n Digite a Quantidade comprada');
quantidade = leia.questionInt();


valorTotal = opcao * quantidade
console.log('O valor total a pagar eh', valorTotal)
console.log('Volte Sempre que quiser! Estamos a disposicao')