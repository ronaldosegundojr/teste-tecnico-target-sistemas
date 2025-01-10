// Exercicio 5
function inverterString(str) {
    let stringInvertida = "";

    // Iterar pelos caracteres da string de trás para frente
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }

    return stringInvertida;
}

// Usando a função para inverter uma string de exemplo
const entrada = "Exemplo de string";
const resultado = inverterString(entrada);

console.log("String original:", entrada);
console.log("String invertida:", resultado);