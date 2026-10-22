let numeros = [];
let unicos = [];
let quantidade = 0;

for (let i = 0; i < 20; i++) {
    numeros[i] = Number(prompt("Digite um número:"));
}

for (let i = 0; i < 20; i++) {

    let nrepetido = false;

    for (let j = 0; j < quantidade; j++) {

        if (numeros[i] == unicos[j]) {
            repetido = true;
        }

    }

    if (nrepetido == false) {
        unicos[quantidade] = numeros[i];
        quantidade++;
    }

}

alert("Valores únicos:");

for (let i = 0; i < quantidade; i++) {
    alert(unicos[i]);
}