function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);
  let resultado = document.getElementById("listaDeNumeros");

  if (ate < de) {
    return alert(
      "Não é possível inserir um valor mínimo maior que o valor máximo",
    );
  } else if (ate - de < quantidade) {
    return alert(
      "Não é possível gerar a lista com uma quantidade menor que os limites mínimos e máximos",
    );
  }
  resultado.innerHTML =
    "Lista de números: " + criarListadeNumeros(quantidade, de, ate);
  alterarStatusDoBotao();
}

function reiniciar() {
    alterarStatusDoBotao();
  document.getElementById("listaDeNumeros").innerHTML =
    "Números Sorteados: nenhuma até agora";
  document.getElementById("quantidade").value = "";
  document.getElementById("de").value = "";
  document.getElementById("ate").value = "";
  
}

function obterNumeroAleatorio(min, max) {
  let numero = parseInt(Math.random() * max + 1);
  if (numero < min) {
    return obterNumeroAleatorio(min, max);
  } else {
    return numero;
  }
}

function criarListadeNumeros(tamanho, min, max) {
  let listaDeNumeros = [];
  let numeroSorteado = obterNumeroAleatorio(min, max);
  while (listaDeNumeros.length < tamanho) {
    if (listaDeNumeros.includes(numeroSorteado)) {
      numeroSorteado = obterNumeroAleatorio(min, max);
    } else {
      listaDeNumeros.push(numeroSorteado);
    }
  }
  return listaDeNumeros.sort((a, b) => a - b);
}

function alterarStatusDoBotao() {
  let botao = document.getElementById("btn-reiniciar");
  if (botao.classList.contains("container__botao-desabilitado")) {
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
  } else {
    botao.classList.remove("container__botao");
    botao.classList.add("container__botao-desabilitado");
  }
}
