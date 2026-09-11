let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";

function botaoConsole(){
    console.log("O botão de console foi pressionado");
}

function botaoAlerta(){
    console.log("Eu amo JS");
}

function botaoPrompt(){
    let cidade = prompt("Digite o nome de uma cidade do Brasil: ");
    console.log(`Estive em ${cidade} e lembrei de você`)
}

function botaoSoma() {
    let valor1 = prompt("Digite o primeiro valor para a soma: ");
    let valor2 = prompt("Digite o seguhndo valor para a soma: ");
    let resultado = parseInt(valor1) + parseInt(valor2);

    alert(`O resultado da soma é: ${resultado}`);
}