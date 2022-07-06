let numerodocumento = document.getElementById("numero")
let numero = 0

function mais() {
    numero = numero + 1;
    numerodocumento.innerHTML = numero;
}

function menos() {
    numero = numero - 1;
    numerodocumento.innerHTML = numero;
}
