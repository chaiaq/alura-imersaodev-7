// Desenvolver um conversor de temperaturas entre Fahrenheit, Kelvin e Celsius

var escalaDeOrigem = prompt(
    "Escolha a escala de origem, sendo:\n1-Celsius \n2-Fahrenheit \n3-Kelvin"
  );
  
  var temperaturaParaConverter = parseFloat(
    prompt("Quantos graus tu queres converter?")
  );
  
  var escalaDoResultado = prompt(
    "Escolha a escala do resultado, sendo:\n1-Celsius \n2-Fahrenheit \n3-Kelvin"
  );
  
  var resultado = 0;
  
  // escala de Origem: Celsius
  if (escalaDeOrigem == 1) {
    // resultado em Fahrenheit
    if (escalaDoResultado == 2) {
      resultado = temperaturaParaConverter * 1.8 + 32;
      alert(temperaturaParaConverter + "°C equivale a " + resultado + "°F");
      // resultado em Kelvin
    } else if (escalaDoResultado == 3) {
      resultado = temperaturaParaConverter + 273;
      alert(temperaturaParaConverter + "°C equivale a " + resultado + "K");
    }
    // escala de origem: Fahrenheit
  } else if (escalaDeOrigem == 2) {
    // resultado em Celsius
    if (escalaDoResultado == 1) {
      resultado = (temperaturaParaConverter - 32) / 1.8;
      alert(temperaturaParaConverter + "°F equivale a " + resultado + "°C");
      // resultado em Kelvin
    } else if (escalaDoResultado == 3) {
      resultado = ((temperaturaParaConverter - 32) * 5) / 9 + 273;
      alert(temperaturaParaConverter + "°F equivale a " + resultado + "K");
    }
    // escala de origem: Kelvin
  } else if (escalaDeOrigem == 3) {
    // resultado em Celsius
    if (escalaDoResultado == 1) {
      resultado = temperaturaParaConverter - 273;
      alert(temperaturaParaConverter + "K equivale a " + resultado + "°C");
      // resultado em Fahrenheit
    } else if (escalaDoResultado == 2) {
      resultado = (temperaturaParaConverter - 273) * 1.8 + 32;
      alert(temperaturaParaConverter + "K equivale a " + resultado + "°F");
    }
  }
  