const resultado = fizzBuzz(20);
console.log(resultado);

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number') 
        console.log('Não é um número.');
    if ((entrada % 3 === 0) && (entrada % 5 === 0)) //deve ser feito primeiro, caso contrário o programa vai rodar e parará quando chegar no %3 e retornará a resposta errada.
        console.log('FizzBuzz');
    if (entrada % 3 === 0) 
        console.log('Fizz');
    if (entrada % 5 === 0) 
        console.log('Buzz');
        
    return entrada;
} 