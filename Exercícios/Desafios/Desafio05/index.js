let add = document.getElementById('numbertxt')
let numeros = document.getElementById('lista')
let resposta = document.getElementById('res')
let valores = []

function numero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true 
    } else {
        return false
    }
}

function adicionar() {
    if (numero(add.value) && !inLista(add.value, valores)) {
        valores.push(Number(add.value))
        let item = document.createElement('option')
        item.text = `O valor ${add.value} foi adicionado.`
        lista.appendChild(item)
        resposta.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já adicionado na lista.')
    }
    add.value = '' // Limpa o valor recém adicionado na caixa de texto.
    add.focus() // Faz com que o "mouse" fique na caixa de texto.
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores para que sejam analizados!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let posicao in valores) {
            soma += valores[posicao]
            media = soma / valores.length
            if (valores[posicao] > maior)
            maior = valores[posicao]
            if (valores[posicao] < menor) 
                menor = valores[posicao]
        }
        
        resposta.innerHTML = ''
        resposta.innerHTML += `<p> Ao todo foram ${total} números cadastrados. </p>`
        resposta.innerHTML += `<p> O maior número adicionado foi ${maior}. </p>`
        resposta.innerHTML += `<p> O menor número adicionado foi ${menor}. </p>`
        resposta.innerHTML += `<p> A soma dos valores adicionados é ${soma}. </p>`
        resposta.innerHTML += `<p> A média dos valores adicionados foi de ${media}. </p>`
    }
}

