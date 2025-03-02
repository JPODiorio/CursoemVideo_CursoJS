/* var idade = 18;

console.log(`Você tem ${idade} anos.`);

if (idade < 16){
    console.log("Não vota");
}
else if (idade < 18 || idade > 65){
    console.log("Voto opcional");
}
else{
    console.log("Voto obrigatório");
} */

var agora = new Date();
var hora = agora.getHours();
var minuto = agora.getMinutes();

console.log(`Hora atual: ${hora}:${minuto} horas.`);

if (hora >= 4 && hora < 12){
    console.log('bom dia');
}
else if (hora >= 12 && hora <= 18){
    console.log('boa tarde');
}
else{
    console.log('boa noite');
}