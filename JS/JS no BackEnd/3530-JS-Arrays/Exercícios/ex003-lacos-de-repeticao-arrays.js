let arrayDosDeuses = ['Zeus', 'Poseidon', 'Ades', 'Afrodite'];
let arrayDeInteiros = [1, 3, 5, 2, 6, 7, 8];

function imprimirCadaItemDeUmArray(array){
    for (let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

imprimirCadaItemDeUmArray(['Nome1', 'Nome2', 'Nome3', 'Nome4']);

//----------//----------//----------//----------//----------//----------//----------//

function indiceElemento (array){
    for (let i = 0; i < array.length; i++){
        console.log(`Índice: ${i} - Elemento: ${array[i]}`);
    }
}

indiceElemento(arrayDosDeuses);

//----------//----------//----------//----------//----------//----------//----------//

function somaDeNumeros(array){
    let somaDosNumeros = 0;

    for (let i = 0; i < array.length; i++){
        somaDosNumeros += array[i];
    }
    console.log(somaDosNumeros);
}

somaDeNumeros(arrayDeInteiros);

//----------//----------//----------//----------//----------//----------//----------//

function menorEMaior(array){
    let menor = Math.min(...array);
    let maior = Math.max(...array);

    console.log(`O menor número é ${menor} e o maior número é ${maior}`);
}

menorEMaior(arrayDeInteiros);

//----------//----------//----------//----------//----------//----------//----------//

const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
let numerosPares = [];

for (let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 == 0){
        numerosPares.push(numeros[i]);
    }
}

console.log(`Os números pares da lista são: ${numerosPares.sort((a, b) => a - b)}`);

//----------//----------//----------//----------//----------//----------//----------//

function calculaMedia(array){
    let somaDasNotas = 0;
    for (let i = 0; i < array.length; i++){
        somaDasNotas += array[i];
    }
    let media = somaDasNotas / array.length;

    console.log(media.toFixed(2));
}

calculaMedia(arrayDeInteiros);