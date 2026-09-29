const livro = {
  titulo: "Pai Rico, Pai Pobre",
  autor: "Robert Kyiosaki",
  anoDePublicacao: 1997,
  genero: "Educação Financeira, Autoajuda",
};

console.log(livro);

//------------//------------//------------//------------//------------//------------//

const anoAtual = new Date().getFullYear();

const livro2 = {
  titulo: "Como fazer amigos e influenciar pessoas",
  autor: "Dale Carnegie",
  anoDePublicacao: 1936,
  genero: "Autoajuda, Desenvolvimento Pessoal e Relações Humanas",
};

livro2.tempoDePublicacao = anoAtual - livro2.anoDePublicacao;
livro.tempoDePublicacao = anoAtual - livro.anoDePublicacao;

function mostrarDetalhes(livro) {
  return `Título: ${livro.titulo} - Autor: ${livro.autor} - Ano de Publicacao: ${livro.anoDePublicacao}`;
}

console.log(mostrarDetalhes(livro2));
console.log(mostrarDetalhes(livro));

const livro3 = {
  titulo: "Os segredos da mente milionária",
  autor: "T. Harv Eker",
  anoDePublicacao: 2002,
  genero: "Psicologia e filosofia financeira",
  avaliacao: null,
};

if (livro3.avaliacao == null) {
  livro3.avaliacao = 4.9;
} else {
  console.log("O livro já possui uma avaliação");
}

console.log(livro3);
livro.genero = "aventura";
console.log(livro);

delete livro3.avaliacao;
console.log(livro3);
