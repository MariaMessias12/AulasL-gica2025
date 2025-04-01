const prompt = require('prompt-sync')();
let comidas = [];
for(let x = 1; x <= 6 ; x++){
    let comida = prompt('Digite uma comida: ');
    comidas.push(comida);
}

console.log(comidas[0]);

console.log(comidas[4]);

comidas[6] = 'O segredo dos animais'
console.log(comidas);

comidas = [...comidas,'Duro de matar']
console.log(comidas);

//Inserindo na posição 5
comidas.splice(5,0,'Sherek 2');
console.log(comidas);

//excluindo primeiro item da lista
comidas.shift();
console.log(comidas);

//Excluindo o último item da lista
comidas.pop();
console.log(comidas);

//Exibindo os 3 primeiros itens
console.log(comidas.slice(0,3));


console.log(comidas.slice(-4));

//Exibindo o tamanho da lista
console.log(comidas.length);

//invertendo a ordem
comidas.reverse();