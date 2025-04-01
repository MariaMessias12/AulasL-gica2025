const prompt = require('prompt-sync')();
//Exercíos variáveis 
let nomeAluno = 'Maria Eduarda';
let Altura = 1.57;
let Escola = 'Sesi';
let anoAtual = 2025;

let nomeProfessor = 'Douglas';
let materia = 'Lógica de progamação';
let anoIngresso = 2023;

nomeProfessor = prompt('Digite o nome do professor');
materia = prompt('Digite qual a materia do Prof');
anoIngresso = prompt('Digite o ano que o Prof ingressou');

anoAtual = parseInt(prompt('Digite o ano atual'));
anoIngresso = parseInt('2023');
Altura = parseFloat('1.57');
console.log(nomeAluno, Altura, Escola, anoAtual,);
console.log( typeof anoAtual, typeof Altura, typeof anoIngresso);
console.log(nomeProfessor, materia, anoIngresso);

let valor = 2500.00
let desconto = 190.00
valor = valor - desconto
console.log(`Promoção celular com R$ ${desconto} de desconto, por apenas R$ ${valor-desconto}`);

var numero = 4/2;
numero = numero ** 2;
numero = numero * (50-20);
console.log(`O valor é:`, ${numero} );
