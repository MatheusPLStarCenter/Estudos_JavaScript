const estudante = {
  nome: "José Silva",
  idade: 32,
  cpf: "12345678910",
  turma: "JavaScript",
  bolsista: true,
  telefones: ["5511999999998", "5511988888889"],
  media: 7.5,
  estaAprovado: function(mediaBase) {
    return this.media >= mediaBase ? true : false
  }
}

console.log(estudante.estaAprovado(7));