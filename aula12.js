// OPERADORES LÓGICOS
//and or not

// Operador logico e (&&)
// Retorna True se os dois operando forem true.

console.log(false && true); // imprime FALSE
console.log(true && true); // imprime TRUE
console.log(false && false); // imprime false




// exemplo real - Candidado a vaga de trabalho
let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

console.log(podeAplicar);




// Operador lógico ou (||)
// Retornar true se um dos operando for true
let temCalabresa = true;
let temQueijo = false;
let podeMandar = temCalabresa || temQueijo;

console.log(podeMandar);

// Operador NOT (!) - Negação

let naoTemCalabresa = !podeMandar; // Vai imprimir FALSE
console.log(naoTemCalabresa);
// Vai transformar o podeMandar em falso, mesmo que tenha um dos operandos TRUE.
