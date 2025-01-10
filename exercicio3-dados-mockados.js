// Exercicio 3 com dados mockados
// Fiz o arquivo dados.json mockado para facilitar a execução do código.
const faturamentoMensal = [
  { "dia": 1, "valor": 22174.1664 },
  { "dia": 2, "valor": 24537.6698 },
  { "dia": 3, "valor": 26139.6134 },
  { "dia": 4, "valor": 0.0 },
  { "dia": 5, "valor": 0.0 },
  { "dia": 6, "valor": 26742.6612 },
  { "dia": 7, "valor": 0.0 },
  { "dia": 8, "valor": 42889.2258 },
  { "dia": 9, "valor": 46251.174 },
  { "dia": 10, "valor": 11191.4722 },
  { "dia": 11, "valor": 0.0 },
  { "dia": 12, "valor": 0.0 },
  { "dia": 13, "valor": 3847.4823 },
  { "dia": 14, "valor": 373.7838 },
  { "dia": 15, "valor": 2659.7563 },
  { "dia": 16, "valor": 48924.2448 },
  { "dia": 17, "valor": 18419.2614 },
  { "dia": 18, "valor": 0.0 },
  { "dia": 19, "valor": 0.0 },
  { "dia": 20, "valor": 35240.1826 },
  { "dia": 21, "valor": 43829.1667 },
  { "dia": 22, "valor": 18235.6852 },
  { "dia": 23, "valor": 4355.0662 },
  { "dia": 24, "valor": 13327.1025 },
  { "dia": 25, "valor": 0.0 },
  { "dia": 26, "valor": 0.0 },
  { "dia": 27, "valor": 25681.8318 },
  { "dia": 28, "valor": 1718.1221 },
  { "dia": 29, "valor": 13220.495 },
  { "dia": 30, "valor": 8414.61 }
];

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