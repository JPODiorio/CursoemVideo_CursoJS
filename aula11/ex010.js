const corpo = document.querySelector('div.res');
const divResultado = document.createElement('div');
corpo.appendChild(divResultado);
 
 function verificar(){
    var pegarPais = document.querySelector('input#pais');
    var pais = pegarPais.value;

    /* if (velocidade > 60){
        console.log("Velocidade máxima ultrapassada.");
    }else{
        console.log("Tudo certo.");
    } */
        // divResultado.innerHtml = `<p>Velocidade máxima ultrapassada. ${velocidade} Km/h</p>`;

    if (pais.toLowerCase() == 'brasil'){
        divResultado.innerHTML = `<p>Brasileiro. ${pais.toLowerCase()}.</p>`;
    }else{
        divResultado.innerHTML = `<p>Estrangeiro. ${pais.toLowerCase()}.</p>`;
    }

 }