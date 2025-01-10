// Exercicio 3 fazendo a ingestão do json

const lerJSON = async () => {
    const response = await fetch("dados.json");
    return await response.json(); 
};

const processarFaturamento = (faturamento) => {
    const valores = faturamento.map(d => d.valor).filter(v => v > 0);

    const menorValor = Math.min(...valores);
    const maiorValor = Math.max(...valores);

    const media = valores.reduce((acc, val) => acc + val, 0) / valores.length;
    const diasAcimaMedia = valores.filter(v => v > media).length;

    return { menorValor, maiorValor, diasAcimaMedia };
};

const questao3 = async () => {
    // Carrega os dados do arquivo JSON
    const dadosJson = await lerJSON();

    const resultado = processarFaturamento(dadosJson);

    console.log("Questão 3:");
    console.log("Menor valor:", resultado.menorValor);
    console.log("Maior valor:", resultado.maiorValor);
    console.log("Dias acima da média:", resultado.diasAcimaMedia);
};

questao3();
