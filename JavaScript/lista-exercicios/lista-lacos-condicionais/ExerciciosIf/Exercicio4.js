const leia = require('readline-sync')

console.log('********************* TIPO DE ANIMAL **********************')

let tipoVerInv = leia.question('Vertebrado ou Invertebrado? \n').toUpperCase();


if (tipoVerInv === 'VERTEBRADO') {
    let tipoAveOuMami = leia.question('Ave ou Mamifero? \n').toUpperCase();
    if (tipoAveOuMami === 'AVE') {
        let tipoCarnOuOniv = leia.question('Carnivoro Ou Onivoro \n').toUpperCase();
        if (tipoCarnOuOniv === 'CARNIVORO') {
            console.log('Animal : Aguia')
        } else {
            console.log('Animal: Pomba')
        }
    } else {
        let tipoOnivHerbiv = leia.question('Onivoro ou Herbivoro \n').toUpperCase();
        if (tipoOnivHerbiv === 'ONIVORO') {
            console.log('Animal: Homem')
        } else {
            console.log('Animal: Vaca')
        }
    }
}else{
    let tipoInsAnel = leia.question('Inseto Ou Anelidio \n').toUpperCase();
    if (tipoInsAnel === 'INSETO'){
        let tipoHematOuHerb = leia.question('Hematofogo Ou Herbivoro \n').toUpperCase();
        if (tipoHematOuHerb === 'HEMATOFOGO'){
            console.log('Animal: Pulga')
        }else{
            console.log('Animal: Lagarta')
        }
    }else{
        let tipoHematOuOnivo = leia.question('Hematofogo ou Onivoro \n').toUpperCase();
        if (tipoHematOuOnivo === 'HEMATOFOGO'){
            console.log('Animal: Sanguessuga')
        }else{
            console.log('Animal: Minhoca')
        }
    }
}
console.log('FIM DA VERIFICAO ANIMALESCA! ')