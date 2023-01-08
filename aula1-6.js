// Variáveis

let nome = 'Wallace';
let idade = 33;
let cidade = 'Brasília';
let comida = 'arroz';
comida = 'frango'; // Let permite atualizar/mudar a variável
const bebida = 'cerveja'; // Const não permite add outro valor para a variável "bebida".

// Ações



//----------- Aula 3 tipos primitivos
// tipos de valores
let name = 'Wallace';// string literal
let age = 23; // number literal
let estaAprovado = true; //boolean
let sobrenome = undefined; // undefined
let corSelecionado = null // Quando você quer redefinir o valor. Por ex. Se a pessoavai escolher a cor do site na hora que acessar.



//---------- Aula 4 Tipagem dinâmica

//---------- Aula 5 - Objetos
let pessoa = {
    nome: 'João',
    idade: 33,
    estaAprovado: true
}

//console.log(pessoa);


//---------- Aula 5 - Arrays
// Arrays é um conjunto de dados que pode ser acessadas por um índice

let dados = ['jonas',45,'branco',true];

console.log(dados); // imprime tudo na array
console.log(dados[2]); // Assim vai imprimir o item n. 2 (branco)
console.log(dados.length); // mostra tamanho, quantidade



// ---------- Aula 6 - Functions
// Verbo + Substantivo. Ex: resetaCor

let corSite = "azul";

function resetaCor(cor,tonalidade){
    corSite = cor + ' ' + tonalidade; // botar aspas com espaço, se  não imprime tudo colado.
};

console.log(corSite);

resetaCor("vermelho");
console.log(corSite);
resetaCor("verde", " claro");
console.log(corSite);


// ---------- Aula 7 - Tipos de funções