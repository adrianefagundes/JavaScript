function contagem() {
    var inicio = document.getElementById('iniciotxt')
    var fim = document.getElementById('fimtxt')
    var passo = document.getElementById('passotxt')
    var outcome = document.getElementById('outcome')

   if (inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
       window.alert('[ERRO] Dados inválidos!')
   } else {
        outcome.innerHTML = 'Contando:'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        for(var cont = i; cont <= f; cont += p) {
            outcome.innerHTML += `${cont} `
        }
   }
}
