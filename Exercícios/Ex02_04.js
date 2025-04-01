const prompt = require('prompt-sync')();
let num = Number(prompt("Digite um número inteiro:"));
if(num>0){
    console.log('O número é positivo');
    
}
else{
    console.log('O número é negativo');
    
}