function linha(){
    console.log('-*-*-*-*-*-*-*-*-*-*-');
}

// Função sem parâmetros e ser retorno
linha();
console.log(  'SESI/SENAI'  );
linha();

function cabecalho(){
    linha();
    console.log('SESI/SENAI');
   linha();
}

// Função com parâmetro mas sem retorno
function CabecalhoEscola(nomeEscola){
    linha();
    console.log('nomeEscola');
   linha();
}
CabecalhoEscola('SESI');
CabecalhoEscola('USP');

function Soma(nr1,nr2){
    let resultado = nr1 + nr2;
    console.log(resultado);
    
}
Soma (5,8);
Soma (233333,999721345);

//Retorno de uma função é o valor que a função envia de volta ao código que a chamou após sua execução

// Função com parâmetros e retorno
function media(n1,n2){
let resultado = (n1+n2)/2;
return resultado;
}
let valor = media(5,8);