const corpo = document.querySelector('div.res');
const divResultado = document.createElement('div');
corpo.appendChild(divResultado);
 
 function calcular(){
    var pegarVelocidade = document.querySelector('input#vel');
    var velocidade = Number(pegarVelocidade.value);

    /* if (velocidade > 60){
        console.log("Velocidade máxima ultrapassada.");
    }else{
        console.log("Tudo certo.");
    } */
        // divResultado.innerHtml = `<p>Velocidade máxima ultrapassada. ${velocidade} Km/h</p>`;

    if (velocidade > 60){
        divResultado.innerHTML = `<p>Velocidade máxima ultrapassada. ${velocidade} Km/h`;
    }else{
        divResultado.innerHTML = `<p>Tudo certo. ${velocidade} Km/h`;
    }

 }