const estudante = "Caroline";
const docente = 'Ana';
const cumprimento = "nosso lema é 'estudar bastante!'";
const citacao = `Ju diz: "nosso lema é estudar bastante!`

console.log(cumprimento);
console.log(citacao);

console.log(`A estudante chama: ${estudante}`);

// template String

const senha = "SenhaSegura123" + estudante.toUpperCase();
console.log(senha);

let valor1 = 0;
let abacate;
let valor2 = "10";

console.log("valor1 é do tipo:", typeof valor1)
console.log("abacate é do tipo:", typeof abacate)
console.log("valor2 é do tipo:", typeof valor2)