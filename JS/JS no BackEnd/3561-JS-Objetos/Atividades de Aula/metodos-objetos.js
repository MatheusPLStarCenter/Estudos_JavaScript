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
    {
      rua: "Rua Clotilde",
      numero: "71",
      complemento: null,
    },
  ],
};

const chavesObjeto = Object.keys(estudante);
console.log(chavesObjeto);

if (!chavesObjeto.includes('enderecos')){
    console.error('é necessário ter um endereço cadastrado');
}