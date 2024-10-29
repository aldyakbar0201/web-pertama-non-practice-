const nama = "aldy akbar";
let usia = 15;

function generateBiodata() {
  if (usia > 10 && usia < 18) {
    // kondisi awal
    console.log('anda remaja');
  }
  else if (usia > 18 && usia < 30) {
    console.tag('anda dewasa')
  }
  else {
    // kondisi jika ticak terpenuhi
    console.log('wah ente alien ya ges ya')
  }
     
}

console.log(nama);
console.log(usia);

generateBiodata();