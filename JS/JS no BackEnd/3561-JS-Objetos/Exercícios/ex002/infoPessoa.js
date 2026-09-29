const pessoa = {
  nome: "Matheus",
  idade: 21,
  solteiro: true,
  hobbies: ["Fotografia", "Leitura", "Corrida"],
};

pessoa.endereco = {
  rua: "Rua Coimbra",
  cidade: "Diadema",
  estado: "São Paulo",
};

function mostrarInfo(pessoa) {
  console.log(`Nome: ${pessoa.nome} (Tipo: ${typeof pessoa.nome})`);
  console.log(`Idade: ${pessoa.idade} (Tipo: ${typeof pessoa.idade})`);
  console.log(`Solteiro: ${pessoa.solteiro} (Tipo: ${typeof pessoa.solteiro})`);
  console.log(
    `Hobbies: ${pessoa.hobbies.join(", ")} (Tipo: ${typeof pessoa.hobbies})`,
  );
  console.log(
    `Rua: ${pessoa.endereco.rua} - Cidade: ${pessoa.endereco.cidade} - Estado: ${pessoa.endereco.estado}`,
  );
}

mostrarInfo(pessoa);

const pessoa1 = {
  nome: "João Paulo",
  idade: 25,
  cidade: "Santos",
};
const pessoa2 = {
  nome: "Arthur Felipe",
  idade: 32,
  cidade: "São Paulo",
};
const pessoa3 = {
  nome: "Carlos Vinícius",
  idade: 19,
  cidade: "Joinville",
};

const pessoas = [pessoa1, pessoa2, pessoa3];

const pessoa4 = {
  nome: "Flávio Antunes de Oliveira",
  idade: 36,
  cidade: "Rio de Janeiro",
};

pessoas.push(pessoa4);

function mostrarListaPessoas(lista) {
  lista.forEach((p) => {
    console.log(`Nome: ${p.nome} - Idade: ${p.idade} - Cidade: ${p.cidade}`);
  });
}

mostrarListaPessoas(pessoas);

function filtrarPorCidade(listaDePessoas) {
  return listaDePessoas.filter((p) => p.cidade === "São Paulo");
}

console.log(filtrarPorCidade(pessoas));