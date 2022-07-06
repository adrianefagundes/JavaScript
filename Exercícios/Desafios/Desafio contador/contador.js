let numerodocumento = document.getElementById("numero")
let numero = 0

function mais() {
    numero = numero + 1;
    numerodocumento.innerHTML = numero;
    if (numero >= 0) {
        numerodocumento.style.color = "black";
    }
}

function menos() {
    numero = numero - 1;
    numerodocumento.innerHTML = numero;
    if (numero < 0) {
        numerodocumento.style.color = "red";
    }
}

