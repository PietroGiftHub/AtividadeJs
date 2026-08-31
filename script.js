const button = document.querySelector("button")
const codigoRecebido = document.getElementById("codigo")
const QuantidadeComprada = document.getElementById("quantidade")
const paragrafoResultado = document.getElementById("resultado")


button.onclick = calcularValor

function calcularValor() {
    const quantidade = QuantidadeComprada.value
    const codigo = codigoRecebido.value

    if (codigo >= 6 || codigo <= 0){
        alert("Preencha corretamente (o codigo é entre 1 e 5)")
    }

    if (codigo == 1) {
        const valor = 5 * quantidade
        paragrafoResultado.textContent = `Valor a pagar: R$ ${valor}`
    }

    else if (codigo == 2) {
        const valor = 3.50 * quantidade
        paragrafoResultado.textContent = `Valor a pagar: R$ ${valor}`
    }

    else if (codigo == 3) {
        const valor = 4.80 * quantidade
        paragrafoResultado.textContent = `Valor a pagar: R$ ${valor}`
    }

    else if (codigo == 4) {
        const valor = 8.90 * quantidade
        paragrafoResultado.textContent = `Valor a pagar: R$ ${valor}`
    }

    else {
        const valor = 7.32 * quantidade
        paragrafoResultado.textContent = `Valor a pagar: R$ ${valor}`
    }

    codigoRecebido.value = " "
    QuantidadeComprada.value = " "

}