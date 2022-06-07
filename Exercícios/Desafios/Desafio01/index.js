function carregar() {
    var mensagem = window.document.getElementById('mensagem');
    var imagem = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    mensagem.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora < 12) {
        imagem.src = 'imagens/manhã.png'
        document.body.style.background = '#F2EFCD'
    } else if (hora >=12 && hora < 18) {
        imagem.src = 'imagens/tarde.png'
        document.body.style.background = '#7A99B4'
    } else {
        imagem.src='imagens/noite.png'
        document.body.style.background = '#2F3B3C'
    }
}
