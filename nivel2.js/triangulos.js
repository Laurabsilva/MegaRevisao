let a =5;
let b =5;
let c =5;

if (a + b <= c || a + c <= b || b + c <= a) {
    console.log("Não forma triângulo");
} else if (a == b && b == c) {
    console.log("Equilátero");
} else if (a == b || a == c || b == c) {
    console.log("Isósceles");
} else {
    console.log("Escaleno");
}