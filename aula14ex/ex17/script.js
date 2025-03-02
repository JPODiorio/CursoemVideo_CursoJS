function gerar(){
    var numero = document.querySelector('input#numero');
    var resultado = document.querySelector('select#seltab');
    var titulo = document.querySelector('p.titulo')
    var mult;

    if (numero.value.length === 0){
        titulo.innerHTML = `Insira um número.<br>`;
    }
    else{
        for (var i = 1; i<=10; i++){
            titulo.innerHTML = `Tabuada de ${Number(numero.value)}:<br>`;
            mult = Number(numero.value)*i;
            let item = document.createElement('option');
            item.text = `${Number(numero.value)} x ${i} = ${mult}`
            item.value = `tab${i}`
            resultado.appendChild(item);
            //resultado.innerHTML += `${Number(numero.value)} x ${i} = ${mult}<br>`;
        }
    }
}