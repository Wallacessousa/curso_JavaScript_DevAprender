// projeto - MULTIPLOS DE 3 E 5. (até 10)

// multiplus de 3: 3, 6 e 9.
// multiplus de 5: 5 e 10

// somando os multiplios
// armazenar os multiplos de 3
// armazenar os multiplos de 5
// somar os dois

somar(10);
function somar(limite) {
    let multiplosDe3 = 0;
    let multiplosDe5 = 0;
    for(i =0;i <=limite;i++){
        if(i % 3 === 0)
        multiplosDe3 += i;
        if(i % 5 === 0)
        multiplosDe5 += i;
    }

    console.log(multiplosDe3 + multiplosDe5);
}