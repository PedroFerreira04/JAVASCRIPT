function carregar() {

    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')   
    var data = new Date()
    var hora = data.getHours()
    const minutos = new Date().getMinutes();
    msg.innerHTML = `Agora são ${hora}:${minutos.toString().padStart(2, '0')} horas`;
    var tooltip = document.getElementById('tooltip');

    let periodo = '';



    if (hora >= 0 && hora < 12){
        imagem.src = 'FotoManha.png'
        document.body.style.backgroundColor = '#ccba68ff'
        periodo = 'Manhã: Hora de acordar e tomar um café!'
        
    } else if (hora >= 12 && hora < 18){

        imagem.src = 'FotoTarde.png'
        document.body.style.backgroundColor = 'rgba(132, 79, 19, 1)'
        periodo = 'Tarde: Que tal uma pausa para o lanche?'

    }else{

        imagem.src = 'FotoNoite.png'
        document.body.style.backgroundColor = '#2C3E50'
        periodo = 'Noite: Hora de descansar!'
    }

     imagem.addEventListener('mousemove', function(event) {
        tooltip.style.display = 'block';
        tooltip.textContent = periodo;

        // Posição do tooltip em relação ao mouse
        tooltip.style.left = event.pageX + 15 + 'px';
        tooltip.style.top = event.pageY + 15 + 'px';
    });

    imagem.addEventListener('mouseleave', function() {
        tooltip.style.display = 'none';
    });

    
}
