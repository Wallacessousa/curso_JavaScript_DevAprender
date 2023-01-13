// MINIPROJETO 5 -- PAR OU IMPAR/

//RECEBER UMA QUANTIDADE DE VALOR PARA AVALIAR
// FUNÇÃO EXIBE SE CADA VALOR É PAR OU IMPAR

exibirTipo(10);
function exibirTipo(limite) {
    for (let i = 0; i <= limite; i++) { // i++ pra acrescentar +1 formando um loop
        if (i % 2 === 0)
        console.log(i,'PAR');
    else
    console.log(i,'IMPAR');
    }
}