const nomes = ["João", "Paulo", "Daniel"];
const idade = [21, 25, 23];

function concatenaArrays(array1, array2) {
  return array1.concat(array2);
}

const nomesIdades = concatenaArrays(nomes, idade);
console.log(nomesIdades);

//----------//----------//----------//----------//----------//----------//----------//

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const parteNumeros = numeros.slice(3, 8);

console.log(parteNumeros);

//----------//----------//----------//----------//----------//----------//----------//

const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];

frutas.splice(2, 2, 'Kiwi', 'Pêssego');

console.log(frutas);

//----------//----------//----------//----------//----------//----------//----------//

const menuPrincipal = ["Aligot", "Fetuccini", "Spaghetti"]
const menuDeSobremesas = ["Creme Brulet", "Petit Gateau"];
const menuCompleto = menuPrincipal.concat(menuDeSobremesas);

console.log(menuCompleto);

//----------//----------//----------//----------//----------//----------//----------//

const matriz = [];
let valorInicial = 1;

for (let i = 0; i < 3; i++){
    let linha = [];
    for (let j = 0; j < 3; j++){
        linha.push(valorInicial++);
    }
    matriz.push(linha);
}
console.log("Matriz de duas dimensões:")
console.log(matriz);
matriz.forEach(row => console.log(row)); //visualização em linhas e colunas
console.log(`Elemento da segunda linha e terceira coluna: ${matriz[1][2]}`);
matriz[2][1] = 15;
matriz.forEach(row => console.log(row));