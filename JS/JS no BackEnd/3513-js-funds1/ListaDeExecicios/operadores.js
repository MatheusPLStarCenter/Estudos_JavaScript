let saldo = 800;
let deposito = 500;
let saque = 213.0;
let operacao = saldo - saque;

console.log("Saldo: " + saldo);
console.log("Saldo após o saque: " + operacao);

//----------//----------//----------//----------//----------//----------//----------//----------//

let numero = 7;
let parOuImpar = numero % 2 === 0 ? "Número Par" : "Número Ímpar";
console.log(parOuImpar);

//----------//----------//----------//----------//----------//----------//----------//----------//

const usuario = "usuarioX@gmail.com";
const admin = false;

if (admin) {
  console.log("O usuário possui autorizações de administrador");
} else {
  console.log("O usuário NÃO possui autorização de administrador");
}

//----------//----------//----------//----------//----------//----------//----------//----------//

const bool1 = false;
const bool2 = true;

if (bool1 || bool2) {
  console.log("Pelo menos uma das variáveis é verdadeira");
} else {
  console.log("Nenhuma das variáveis é verdadeira");
}

//----------//----------//----------//----------//----------//----------//----------//----------//

const idadeMinima = 18;
const idadeUsuario = 17;

if (idadeUsuario >= idadeMinima) {
  console.log("O usuário pode comprar o ingresso para o show");
} else {
  console.log("O usuário NÃO pode comprar o ingresso para o show");
}
