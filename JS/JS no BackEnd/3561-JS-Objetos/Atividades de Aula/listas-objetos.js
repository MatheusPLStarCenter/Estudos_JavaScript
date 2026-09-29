const estudante = {
  nome: "José Silva",
  idade: 32,
  cpf: "12345678910",
  turma: "JavaScript",
  bolsista: true,
  telefones: ["5511999999998", "5511988888889"],
  enderecos: [
    {
      rua: "Rua Joseph Climber",
      numero: "45",
      complemento: "apto 43",
    },
  ],
};

estudante.enderecos.push({
  rua: "Rua Clotilde",
  numero: "71",
  complemento: "",
});

const listaEnderecosComComplemento = estudante.enderecos.filter(
  (endereco) => endereco.complemento != "",
);

// console.log(estudante.enderecos);
// console.log(estudante.enderecos[0]);
console.log(listaEnderecosComComplemento);
