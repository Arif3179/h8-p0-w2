var nama ='Callysta';
if(!nama) {
    console.log("Nama harus diisi!");
    return
}
var peran ='';
if(!peran) {
    console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`)
    return
}
if(!(peran==='Ksatria'||peran==='Tabib'||peran==='Penyihir')){
    console.log(`${nama}, Anda hanya boleh memilih peran: Ksatria, Tabib atau Penyihir`)
    return
}

var kalimatSambutan =""
if(peran==='Ksatria'){
    kalimatSambutan = 'kamu dapat menyerang dengan senjatamu!';
} else if(peran==='Tabib') {
    kalimatSambutan= 'kamu akan membantu temanmu yang terluka.';
} else if(peran==='Penyihir'){
    kalimatSambutan='ciptakan keajaiban yang membantu kemenanganmu!'
}
console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
console.log(`Halo ${peran} ${nama},${kalimatSambutan}`);












    
