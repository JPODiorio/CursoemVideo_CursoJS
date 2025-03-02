function carregar(){
    var msg = document.querySelector('div.mensagem');
    var img = document.querySelector('img#manha');

    var data = new Date();
    hora = data.getHours();
    minuto = data.getMinutes();

    msg.innerHTML = `Agora são ${hora}:${minuto}.`

    if (hora >= 5 && hora < 12){
        msg.innerHTML = "<h2>Bom Dia!</h2>"
        img.src = "./src/manha.jpg"
        document.body.style.background = 'cyan';
    }
    else if (hora > 12 && hora <=18){
        msg.innerHTML = "<h2>Boa Tarde!</h2>"
        img.src = "./src/tarde.jpg"
        document.body.style.background = 'orange';
    }
    else{
        msg.innerHTML = "<h2>Boa Noite!</h2>"
        img.src = "./src/noite.jpg"
        document.body.style.background = 'darkblue';
    }

}