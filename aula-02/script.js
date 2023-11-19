// INÍCIO AULA 02

// DESAFIO GUI: Permitir números entre 1 e 1000;
var numeroSecreto = parseInt(Math.random() * (1000 - 1) + 1);
//return Math.random() * (max - min) + min;

// DESAFIO: Adicionar um limite de tentativas para que a pessoa possa adivinhar o número e, ao final, exiba a resposta correta;
for (var i = 0; i < 10; i++) {
  // DESAFIO RAFA: Permitir o número mínimo de tentativas prováveis para acertar (log2(1000) + 1);
  var chute = prompt("Digite o seu chute, entre 0 e 1000");

  // DESAFIO: Quando a pessoa errar, forneça uma dica informando se o número chutado é maior ou menor que o número secreto;
  if (chute == numeroSecreto) {
    alert("Acertou! O número correto é " + chute);
  } else if (chute > numeroSecreto) {
    alert("Não acertou, o número secreto é menor que " + chute);
  } else if (chute < numeroSecreto) {
    alert("Não acertou, o número secreto é maior que " + chute);
  }
  // DESAFIO PAULO: Mostrar a quantidade de chutes;
  alert("Tentativas restantes: " + (9 - i));
}

if (chute != numeroSecreto) {
  alert("Acabaram as tentativas! O número correto era " + numeroSecreto);
}

// FINAL AULA 02
