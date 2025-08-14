function Clicar() {
    var peso = document.getElementById("peso")
    var  altu = document.getElementById("altu")
    var res = document.getElementById("res")

    var imc = peso.value/(altu.value * altu.value)

    if(peso.value == '' || altu.value == "" ){
        window.alert("ERRO")
    } else {
        var imc = Number(peso.value/(altu.value * altu.value))
        var clas = ''
        
        if(imc < 18.5){
            clas = 'Você está abaixo do Peso'
        } else if(imc < 24.9){
            clas = 'Você está no peso ideal!'
        } else if(imc < 29.9){ 
            clas = 'Você está com sobrepeso'
        } else {
            clas = 'Você está Obeso'
        }
            if(imc >= 18.5 && imc <= 24.9){
                res.innerHTML =
                `<div class="valor-imcbom">IMC: ${imc.toFixed(2)}</div>
                <div class="texto-imc">${clas}</div>`                
            }else {
                res.innerHTML = 
                `<div class="valor-imcruim">IMC: ${imc.toFixed(2)}</div>
                <div class="texto-imc">${clas}</div>` 
    }
    }
    
}