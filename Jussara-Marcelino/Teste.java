import java.util.Scanner;

public class Teste {

    /*
     * 1 - Fibonacci
     * 
     * -- Criar uma função em sua linguagem preferida. A função deve receber um
     * numero N >= 0
     * (deve validar o input para a função), e retornar o valor correspondente desse
     * número na sequência
     * Fibonacci. EX. fib(0) =0; fib(1) = 1; fib(2) = 1; fib(3) = 2; fib(5) = 5;
     * fib(6) = 8.
     * 
     * --- Criar uma função recursiva que resolva Fibonacci
     * 
     * --- Criar uma função linear que resolva Fibonacci
     */

    public static void main(String[] args) {

        final Scanner scanner = new Scanner(System.in);
        System.out.println("Digite a posição que gostaria de ver:");
        int value = scanner.nextInt();
        if (value < 0) {
            System.out.println("Figite um número acima de zero.");
        }

        int resultado = Fibonacci(value);
        System.out.println("O valor na posição: " + value + " é: " + resultado);

        scanner.close();
    }

    public static int Fibonacci(int n) {
        if (n == 0 || n == 1) {
            return n;
        }

        return Fibonacci(n - 2) + Fibonacci(n - 1);
    }

    public static int FibonacciLinear(int n) {
        if (n == 0 || n == 1) {
            return n;
        }

        int anterior = 0;
        int atual = 1;

        for (int i = 2; i <= n; i++) {
            int proximo = anterior + atual;
            anterior = atual;
            atual = proximo;
        }
        return atual;
    }
}