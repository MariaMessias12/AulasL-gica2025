const prompt = require('prompt-sync')();

let velocidade = Number(prompt("Digite a velocidade que do carro:"));
if(velocidade > 80){
    let multa = (velocidade - 80) * 7;
    console.log(`O carro foi multado em R$${multa}`);
}
else{
    console.log('O carro não foi multado');
}