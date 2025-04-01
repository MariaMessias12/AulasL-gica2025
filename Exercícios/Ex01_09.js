//Faça um algoritmo que leia o preço do produto e mostre seu novo preço com 5% de desconto
const prompt = require('prompt-sync')();

let preco= Number(prompt('Qual é o preço do produto?'));
let novopreco = preco - (preco * 0.5); 
console.log(`O valor do produto com desconto é: ${novopreco.toFixed(2)}`);
