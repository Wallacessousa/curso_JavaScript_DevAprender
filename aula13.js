// COMPARAÇÕES - NÃO BOLEANOS

// falsy - (undefined, null, 0 false, '', NaN(Not A Number))
// Truthy - 

// Quando você comparar com OR (||), ele sempre retorna true.
// Tudo que tem no 'falsy' tem valor false. ex:

let corPersonalizada = 'vermelho';
let corPadrao = 'azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil); //vermelho, porque foi a primeira string a ser comparada, e é uma true.


//ex 2:

let corPersonalizada2 = '';
let corPadrao2 = 'purple';
let corPerfil2 = corPersonalizada2 || corPadrao2;

console.log(corPerfil2); // imprime PURPLE, porque string vaziu é um FALSY.