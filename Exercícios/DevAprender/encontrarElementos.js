const marcas = [
     {id: 1, nome: 'a'}, // alt + shift + pra baixo: copia a linha selecionada!
     {id: 2, nome: 'b'},
     {id: 3, nome: 'c'}
];

const marca = marcas.find(function(marca) { // find() é um método que retorna o valor do primeiro elemento de um array que satisfaça a condição que foi passada. Caso contrário, retorna undefined.
    return marca.nome === 'a';
}); // por que fecha aqui o parêntese?

console.log(marca);