// INÍCIO DA AULA 01

// DESAFIO DA RAFA: adicione o nome da pessoa no alert
var nome = prompt("Olá, qual seu nome?");

// DESAFIO DO GUI: coloque outras moedas no conversor

var escolha = prompt(
  "Qual moeda quer converter em real: Dolar(1) ou Bitcoin(2)?"
);

if (escolha == 1) {
  convertaDolar();
} else if (escolha == 2) {
  convertaBitcoin();
}

function convertaDolar() {
  var valorEmDolar = parseFloat(
    prompt(nome + ", coloque o valor em dólar para converter:")
  );
  var cotacaoDoDolarXReal = 4.91;
  // o estilo CamelCase significa colocar a primeira letra de cada palavra em maiúscula

  var valorEmReal = valorEmDolar * cotacaoDoDolarXReal;

  valorEmReal = valorEmReal.toFixed(2);
  // o método toFixed retorna quantas casas decimais estiverem dentro do parêntese

  alert(nome + ", o valor em reais será R$ " + valorEmReal);
}

function convertaBitcoin() {
  var valorEmBitcoin = parseFloat(
    prompt(nome + ", coloque o valor em Bitcoin para converter:")
  );
  var cotacaoDoBitcoinXReal = 182840.0;
  var valorEmReal = valorEmBitcoin * cotacaoDoBitcoinXReal;

  valorEmReal = valorEmReal.toFixed(2);

  alert(nome + ", o valor em reais será R$ " + valorEmReal);
}

// FINAL DA AULA 01
