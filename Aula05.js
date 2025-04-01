const prompt = require('prompt-sync')();
//Operações com variaveis
let  nr1 = 20;
let nr2 = 10
let soma = nr1 + nr2;
console.log (`A soma entre ${nr1} ${nr2} é ${soma}`);

let subtracao = nr1 - nr2;
console.log(`A subtracao entre ${nr1} e ${nr2} é ${subtracao}`);

let multiplicacao = nr1 * nr2;
console.log (`A multiplcação entre ${nr1} e ${nr2} é ${multiplicacao}`);

let divisao = nr1 / nr2;
console.log (`A divisão entre ${nr1} e ${nr2} é ${divisao}`);

let exponenciação = nr1 ** nr2;
console.log (`A exponenciação entre ${nr1} e ${nr2} é ${exponenciação}`);


let valor = 2500.00
let desconto = 190.00
valor = valor - desconto
console.log(`Promoção celular com R$ ${desconto} de desconto, por apenas R$ ${valor-desconto}`);

var numero = 4/2;
numero = numero ** 2;
numero = numero * (50-20);
console.log(`O valor é:`, numero );
console.log(`O valor é ${numero}`);

//Calculando o dobre e ametade de um numero
let nr = Number(prompt(`Qual número você deseja?`));
let dobro = nr * 2;
let metade = nr / 2;
console.log(`O nr é ${nr}, sua metade é ${metade}, e o dobro é ${dobro}`);

//Exercício 3
let num = Number(prompt(`Quantas horas foram trabalhadas?`));
let dias = 15;
let produto = num * dias;
