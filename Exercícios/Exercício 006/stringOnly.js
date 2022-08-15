const filme = {
    Nome : 'A Sociedade dos Poetas Mortos',
    Ano : 1990,
    Diretor : 'Peter Weir',
    Gênero : 'Drama'
}

exibirPropriedades(filme);
function exibirPropriedades(obj) {
    for (prop in obj) 
        if(typeof obj[prop] === 'string')
            console.log(prop, obj[prop])
        }