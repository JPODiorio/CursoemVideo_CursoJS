let num = [];

console.log("Antes: " + num);

 for (let i = 0; i<10; i++){
    num[i] = i;
    console.log("Durante: " + num[i]);
}
/*
console.log("Depois: " + num);

for (let i = 0; i<20; i+=2){
    num.push(i);
    console.log("Durante: " + num[i]);
}

console.log("Depois: " + num);

console.log(num.length); */

for (let pos in num){
    console.log("Durante 2: " + num[pos]);
}