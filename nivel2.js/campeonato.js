let vitorias = Number(prompt('Número de vitórias:'));
let empates = Number(prompt('Número de empates:'));
let derrotas = Number(prompt('Número de derrotas:'));

let pontos = vitorias * 3 + empates;

let jogos = vitorias + empates + derrotas;

let aproveitamento = (pontos / (jogos * 3)) * 100;

alert('Pontuação: ' + pontos);

alert('Aproveitamento: ' + aproveitamento + '%');

if (aproveitamento >= 80) {
    alert('Classificação: Excelente, Parabéns!!!!');
} else if (aproveitamento >= 60) {
    alert('Classificação: Bom :)');
} else if (aproveitamento >= 40) {
    alert('Classificação: Regular :/');
} else {
    alert('Classificação: Péssimo ');
}