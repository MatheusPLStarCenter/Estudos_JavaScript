const carro = {
    marca: "Fiat",
    modelo: "Doblo",
    ano: 2018,
    cor: "Prata"
}

carro.quilometragem = "75000";
carro.lugares = 7;

for (let c in carro){
    console.log(`${c}: ${carro[c]}`);
}