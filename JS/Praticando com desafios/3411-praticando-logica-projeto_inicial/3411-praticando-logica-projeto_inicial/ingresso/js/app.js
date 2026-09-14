function comprar() {
  let tipo = document.getElementById("tipo-ingresso");
  let qtdRestanteIngressoSelecionado = parseInt(document.getElementById(
    `qtd-${tipo.value}`,
  ).innerHTML);
  let qtd = document.getElementById("qtd");

  if (qtd.value <= 0 || qtd.value == null) {
    return alert(
      "Você precisa inserir um valor maior que 0 para a quantidade de ingressos",
    );
  }

  if (qtdRestanteIngressoSelecionado < qtd.value) {
    alert("Quantidade indisponível para " + tipo.value);
  }

  if (qtdRestanteIngressoSelecionado >= qtd.value) {
    document.getElementById(`qtd-${tipo.value}`).innerHTML = qtdRestanteIngressoSelecionado -= parseInt(qtd.value);
  }
}
