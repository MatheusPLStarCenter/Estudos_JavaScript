// Faça uma função que aceita vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.

function unificaArrays(...arrays) {
  return [].concat(...arrays);
}

const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];

const arraysConcatenados = unificaArrays(arr1, arr2, arr3);
console.log(arraysConcatenados);

//---------------//---------------//---------------//---------------//---------------//

// Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.

const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function somaDeValores (listaDeNums) {
    let somaDeNumeros = listaDeNums.reduce((acumulador, numAtual) => {return acumulador + numAtual}, 0);
    return somaDeNumeros;
}

console.log(somaDeValores(valores));


//---------------//---------------//---------------//---------------//---------------//

// Considere as seguinte duas listas. Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final;

const coresLista1 = ["Vermelho", "Verde", "Azul", "Amarelo", "Vermelho"];

const coresLista2 = ["Laranja", "Verde", "Roxo", "Azul"];

const coresConcat = unificaArrays(coresLista1, coresLista2);

const coresSemDuplicada = [...new Set(coresConcat)];

console.log(coresSemDuplicada);

//---------------//---------------//---------------//---------------//---------------//

// Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.

function exibeSomenteOsPares(array){
    const arrayDeNumsPares = array.filter((num) => num % 2 == 0);
    return arrayDeNumsPares;
}

console.log(exibeSomenteOsPares(valores));

//---------------//---------------//---------------//---------------//---------------//