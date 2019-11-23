function xo(str) {
    var lowerStr = str.toLowerCase()
    var penampungX=0;
    var penampungO=0;
    for (i=0;i < lowerStr.length;i++){
      if(lowerStr[i] === "x"){
          penampungX += 1; 
      } else if (lowerStr[i] === "o"){
          penampungO += 1;
      }
    } if(penampungO==penampungX){
        return true;
    } else return false;
    }
    
    // TEST CASES
    console.log(xo('xoxoxo')); // true
    console.log(xo('oxooxo')); // false
    console.log(xo('oxo')); // false
    console.log(xo('xxxooo')); // true
    console.log(xo('xoxooxxo')); // true