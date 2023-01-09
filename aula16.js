// Tipos de: LAÇO - LOOP - FOR

// 1.For
// 2.While
// 3.Do..while
// 4.For..In
// 5.For..of

// Basicamente fazem a mesma coisa, em cenários difterentes.


// 1.For

for(let i = 0; i < 5; i++){
    console.log('Teste',i);
} // Ele identifica que i = 0. 0 é menor que 5. Então imprime i+1. = 1
    // Ele identifica que i = 1. 1 é menor que 5. Então imprime i+1. = 2
    // Ele identifica que i = 2. 2 é menor que 5. Então imprime i+1. = 3
    // Quando chega no 5, ele identifica que é i < 5, então não executa a proxima função.


// Dá pra fazer descrescendo. é só inverter os sinais < pra > e ++ pra --