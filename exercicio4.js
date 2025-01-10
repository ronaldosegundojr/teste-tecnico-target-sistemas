// Exercicio 4
function calcularFaturamentoTotal(faturamento) {
    return Object.values(faturamento).reduce((total, valor) => total + valor, 0);
}

function calcularPercentuais(faturamento, totalFaturamento) {
    const percentuais = {};

    for (const [estado, valor] of Object.entries(faturamento)) {
        percentuais[estado] = ((valor / totalFaturamento) * 100).toFixed(2);
    }

    return percentuais;
}

function exibirPercentuaisDeFaturamento(faturamento) {
    const totalFaturamento = calcularFaturamentoTotal(faturamento);
    const percentuais = calcularPercentuais(faturamento, totalFaturamento);

    console.log("Faturamento total: R$", totalFaturamento.toFixed(2));
    console.log("Percentual de representação por estado:");
    for (const [estado, percentual] of Object.entries(percentuais)) {
        console.log(${estado}: ${percentual}%);
    }
}

// Dados de faturamento por estado disponibilizados/mokados pelo exercicio
const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

exibirPercentuaisDeFaturamento(faturamento);