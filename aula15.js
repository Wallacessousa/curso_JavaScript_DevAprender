// SWITCH CASE - Mais uma forma de fazer comparações

let permissao; // comum,gerente,diretor
permissao = "gerente"; // Quando alterar essa variável, altera a mensagem.

switch (permissao) {
    case 'comum':
    console.log('usuário comum');
    break; 

    case 'gerente':
    console.log('usuário gerente');
    break; 

    case 'diretor':
    console.log('usuário direto');
    break; 

        // USAMOS BREAK  Pro sistema saber que não precisa mais procurar condição depois que achar essa. Pra ele parar aqui.

    default: // tipo o ELSE
        console.log('Usuário não reconhecido!');
}