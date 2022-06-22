let conjunto = [0, 8, 10, 5, 15, 6, 7]
console.log(conjunto)

conjunto.sort()
/*
for(let pos = 0; pos < conjunto.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${conjunto[pos]}`)
}
    Nesse caso podemos utilizar o FOR SIMPLIFICADO pois estamos usando array!
*/

for(let pos in conjunto) {
    console.log(`A posição ${pos} tem o valor ${conjunto[pos]}`)
}
    

