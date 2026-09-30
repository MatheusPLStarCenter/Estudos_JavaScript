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

function exibirTelefones (telefone1, telefone2){
    console.log(`ligar para ${telefone1}`);
    console.log(`ligar para ${telefone2}`);
}

exibirTelefones(estudante.telefones[0], estudante.telefones[1]);
exibirTelefones(...estudante.telefones);

// const dadosCompletos = Object.assign({destinatario: estudante.nome}, estudante.enderecos[0]);
const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0]
}

console.log(dadosEnvio );
