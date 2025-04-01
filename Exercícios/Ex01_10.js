const prompt = require('prompt-sync')();

let dias = Number(prompt('Quantos dias ficou com o carro?'));
let valortotal = (km * 0.15) + (dias*60);
console.log(`Você pagará R$${valortotal}`);
let km = Number(prompt("Quantos km você percorreu?"));