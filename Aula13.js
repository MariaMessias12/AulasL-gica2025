const prompt = require('prompt-sync')();
//Iteração sobre nossos vetores (arrays/listas)

//Vetor        0        1         2       3         
let frutas= ["Maçã",'Banana','Abacaxi','uva'];
//Para iterar sobre um vetor, utilizamos o for
for (let x = 0; x < frutas.length;x++){
    console.log(`Afruta da posição ${x} é ${frutas[x]}`);
    
}
console.log('FIM');

//Iterando sobre  uma lista usando o for of
let listaJogadores = ['Pelé', 'Maradona','Messi','Ronaldo'];
for (let jogador of listaJogadores){
    console.log(`O jogador é ${jogador}`);
    
}

let listaNumeros = [4, 5, 8, 3, 2];
let soma = 0;
for (let nr of listaNumeros){
    console.log(`O nº é ${nr}`);
     soma = nr + soma;
}
console.log(soma);

//Vericando se um elemento existe em um array
let vogais = ['a','e','i','o','u'];
let letraParaVerificar = prompt('Digite uma letra: ');
if (vogais.includes(letraParaVerificar.toLowerCase())){
    console.log(`A letra ${letraParaVerificar} é uma vogal`);
    
}else{
    console.log(`A ${letraParaVerificar} não é uma vogal`);
    
}
let vogal = ['a','e','i','o','u'];
let consoantes = ['b','c','d','f','g','h','j','k','l','m','n','p','q'];
let nrs = ['1','2','3', '5','6','7','8','9'];
let letraparaVerificar = prompt('Digite uma letra: ');
if (vogais.includes(letraparaVerificar.toLowerCase())){
    console.log(`A letra ${letraparaVerificar} é uma vogal`);
} else if (consoantes.includes(letraparaVerificar.toLowerCase())){
console.log(`A letra ${letraparaVerificar} é uma consoante`);
} else if (nrs.includes(letraparaVerificar)){
console.log(` ${letraparaVerificar} é um número`);

}else{
    console.log(`A ${letraParaVerificar} não é uma letra nem um número`);
    
}

// posição           0       1         2       3
let listaFrutas = ['Maçã','Banana','Abacaxi','Uva'];
for (const [pos, fruta] of listaFrutas.entries()){ //Mostra a posição e o valor do vetor
console.log(`A fruta da posição ${pos} e ${fruta}`);

}


let produtos = 'Celular,Notebook,TV,Tablet,Monitor';
let listaProdutos = produtos.split(',');
console.log(produtos);
console.log(listaProdutos);

//Strings são lista (vetores/arrays) de caracteres
//            01234
let escola = 'SENAI';
for( let letras of escola){
    console.log(letras);
    
}

