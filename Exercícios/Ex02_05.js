const prompt = require('prompt-sync')();
let anoNascimento = Number(prompt("Digite o ano do seu nascimento:"));
let idade = 2025 - anoNascimento;
if(idade>=18){
    console.log('Maior idade');  
}
else{
    console.log('Menor idade');

}