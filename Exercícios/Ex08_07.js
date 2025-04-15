function Soma(nr1, nr2){
    console.log(nr1+nr2);
    
}
function Subtrair(nr1,nr2){
    console.log(n1-nr2);
    
}
function Multiplicar(nr1,nr2){
    console.log(nr1*nr2);
    
}
function Dividir(nr1,nr2){
    console.log(mr1/nr2);
    
}
function Caucular(nr1,nr2,op){
    if (po=='+'){
        Soma(nr1+nr2);
        
    } else if (op=='-'){
        Subtrair(nr1-nr2);
    }else if (op=='*'){
        Multiplicar(nr1*nr2);
        }else if(op=='/'){
            Dividir(nr1/nr2);
        }else{
            console.log('Uai o que você digitou não é um operador válido 🤔');
            
        }
}