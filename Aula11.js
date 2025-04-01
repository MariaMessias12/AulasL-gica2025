//Estrutura de repetiçâo for
const prompt = require('prompt-sync')();

///Inicialização da variável; condição do for; incremento da variável
for (let contador =1; contador <=5; contador ++){
    console.log(contador);
    
}
console.log('FIM 🙉');

//Neste for iniciamos a partir do número 5, até o nº 50
for (let conta = 5; conta <=50; conta ++){
    console.log(`O contador está em ${conta}`);
    
}
console.log('FIM 🤭');

//Utilizando o break  para aprar o for
for (let contador = 5; contador <=500; contador ++){
    console.log(`O contador está em ${contador}`);
    if ( contador == 50){
        break;
    }
}
console.log('FIM 😚');


console.log('Entregando os notebooks');
for (let nr = 1; nr <= 32; nr++){
    let nome = prompt(`Quem é o nº ${nr}`);
    let presente = prompt (`O(A) ${nome} está presente (S ou N)? `)
    if (presente == 'S'){
        console.log(`Pegar o notebook ${nr}`);
        console.log(`Levar o notebook até o(a) ${nome}`);
        
    }else{
        console.log(`Não pegar o notebook ${nr}`);   
    }
}

//Tabuada com o for
let nr = 6;
for (let contador = 1; contador <=10; contador++){
    console.log(`${nr} x ${contador} = ${nr * contador}`);
    
}