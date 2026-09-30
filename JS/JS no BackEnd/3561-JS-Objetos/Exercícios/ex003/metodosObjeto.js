const carro = {
  marca: "Fiat",
  modelo: "Doblo",
  ano: 2018,
  cor: "Prata",
  ligado: true,
  ligar: function () {
    if (!this.ligado) {
      this.ligado = true;
      console.log("O caro está ligado");
    } else {
      console.log("O carro já está ligado");
    }
  },
  desligar: function () {
    if (this.ligado) {
      this.ligado = false;
      console.log("O carro está desligado");
    } else {
      console.log("O carro já está desligado");
    }
  },
  obterDetalhes: function () {
    const estado = this.ligado ? 'ligado' : 'desligado'
    return `Detalhes do carro:\nMarca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\nCor: ${this.cor}\nMotor: ${this.estado}\n`;
  },
};

carro.ligar(); // Tentar ligar o carro quando já está ligado
carro.desligar(); // Desligar o carro
carro.desligar(); // Tentar desligar o carro quando já está desligado
carro.ligar(); // Ligar o carro
console.log(carro.obterDetalhes());
carro.desligar();

Object.defineProperty(carro, "placa", {
  value: "CYK-2977",
  enumerable: false,
});

for (c in carro) {
  console.log(carro[c]);
}

console.log(Object.keys(carro));

console.log(`Placa do Carro: ${carro.placa}`);

const carroNovo = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
  cor: "branco",
};

const carroComNovosDetalhes = { ...carro, ...carroNovo };

console.log(carroComNovosDetalhes);

carroComNovosDetalhes.cor = "preto";

console.log(carroComNovosDetalhes);