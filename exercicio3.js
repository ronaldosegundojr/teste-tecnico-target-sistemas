// Exercicio 3
const lerJSON = async (url) => {
    const response = await fetch(url);
    return await response.json();
  };
  
  const lerXML = async (url) => {
    const response = await fetch(url);
    const text = await response.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, "application/xml");
  
    const rows = Array.from(xml.getElementsByTagName("row"));
    return rows.map((row) => ({
      dia: parseInt(row.getElementsByTagName("dia")[0].textContent),
      valor: parseFloat(row.getElementsByTagName("valor")[0].textContent),
    }));
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
    const dadosJson = await lerJSON("dados.json");
    const dadosXml = await lerXML("dados (2).xml");
  
    const faturamento = [...dadosJson, ...dadosXml];
    const resultado = processarFaturamento(faturamento);
  
    console.log("Questão 3:");
    console.log("Menor valor:", resultado.menorValor);
    console.log("Maior valor:", resultado.maiorValor);
    console.log("Dias acima da média:", resultado.diasAcimaMedia);
  };
  
  questao3();
  
