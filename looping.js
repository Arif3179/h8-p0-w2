// 1. Looping pertama & Looping kedua
console.log('looping pertama')
var i=2;
while(i <= 20){
    console.log(i+" - I love coding")
    i += 2; 
}

console.log('looping kedua')
var i=20;
while(i <= 20 && i >= 2){
    console.log(i+" - I will become full stack developer")
    i -= 2; 
}

//2. Melakukan Looping Menggunakan For
console.log('looping pertama')
var j=1;
for(var j;j<=20;j++){
    console.log(j+" - I love coding")
}

console.log('looping kedua')
var k=20;
for(var k;k<=20 && k>=1;k--){
    console.log(k+" - I will become fullstack developer")
}

//3. Angka Ganjil dan Genap
var a=1;
while(a>=1 && a<=100){
    if(a%2 == 0) {
        console.log("GENAP")
    } else console.log("GANJIL")
a += 1
}

var b=1;
while(b>=1 && b<=100){
    if(b%3 == 0){
        console.log(b+" KELIPATAN 3")
    }
    b += 2; // pertambahan counter sebesar 2
}

var c=1;
while(c>=1 && c<=100){
    if(c%6 == 0){
        console.log(c+" KELIPATAN 6")
    }
    c += 5; // pertambahan counter sebesar 5
}

var d=1;
while(d>=1 && d<=100){
    if(d%10 == 0){
        console.log(d+" KELIPATAN 10")
    }
    d += 9; // pertambahan counter sebesar 9
}