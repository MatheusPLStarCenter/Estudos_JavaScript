const estudante = {
    nome: 'João Silva',
    idade: 32,
    cpf: '12345678910',
    turma: 'JavaScript'
}

estudante.telefone = '551123895467';
console.log(estudante.telefone);

delete estudante.turma
console.log(estudante);
