const primeiro = [1, 2, 3];
const segundo = [4, 5, 6];

//Combinar
const combinar = primeiro.concat(segundo);
console.log(combinar);

//Dividir
const cortar = combinar.slice(1, 3); //início e final de índice. LEMBRAR: slice sempre vai até o último índice -1.
console.log(cortar); 

/* Obs.: 01. Se passar com um parâmetro apenas, ele vai retornar todos os elementos INICIANDO no índice indicado.
02. Se passar slice sem parâmetros, ele vai copiar o array para dentro da variável definida.
03. Se estivermos trabalhando com objetos, ele vai passar valores e referências. */

// SPREAD (...) : CÓPIAS E CLONAGENS ES6
const combinado = [...primeiro, 'a', segundo, '#'];
const cortado = combinado.slice(); 