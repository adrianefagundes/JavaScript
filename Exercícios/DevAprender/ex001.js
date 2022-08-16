
let maiorValor = retornaMaior(8, 5);
console.log(maiorValor);

//função padrão
/*
function retornarMaior(numero1, numero2) {
    if (numero1 > numero2) {
       return numero1;
    } else {
        return numero2;
    }
} */

//operador ternário
function retornarMaior(numero1, numero2) {
    return numero1 > numero2 ?  numero1 :  numero2 ;
}
