function contar(){
    var inicio = Number(document.getElementById('txtinicio').value)
    var fim = Number(document.getElementById('txtfim').value)
    var passo = Number(document.getElementById('txtpasso').value)
    var res = document.getElementById('res')

    res.innerHTML = 'contando: '

    if(passo == 0 || fim < inicio){
        window.alert("[ERRO]Verifique, escreva corretamente[ERRO]")
    } else {
    for(var inicio;inicio <= fim;inicio += passo){
        res.innerHTML += `${inicio}&#128073;`
            }


    res.innerHTML += '🏁 FIM!'
    }


    
}