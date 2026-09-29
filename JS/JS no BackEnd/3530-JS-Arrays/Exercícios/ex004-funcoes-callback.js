const listaDeLetras = ["a", "b", "c", "d", "e", "f", "g"];

listaDeLetras.forEach((elemento, indice) => {
  console.log(`Índice: ${indice}, Valor: ${elemento}`);
});

//---------------//---------------//---------------//---------------//---------------//

const listaDeNumeros = [1, 2, 3, 4];

function executaOperacaoEmArray(array, funcaoCallback) {
  return array.map(funcaoCallback);
}

function dobraNumero(num) {
  return num * 2;
}

const listaDeNumerosDobrados = executaOperacaoEmArray(
  listaDeNumeros,
  dobraNumero,
);
console.log(listaDeNumerosDobrados);

//---------------//---------------//---------------//---------------//---------------//

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numeroProcurado = 7;
let indiceNumero = -1;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === numeroProcurado) {
    indiceNumero = i;
    break;
  }
}

console.log(`Posição do número procurado ${numeroProcurado}: ${indiceNumero}`);

//---------------//---------------//---------------//---------------//---------------//

const nomesTurmaA = ["João Silva", "Maria Santos", "Pedro Almeida"];
const nomesTurmaB = ["Carlos Oliveira", "Ana Souza", "Lucas Fernandes"];

const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);
const alunoProcurado = todasAsTurmas.find((nome) => nome === "Felipe Anderson");

if(alunoProcurado){
    console.log("Aluno encontrado! " + alunoProcurado);
} else {
    console.log("Aluno não encontrado");
}

//---------------//---------------//---------------//---------------//---------------//

const outrosNumeros = [6, 9, 12, 15, 18, 21];

outrosNumeros.forEach((num) => console.log(num * 3));

console.log(outrosNumeros.indexOf(18));