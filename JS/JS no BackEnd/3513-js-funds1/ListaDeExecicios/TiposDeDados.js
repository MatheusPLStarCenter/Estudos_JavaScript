let frase = "Frase aleatória para consolidação de conhecimentos";
let variavelIndefinida; // Variável indefinida
let variavelNula = null; // Variável do tipo Nula para utilização no exemplo

console.log(frase.length, frase.toUpperCase());
console.log(variavelIndefinida, variavelNula);

let variavelString = "variável";
let variavelNumber = 1234;
let variavelBooleana = true;

console.log(`É ${variavelBooleana} que aprender sobre cada tipo de ${variavelString} no JavaScipt é tão fácil quando contar ${variavelNumber}`); 

let variavelNumerica = 1234;
let variavelTextual = "3.1415";

let conversaoNumParaTexto = String(variavelNumerica);
let conversaoTextoParaNum = parseFloat(variavelTextual);

console.log(typeof conversaoNumParaTexto, typeof conversaoTextoParaNum); 

let variavelComString = "Texto de String";
console.log("String maiúscula: " + variavelComString.toUpperCase());
console.log("String minúscula: " + variavelComString.toLowerCase());
console.log("Primeiro caractere da String: " + variavelComString.charAt(0));
console.log("String dividia ao meio: " + variavelComString.slice(0, variavelComString.length / 2));
let words = variavelComString.split("");
console.log("String impressa por cada caractere:")
for(let i = 0; i < words.length; i ++){
    console.log(words[i]);
}