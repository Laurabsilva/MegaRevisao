let numero = Number(prompt('Digite um número:'));

let divisao = 0;
let primo = true;

if (numero <= 1) {
    primo = false;
} else {
    for (let i = 2; i < numero; i++) {
        divisao++;

        if (numero % i == 0) {
            primo = false;
        }
    }
}

if (primo == true) {
    alert('número primo');
} else {
    alert('número não é primo');
}

alert('N°s de divisões: ' + divisao);