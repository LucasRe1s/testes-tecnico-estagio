/*
1 - Fibonacci

    -- Criar uma função em sua linguagem preferida. A função deve receber um numero N >= 0 
    (deve validar o input para a função), e retornar o valor correspondente desse número na sequência
     Fibonacci. EX. fib(0) =0; fib(1) = 1; fib(2) = 1; fib(3) = 2; fib(5) = 5; fib(6) = 8.

    --- Criar uma função recursiva que resolva Fibonacci

    --- Criar uma função linear que resolva Fibonacci
*/

function Fibonaci(n) {
    if (n === 0 || n === 1) return n;
    const resultado = Fibonaci(n - 2) + Fibonaci(n - 1);
    return resultado;
}

console.log(Fibonaci(8));

function formula(n) {
    if (n === 0 || n === 1) return n;
    let anterior = 0;
    let atual = 1;

    for (let i = 2; i <= n; i++) {
        let proximo = anterior + atual;
        anterior = atual;
        atual = proximo;
    }
    return atual;
}
console.log(formula(10));