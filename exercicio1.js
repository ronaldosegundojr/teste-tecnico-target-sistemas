// EXERCÍCIO 1
function calcularSoma() {
    let INDICE = 13;
    let SOMA = 0;
    let K = 0;

    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }

    console.log("O valor da variável SOMA é:", SOMA);
}

calcularSoma();

// Sabemos que o resultado esperado é 91, pois a soma dos números de 1 a 13 é 91.