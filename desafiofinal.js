let codigos = [];
let nomes = [];
let quantidades = [];
let precos = [];

function cadastro() {
    codigos[codigos.length] = Number(prompt('Digite o código do produto'));
    nomes[nomes.length] = prompt('Digite o nome do produto:');
    quantidades[quantidades.length] = Number(prompt('Digite a quantidade:'));
    precos[precos.length] = Number(prompt('Digite o preço:'));
    alert('Produto cadastrado')
}

function listar() {
    if (codigos.length == 0) {
        alert('Nenhum produto cadastrado');
    } else {
        for (let i = 0; i < codigos.length; i++) {
            alert('Código: ' + codigos[i] + '\nNome: ' + nomes[i] + '\nQuantidade: ' + quantidades[i] + '\nPreço: ' + precos[i]);
        }
    }
}

function procurar() {
    let codigo = Number(prompt('Código:'));
    let achou = false;
    for (let i = 0; i < codigos.length; i++) {
        if (codigos[i] == codigo) {
            alert('Nome: ' + nomes[i] + '\nQuantidade: ' + quantidades[i] + '\nPreço: ' + precos[i]);
            achou = true;
        }
    }
    if (achou == false) {
        alert('Produto não encontrado');
    }
}

function atualizar() {
    let codigo = Number(prompt('Código:'));
    let achou = false;
    for (let i = 0; i < codigos.length; i++) {
        if (codigos[i] == codigo) {
            quantidades[i] = Number(prompt('Nova quantidade:'));
            alert('Estoque atualizado!');
            achou = true;
        }
    }
    if (achou == false) {
        alert('Produto não encontrado');
    }
}

function mediaPrecos() {
    let soma = 0;
    for (let i = 0; i < precos.length; i++) {
        soma = soma + precos[i];
    }
    if (codigos.length == 0) {
        alert('Nenhum produto cadastrado');
    } else {
        alert('Média dos preços: ' + soma / precos.length);
    }
}

let opcao = 0;

while (opcao != 6) {
    opcao = Number(prompt(
        '1 - Cadastrar produto\n' +
        '2 - Listar produtos\n' +
        '3 - Procurar produto\n' +
        '4 - Atualizar estoque\n' +
        '5 - Média de preços\n' +
        '6 - Encerrar'
    ));

    switch (opcao) {
        case 1:
            cadastro();
            break;
        case 2:
            listar();
            break;
        case 3:
            procurar();
            break;
        case 4:
            atualizar();
            break;
        case 5:
            mediaPrecos();
            break;
        case 6:
            alert('Sistema encerrado');
            break;
        default:
            alert('Opção inválida');
    }
}