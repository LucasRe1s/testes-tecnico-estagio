/*
2 - Números primos

    -- Criar uma função em sua linguagem preferida. A função deve receber um numero N > 1 
    (validar o input), e retornar todos os números primos até o numero N. 
    EX. p(2) = [2]; p(3) = [2, 3]; p(10) = [2, 3, 5, 7];

    --- Criar uma função recursiva que resolva p

    --- Criar uma função linear que resolva p
*/

function numerosPrimos (p, div = 2) {
    if (p <= 2) return p == 2
    if (p % div == 0) return false;
    if (div * div > p) return true;
    return numerosPrimos(p, div +1);
}

function nPrimosRecursivos(p, atual = 2, arrPrimos = []) {
    if (atual > p) return arrPrimos;
    if (numerosPrimos(atual)) arrPrimos.push(atual);
    return nPrimosRecursivos(p, atual + 1, arrPrimos);
}
console.log('Numeros primos recursivos: ' + nPrimosRecursivos(17));


function nPrimosLinear(p) {
    if (p <= 1) throw new Error("N deve ser maior que 1.");

    const ehPrimo = new Array(p + 1).fill(true);
    ehPrimo[0] = ehPrimo[1] = false;

    for (let n = 2; n * n <= p; n++) {
        if (ehPrimo[n]) {
            for (let i = n * n; i <= p; i += n) {
                ehPrimo[i] = false;
            }
        }
    }

    const primos = [];
    for (let i = 2; i <= p; i++) {
        if (ehPrimo[i]) {
            primos.push(i);
        }
    }
    return primos;
}


console.log(`Numeros primos Lineares: ${nPrimosLinear(10)}`);