function verificarTriangulo(a, b, c) {

    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
        return 'none';
    }
    
    if (a === b && b === c) {
        return 'equilateral';
    } else if (a === b || a === c || b === c) {
        return 'isosceles';
    } else {
        return 'scalene';
    }
}

console.log(verificarTriangulo(2, 2, 2));
console.log(verificarTriangulo(10, 10, 10));
console.log(verificarTriangulo(3, 4, 4));
console.log(verificarTriangulo(4, 3, 4));
console.log(verificarTriangulo(3, 4, 5));
console.log(verificarTriangulo(0, 0, 0));
console.log(verificarTriangulo(3, 4, -5));