// DESAFIO DO PAULO: converter anos-luz em quilômetros e calcular tempo para percorrer a distância

var nome = prompt("Qual seu nome?");

var quantidadeAnoLuz = prompt("Quantos ano-luz tu queres percorrer");
var conversaoAnoLuzKm = 9460528404879;

var quantidadeKmFinal = quantidadeAnoLuz * conversaoAnoLuzKm;

quantidadeKmFinal = quantidadeKmFinal.toFixed(2);

var trajetoEmHoras = quantidadeKmFinal / 586000;
var trajetoEmAnos = trajetoEmHoras / 8766;

alert(
  nome +
    ", seu trajeto será o seguinte: \nAno-luz: " +
    quantidadeAnoLuz +
    "\nConsiderando a velocidade da Parker Solar Probe, levará: " +
    trajetoEmHoras.toFixed(0) +
    " horas \nOu também: " +
    trajetoEmAnos.toFixed(0) +
    " anos"
);

// A sonda Parker Solar Probe atingiu a distância de 586.000 km/h
// https://canaltech.com.br/espaco/sonda-solar-parker-bate-novo-recorde-de-nave-mais-rapida-da-historia-202548/
