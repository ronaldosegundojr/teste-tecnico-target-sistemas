// EXERCÍCIO 2
function pertenceFibonacci(numero) {
    // Inicializando os primeiros valores da sequência
    let a = 0;
    let b = 1;

    if (numero === a || numero === b) {
        console.log(`${numero} pertence à sequência de Fibonacci.`);
        return;
    }

    let fibonacci = a + b;

    while (fibonacci <= numero) {
        if (fibonacci === numero) {
            console.log(`${numero} pertence à sequência de Fibonacci.`);
            return;
        }

        a = b;
        b = fibonacci;
        fibonacci = a + b;
    }

    console.log(`${numero} NÃO pertence à sequência de Fibonacci.`);
}

// Testando a função com um número
const numeroInformado = 21; 
pertenceFibonacci(numeroInformado);
