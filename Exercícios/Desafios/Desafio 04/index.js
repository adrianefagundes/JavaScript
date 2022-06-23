function tabuada() {
    let num = document.getElementById('numbertxt')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        windod.alert('Valor não indicado.')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML='' // Para limpar o Select e não adicionar outra tabuada embaixo da outra.
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}