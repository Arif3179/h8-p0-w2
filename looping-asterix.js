//1. Menyusun Barisan Bintang
var rows1="*****";
var i;
for(var i=0;i < rows1.length;i++){
    text="*"
    console.log(text);
}
//2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2 = "*****";
var i;
for (var i=0; i < rows2.length; i++) {  
 for (var j=0; j < rows2[i].length; j++) {    
  console.log(rows2.substring(0, (rows2.length))); 
}
}

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = "*****";
var i;
text ="";
for (var i=0; i < rows3.length; i++) {
    text=text+"*"   
    for (var j=0; j < rows3[i].length; j++) {    
        console.log(text); 
    }
}