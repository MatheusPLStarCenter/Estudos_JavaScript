const saudacao = function (nome) {
  return `Olá, ${nome}!`;
};

console.log(saudacao("Felipe"));

//----------//----------//----------//----------//----------//----------//----------//----------//

const verificarDeIdade = (idade) => {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
};
console.log(verificarDeIdade(17));

//----------//----------//----------//----------//----------//----------//----------//----------//

function verificaPalindromo(texto) {
  const stringInvertida = texto.split("").reverse().join("");
  return texto.toLowerCase() === stringInvertida.toLowerCase();
}

console.log(verificaPalindromo("arara")); // true
console.log(verificaPalindromo("Frase")); // false

//----------//----------//----------//----------//----------//----------//----------//----------//

function maiorValor(a, b, c) {
  let maior;

  if (a >= b) {
    maior = a;
  } else {
    maior = b;
  }
  if (c >= maior) {
    maior = c;
  }
  return maior;
}

console.log('O maior valor é: ' + maiorValor(2, 7 ,3));

//----------//----------//----------//----------//----------//----------//----------//----------//

const calculaPotencia = (base, expoente) => base ** expoente;

console.log(calculaPotencia(2, 3));