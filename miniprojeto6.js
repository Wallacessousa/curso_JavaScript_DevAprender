//
// criar uma função que leia as propriedades do obje, identifique os strings e exiba.

const filme = {
    titulo : 'Vingadores',
    ano : 2018,
    diretor : 'Robin',
    personagem : 'Thor'
}
exibirPropriedades(filme);
function exibirPropriedades(obj) {
    for (prop in obj)
        if (typeof obj[prop] === 'string')
            console.log(prop,obj[prop])

}

// o codigo imprime tudo, exceto o ano, porque não é string.