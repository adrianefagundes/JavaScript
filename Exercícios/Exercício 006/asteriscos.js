exibirAsteriscos(8);

function exibirAsteriscos(linhas) {
   /* let padrao = '';
    for (let linha = 1; linha <= linhas; linha++){
        padrao += '*';
        console.log(padrao);
    } */
    for(let linha = 1; linha <= linhas; linha++) {
        let padrao = '';
        for(let i = 0; i < linha; i++) { // loop nested! Importante saber como funciona pois é comum na profissão.
            padrao += '*';
        }
        console.log(padrao);
    }
}