const contaBancaria = {
  titular: "Nome do Titular",
  saldo: 1354.0,
  depositar: function (valor) {
    this.saldo += valor;
  },
  sacar: function (valor) {
    valor > this.saldo
      ? console.log(
          "Não é possível realizar o saque pois o valor digitado é maior que o saldo na conta",
        )
      : this.saldo -= valor;
  },
};

contaBancaria.depositar(200);
console.log(contaBancaria);
contaBancaria.sacar(1800);
console.log(contaBancaria);

const cliente = {
    nome: "Luiz Flávio de Oliveira",
    conta: contaBancaria
}

function mostrarSaldo(cliente){
    return cliente.conta.saldo
}

console.log(`O saldo do cliente é de: R$${mostrarSaldo(cliente)}`);

cliente.conta.depositar(200);
console.log(`O saldo do cliente é de: R$${mostrarSaldo(cliente)}`);
cliente.conta.sacar(300);
console.log(`O saldo do cliente é de: R$${mostrarSaldo(cliente)}`);
