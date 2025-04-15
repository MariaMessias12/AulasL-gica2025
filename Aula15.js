//Escopo de variáveis
//Variável local só pode ser acessada dentro do bloco
//Variável global pode ser acessada em qualquer lugar

//Utilizando variáveis locais
function Nomeescola(){
    let escola = 'SESI';
    console.log(`Valor dentro da função: ${escola}`);
    
}

let escola = 'SENAI';
console.log(`Valor fora da função: ${escola}`);
Nomeescola();
console.log(`Valor após a função: ${escola}`);

//
var escola2 = 'SENAI';

function Nomeescola(){
    escola2 = 'SESI'
    console.log(`Valor dentro da função: ${escola2}`);
    
}

console.log(`Valor fora da função: ${escola2}`);
Nomeescola();
console.log(`Valor após a função: ${escola2}`);

//Documentando funções usando o jsDoc
/**
 * Soma de dois números
 * @param {number} a - Primeiro número
 * @param {number} b - Segundo número
 * @returns {number} - Soma dos dois números
 */

function Soma(a,b){
    return a + b;
}
Soma(2,4);