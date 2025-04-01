const prompt = require('prompt-sync')();
//Operadores relacionais
//== quer dizar igual, igualdade
//!= quer dizer diferente
//> quer dizer maior
//< quer dize menor

let a = 2;
let b = 3;
console.log(a>b); //false
console.log(a==b); //false
console.log(a!=b); //true
console.log(a>b); //false
console.log(a>=b); //true

//if estrutura de condição
let tenhoIngresso = true;
if(tenhoIngresso == true) {

}
    //se a condição for verdadeira
    //entra no bloco de comando
    console.log('Posso entrar no show');


    let idade = Number(prompt("Qual é a sua idade?"));
    if (idade <= 18) {
        console.log('Maior de idade');
        
    }tenhoIngresso =  false;
    if (tenhoIngresso == true) { //se a condiaçâo for verdadeira
        console.log('Posso entra no show');
    } else { //Se a primeira condição for false
        console.log('Estou barrado na portaria');
    }

    