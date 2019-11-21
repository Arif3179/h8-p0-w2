function konversiMenit(menit) {
    var rawJam = menit / 60;
    var jam = Math.floor(rawJam);
    var rawMenit = menit%60;
    var strMenit = rawMenit.toString();
    var tampilanMenit = strMenit.padStart(2,"0");
    return jam+":"+tampilanMenit;
}     
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00