const prompt = require('prompt-sync')();
let numero1 = Number(prompt("Digite o 1ª número:"));
let numero2 = Number(prompt("Digite o 2ª número:"));
if(numero1==numero2){
    console.log('Os números são iguais');
    
}
else{
    console.log('Os números são diferentes');
    
}