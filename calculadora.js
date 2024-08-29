function calculadora(a, b, operador) {
    switch (operador) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                return 'Erro: divisão por zero';
            }
            return a / b;
        default:
            return 'Operador inválido';
    }
}

console.log(calculadora(1, 1, '+'));
console.log(calculadora(1, 1, '-'));
console.log(calculadora(1, 1, '*'));
console.log(calculadora(1, 1, '/'));
console.log(calculadora(1, 0, '/'));