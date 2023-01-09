// MEDIDOR DE VELOCIDADE

// Máx 70km/hr
// Cada 5km, ganha 1 ponto na carteira
// caso a pontuação seja maior que 12, a carteira é suspensa.
// Math.Floor (função pra arredondar numeros)

verificarVelocidade(130); // <<<<  Quando mudar aqui, a magia vai acontecer.

function verificarVelocidade (velocidade) {
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;    
    if ( velocidade <= velocidadeMaxima )
    console.log('ok');
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto));
        if ( pontos >= 12)
        console.log('Carteira Suspensa');
        else
        console.log('Pontos',pontos);

    }
}