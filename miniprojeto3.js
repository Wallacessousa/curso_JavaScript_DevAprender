// Exercicio FizzBuzz

// Quando a entrada for:
// Divisivel por 3 ==> Fizz
// Divisivel por 5 ==> Buzz
// Divisivel por 3 e 5 ==> FizzBuzz
// Não é numero ==> Não é numero
// Não divisivel por 3 e 5 ==> o próprio número


const resultado = fizzBuzz(10);
console.log(resultado);

function fizzBuzz(entrada){
    if (entrada % 3 === 0 && entrada % 5 === 0)
    return 'FizzBuzz';
    if ( typeof entrada !== 'number')
    return 'Não é um número';
    if (entrada % 3 === 0)
    return 'Fizz';
    if (entrada % 5 === 0)
    return 'Buzz';
return entrada;
}