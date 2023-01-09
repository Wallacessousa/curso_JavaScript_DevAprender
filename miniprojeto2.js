// máximo entre 2 valores
//Escreva uma função que usa 2 numero e retorna o maior entre eles.

let valorMaior = max(8,5);
console.log(valorMaior);


function max(numero1,numero2){
    if(numero1 > numero2)
        return numero1;
        return numero2; //(Nem precisa escrever ELSE )

        numero1>numero2 ? numero1: numero2 ;
    }



    let valorMenor = min(7,3);
    console.log(valorMenor);

    function min(a,b){
    return a < b ? a: b;
    }

