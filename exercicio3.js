// Exercicio 3
const faturamentoMensal = require('./dados.json');

// Função para calcular o menor e o maior valor de faturamento
function calcularExtremos(faturamento) {
  const valoresValidos = faturamento.filter(dia => dia.valor > 0).map(dia => dia.valor);
  const menor = Math.min(...valoresValidos);
  const maior = Math.max(...valoresValidos);
  return { menor, maior };
}

// Função para calcular a média mensal de faturamento
function calcularMediaMensal(faturamento) {
  const valoresValidos = faturamento.filter(dia => dia.valor > 0).map(dia => dia.valor);
  const soma = valoresValidos.reduce((total, valor) => total + valor, 0);
  return soma / valoresValidos.length;
}

// Função para contar os dias com faturamento acima da média
function contarDiasAcimaDaMedia(faturamento, media) {
  return faturamento.filter(dia => dia.valor > media).length;
}

function analisarFaturamento(faturamento) {
  const { menor, maior } = calcularExtremos(faturamento);
  const media = calcularMediaMensal(faturamento);
  const diasAcimaDaMedia = contarDiasAcimaDaMedia(faturamento, media);

  console.log("Menor valor de faturamento: R$", menor.toFixed(2));
  console.log("Maior valor de faturamento: R$", maior.toFixed(2));
  console.log("Número de dias com faturamento acima da média:", diasAcimaDaMedia);
}

analisarFaturamento(faturamentoMensal);