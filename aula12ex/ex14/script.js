function verificar(){
    var data = new Date();
    var ano = data.getFullYear();

    var anoDigitado = document.querySelector('input#txtano');
    var resultado = document.querySelector('div.resultado');
    numeroAno = Number(anoDigitado.value);

    if (numeroAno.length == 0 || numeroAno > ano){
        resultado.innerHTML = 'ERRO! Verifique os dados e tente novamente.'
    }
    else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - numeroAno;
        var genero = '';
        if (fsex[0].checked){
            genero = 'Homem';
        }
        else{
            genero = 'Mulher';
        }

        resultado.innerHTML = `Foi detectado um(a) ${genero} de ${idade} anos.`;

    }

}