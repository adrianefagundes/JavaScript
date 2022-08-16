verificarVelocidade(180);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const adicionarPonto = 5;

    if (velocidade <= velocidadeMaxima) {
        console.log('Você está dentro do limite de velocidade.');
    } else {
        const pontos = Math.floor((velocidade - velocidadeMaxima)/adicionarPonto);
        if (pontos >= 12)
            console.log('Sua carteira está suspensa!');
        else 
            console.log('Pontos:', pontos);
    }   
}