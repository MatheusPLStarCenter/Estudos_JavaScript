const aluno = {
  nome: "Wilton Pereira Sampaio",
  notas: [4, 7, 2, 7],
  calcularMediaNotas: function (notas) {
    let somaDasNotas = 0;
    notas.forEach((n) => (somaDasNotas += n));
    return somaDasNotas / notas.length;
  },
  classificarDesempenho: function (media) {
    if (media >= 9) {
      return "Desempenho excelente";
    } else if (media >= 7.5 && media < 9) {
      return "Bom desempenho";
    } else if (media >= 6 && media < 7.5) {
      return "Desempenho regular";
    } else {
      return "Desempenho insuficiente";
    }
  },
};

console.log(aluno.calcularMediaNotas(aluno.notas));
console.log(aluno.classificarDesempenho(aluno.calcularMediaNotas(aluno.notas)));
