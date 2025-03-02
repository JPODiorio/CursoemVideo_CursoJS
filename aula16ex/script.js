let resultado = document.querySelector('div.resultado');

function somar(vetor){
    let soma = 0;
    for (let i=0; i<vetor.length; i++){
        soma += vetor[i];
    }
    return soma;
}

function media(vetor){
    return somar(vetor)/vetor.length;
}

function maior(vetor){
    let maior = vetor[0];
    for (let i=0; i<vetor.length; i++){
        if (vetor[i] > maior){
            maior = vetor[i]
        }
    }
    return maior;
}

function menor(vetor){
    let menor = vetor[0];
    for (let i=0; i<vetor.length; i++){
        if (vetor[i] < menor){
            menor = vetor[i]
        }
    }
    return menor;
}

function finalizar(){
    if (vetor.length == 0){
        alert("Vetor vazio. Por favor, insira números.");
    }
    else{
        resultado.innerHTML = `Resultado: <br>
                                Ao todo temos ${vetor.length} números cadastrados.<br>
                                A soma dos números é ${somar(vetor)}.<br>
                                A média dos números é ${media(vetor).toFixed(2)}.<br>
                                O maior número é ${maior(vetor)}.<br>
                                O menor número é ${menor(vetor)}.<br>`;
        console.log(somar(vetor));
        console.log(media(vetor));
    }
}

let vetor = [];
let n = document.querySelector('input#iNumero');
let lista = document.querySelector('select#listaNumeros');

function inserir(){
    if (n.value.length === 0){
        alert("Insira um número.");
    }
    else if(Number(n.value) < 1 || Number(n.value) > 100){
        alert("Número fora dos limites.");
    }
    else if(vetor.includes(Number(n.value))){
        alert("Número já inserido no vetor.");
    }
    else{
        resultado.innerHTML = 'Resultado: <br>';
        vetor.push(Number(n.value));
        console.log(vetor);
        console.log(vetor.length);
        let item = document.createElement('option');
        item.text = `Valor ${Number(n.value)} adicionado.`
        lista.appendChild(item);
    }
    n.value = '';
    n.focus();
}