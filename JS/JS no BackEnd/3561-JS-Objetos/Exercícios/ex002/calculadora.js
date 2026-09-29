const calculcadora = {
  soma: (a, b) => a + b,
  subtracao: (a, b) => a - b,
  multiplicacao: (a, b) => a * b,
  divisao: function (a, b) {
    if (b === 0) {
      return "Não é possível realizar a divisão por 0";
    } else {
      return a / b;
    }
  },
  calcualarMedia: function (lista) {
    let somaDosItens = 0;
    lista.forEach((n) => (somaDosItens += n));
    return somaDosItens / lista.length;
  },
};

console.log(calculcadora.soma(2, 2));
console.log(calculcadora.subtracao(4, 2));
console.log(calculcadora.multiplicacao(2, 3));
console.log(calculcadora.divisao(4, 2));
console.log(`A média é: ${calculcadora.calcualarMedia([4, 6, 8, 10, 10])}`);