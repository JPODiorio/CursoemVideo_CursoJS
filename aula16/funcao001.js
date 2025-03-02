let resultado = function(n){
    if (n%2==0){
        return 'par';
    }
    return 'impar';
}

function somar(x=0, y=0){
    return x+y;
}

function fatorialI(x){
    let fat = 1;
    for(let i = x; i > 1; i--){
        fat *= i;
    }
    return fat;
}

function fatorialR(x){
    if (x==1){
        return 1;
    }
    return x * fatorialR(x-1);
}

// let resultado = parimpar(201);

let soma = somar(4);

console.log(soma);
console.log(resultado(soma));
console.log(fatorialI(5));
console.log(fatorialR(6));