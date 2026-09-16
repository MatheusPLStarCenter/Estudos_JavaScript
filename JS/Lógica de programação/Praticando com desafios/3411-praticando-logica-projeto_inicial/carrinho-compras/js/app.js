let subTotalCarrinho;
document.getElementById("quantidade").value = 0;
limpar();

function adicionar() {
    let produto = document.getElementById("produto");
    let quantidade = document.getElementById("quantidade");
    let nomeProduto = produto.value.split(" - ")[0];
    let valorUnitario = produto.value.split("R$")[1];
    let precoTotalProduto = quantidade.value * valorUnitario;
    let listaDeProdutos = document.getElementById("lista-produtos");

  if (quantidade.value == "" || quantidade.value <= 0){
    return alert("Você precisa inserir uma quantidade maior que 0 para adicionar o produto ao carrinho");
  }

  subTotalCarrinho += precoTotalProduto;

  listaDeProdutos.innerHTML =
    listaDeProdutos.innerHTML +
    `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade.value}x</span> ${nomeProduto} <span class="texto-azul">R$${precoTotalProduto}</span>
        </section>`;

  document.getElementById("valor-total").innerHTML = "R$" + subTotalCarrinho;
  document.getElementById("quantidade").value = 0;

  //Recuperar os valores do formulário: Nome do produto, quantidade e valor
  //Calcular o preço, o nosso subtotal
  //adicionar o produto no carrinho
  //Atualizar o total da compra
}
function limpar() {
subTotalCarrinho = 0;
  document.getElementById("lista-produtos").innerHTML = "";
  document.getElementById("valor-total").innerHTML = "R$" + subTotalCarrinho;
}
