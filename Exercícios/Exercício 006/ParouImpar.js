parOuImpar(10);
function parOuImpar(numero) {
    for (let i = 0; i <= numero; i++)
        if (i % 2 === 0) {
            console.log(i, 'PAR'); // o i é colocado para que apareça o número analisado no terminal.
        } else {
            console.log(i, 'ÍMPAR');
        }
}