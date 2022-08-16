//Primeira opção:

let faixaDePreco = [
    {tooltip: 'até R$700', minimo: 0, maximo: 700},
    {tooltip: 'de R$700 até R$1000', minimo: 700, maximo: 1000},
    {tooltip: 'R$1000 ou mais', minimo: 1000, maximo: 999999999999}
]

console.log(faixaDePreco);

//Segunda opção:

function criaFaixaDePreco(tooltip, minimo, maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas = [
    criaFaixaDePreco('a', 1, 100),
    criaFaixaDePreco('b', 100, 1000),
    criaFaixaDePreco('c', 1000, 10000),
]

console.log(faixas);

//Terceira opção:

function FaixaPreco(tooltip, minimo, maximo) {
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixas2 =  [
    new FaixaPreco('d', 10, 20),
    new FaixaPreco('e', 30, 40),
    new FaixaPreco('f', 50, 60)
];

console.log(faixas2);