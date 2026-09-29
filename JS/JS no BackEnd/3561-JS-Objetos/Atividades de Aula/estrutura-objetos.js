const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12345678910',
    turma: 'JavaScript'
}

console.log("Nome: " + estudante.nome + " - Idade: " + estudante.idade);
console.log(`Os três primeiros digitos do CPF são: ${estudante.cpf.substring(0, 3)}`);
