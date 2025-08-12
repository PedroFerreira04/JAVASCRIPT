let lim = document.createElement('button')
lim.textContent = 'Limpar'
lim.style.display = "none"

lim.addEventListener("click",function(){
    document.getElementById('res').innerHTML = ''
    lim.style.display = 'none'
    document.getElementById('txtn').value = ''
        
})

    document.getElementById('limpar').appendChild(lim)

function Gerar(){
    var number = (document.getElementById('txtn').value)
    var res = document.getElementById('res')
    res.innerHTML= ''


    if(number == ""){
        window.alert("[ERRO]")
    } else {

    var number = Number(number)

    for(var contador = 1;contador <= 10; contador++)
        res.innerHTML += `${number}X${contador}=${number*contador}<br>`

        lim.style.display = 'inline-block'

    }

    
}
