function xo(str) {
    var iniO = str.split("x").join("");
    var iniX = str.split("o").join("");
    var jumlahO = iniO.length;
    var jumlahX = iniX.length;
    if(jumlahO === jumlahX) {
        return true;
    } else return false;
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true