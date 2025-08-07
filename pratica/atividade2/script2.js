function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txano')
    var res = document.getElementById('res')
    
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO]Verifique se o ano de nascimento esta correto![ERRO]')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fAno.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked){
            genero = 'homem'
                if(idade >= 0 && idade < 10){
                    img.setAttribute('src','homem_bebe.png')

                } else if (idade < 21){
                    img.setAttribute('src','homem_jovem.png')

                } else if (idade < 50){
                    img.setAttribute('src','homem_adulto.png')
                }else{
                    img.setAttribute('src','homem_idoso.png')
                }



        } else if (fsex[1].checked){
            genero = 'mulher'
                if(idade >= 0 && idade < 10){
                    img.setAttribute('src','mulher_bebe.png')

                } else if (idade < 21){
                    img.setAttribute('src','mulher_jovem.png')
                } else if (idade < 50){
                    img.setAttribute('src','mulher_adulta.png')
                }else{
                    img.setAttribute('src','mulher_idosa.png')
                }
        }

        res.innerHTML = `A pessoa é ${genero} com ${idade} anos!`

        res.appendChild(img)
       
    }
}