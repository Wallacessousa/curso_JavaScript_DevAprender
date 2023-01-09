//if..else

// se a hora estiver entre 6hrs e 12hrs: Bom dia!
// se a hora estiver entre 6hrs e 12hrs: Boa tarde!
// caso contrario: Boa noite!

// Essa é a semantica do codigo:
//if (condicao) {
    // codigo ser executado}

//else if (outraCondicao) {
    // codigo ser executado}

//else {
    // codigo ser executado}

/// na prática:
let hora = 12;

if (hora > 6 && hora < 11) {
    console.log("bom dia");
}

else if (hora > 12 && hora < 18) {
console.log("boa tarde");
}

else {
    console.log("boa noite");
}