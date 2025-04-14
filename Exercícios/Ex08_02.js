const prompt = require('prompt-sync')();
function Num() {
    let nr = Number(prompt(`Qual número você deseja? `));
    if (nr % 2 == 1) {
        console.log(`O número ${nr} é ímpar`);
    }
    else if (nr % 2 == 0){
        console.log(`O número ${nr} é par`);
    }
}
Num();
Num();
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
function ParImpar(nr){
if (nr%2==0){
    console.log(`O número ${nr} é par`);   
} else {
    console.log(`O número ${nr} é ímpar`);
    
}
}
ParImpar(4);
ParImpar(5);