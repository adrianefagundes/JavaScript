const array = [85, 78, 91]

console.log(mediaDoAluno(array));

function calcularMedia(array) {
    let soma = 0 // aqui necessariamente é uma LET, pois terá valores modificados.
    for(let valor of array) {
        soma += valor;
    }
    return soma/(array.length); // retorna a média adquirida para a função.
}

function mediaDoAluno(notas) {
    const media = calcularMedia(notas); // chama a função anterior para adquirir o valor da média e passar pelas condições.
    if (media <= 59) return 'F';
    if (media <= 69) return 'D';
    if (media <= 79) return 'C';
    if (media <= 89) return 'B';
    return 'A'
}

