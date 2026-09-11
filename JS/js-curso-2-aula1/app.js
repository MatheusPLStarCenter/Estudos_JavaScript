let listaDeNumeroSorteados = [];
let limiteSorteio = 10;
let numeroSecreto = gerarNumeroAleatorio();
let qtdTentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", "Digite um número entre 1 e " + limiteSorteio);
}

exibirMensagemInicial();

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * limiteSorteio + 1);
  let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length;

  if (quantidadeDeElementosNaLista == limiteSorteio){
    listaDeNumeroSorteados = []
  }

  if (listaDeNumeroSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumeroSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}

function verificarChute() {
  let chute = document.querySelector("input").value;
  let tentativas = qtdTentativas > 1 ? "tentativas" : "tentativa";
  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou!");
    exibirTextoNaTela(
      "p",
      `Você descobriu o número secreto com ${qtdTentativas} ${tentativas}!`,
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
    document.querySelector("button").setAttribute("disabled", true);
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é menor que o número chutado");
      qtdTentativas++;
    } else {
      exibirTextoNaTela("p", "O número secreto é maior que o número chutado");
      qtdTentativas++;
    }
    limparCampo();
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  console.log(listaDeNumeroSorteados);
  limparCampo();
  qtdTentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
  document.querySelector("button").removeAttribute("disabled");
}
