function Clicar() {
    var peso = document.getElementById("peso")
    var  altu = document.getElementById("altu")
    var res = document.getElementById("res")

    var imc = peso.value/(altu.value*altu.value)

    res.innerHTML = `IMC: ${imc}`
}