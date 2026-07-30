let n1 = 8;
let n2 = 3;
let n3 = 5;

let maior = n1;
if (n2 > maior) {
    maior = n2;
}
if (n3 > maior) {
    maior = n3;
}

let menor = n1;
if (n2 < menor) {
    menor = n2;
}
if (n3 < menor) {
    menor = n3;
}

let meio = n1 + n2 + n3 - maior - menor;

console.log("Maior:", maior);
console.log("Menor:", menor);
console.log("Meio:", meio);
