console.log("Seja bem vindo ao sistema!");
let nome = "Matheus";
console.log("Olá, " + nome + "!");
alert("Olá, " + nome + "!");
let linguagemPredileta = prompt(
  "Qual a linguagem de programação que você mais gosta?",
);
console.log("A linguagem predileta do usuário é: " + linguagemPredileta);

let valor1 = 2;
let valor2 = 8;
let resultado = Math.abs(valor1 - valor2);
console.log(`A diferença entre ${valor1} e ${valor2} é: ${resultado}`);

let idade = prompt("Digite a sua idade: ");
if (idade >= 18) {
  console.log("O usuário é maior de idade.");
} else {
  console.log("O usuário é menor de idade.");
}

let numero = prompt(
  "Digite um número para verificar se é positivo, negativo ou zero.",
);
if (numero > 0) {
  console.log("O número digitado é positivo");
} else if (numero < 0) {
  console.log("O número digitado é negativo");
} else {
  console.log("O numero digitado é 0");
}

let x = 0;
while (x <= 10) {
  console.log(x);
  x++;
}

let nota = 9;
if (nota >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

console.log("Numero aleatório: " + Math.random());
console.log("Numero aleatório de 1 a 10: " + parseInt(Math.random() * 10 + 1));
console.log(
  "Número aleatório de 0 a 1000: " + parseInt(Math.random() * 1000 + 1),
);