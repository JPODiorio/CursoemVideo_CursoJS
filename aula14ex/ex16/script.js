function contar(){
    var inicio = document.querySelector('input#txtinicio');
    var fim = document.querySelector('input#txtfim');
    var passo = document.querySelector('input#txtpasso');
    var mostrarContagem = document.querySelector('p.contagem');

    if (Number(passo.value) <= 0 || inicio.value.length === 0 || fim.value.length === 0){
        mostrarContagem.innerHTML = "Impossível contar, verifique os valores.";
    }
    else if (Number(inicio.value) < Number(fim.value)){
        mostrarContagem.innerHTML = "Contagem:"
        for(var contador = Number(inicio.value); contador <= Number(fim.value); contador+=Number(passo.value)){
            console.log(contador);
            mostrarContagem.innerHTML += ` ${contador}`;
        }
    }
    else{
        mostrarContagem.innerHTML = "Contagem:"
        for(var contador = Number(inicio.value); contador >= Number(fim.value); contador-=Number(passo.value)){
            console.log(contador);
            mostrarContagem.innerHTML += ` ${contador}`;
        }
    }      
}

