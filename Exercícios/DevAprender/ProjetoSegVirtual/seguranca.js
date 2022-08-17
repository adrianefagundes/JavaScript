function VerificarEntrada() {
    nomeConvidado = document.getElementById('nome').value; // value = o que está dentro do input
    convidadosAdriane = ['Daniel', 'Diego Feijó', 'Camila Barcela Leal Lobo', 'André Trevisol', 'Jonas Lauriano', 'Larissa Lorenzi', 'Henrique Lobo']
    if (convidadosAdriane.includes(nomeConvidado)) {
        document.getElementById('permissaoEntrada').innerText = 'Você pode entrar!'
    } else {
        document.getElementById('permissaoEntrada').innerText = 'Você não tem permissão para entrar.'
    }
}
