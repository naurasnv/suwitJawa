var tanya = true;
while (tanya) {
  // menangkap pilihan player
  var p = prompt("pilih : gajah, semut, orang");

  // menangkap pilihan computer
  // membangkitkan bilangan random
  var comp = Math.random();

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }

  var hasil = "";
  // menentukan rules
  if (p == comp) {
    hasil = "SERI!";
  } else if (p == "gajah") {
    // if ( comp == 'orang'){
    //     hasil = 'MENANG!';
    // }else{
    //     hasil = 'KALAH!';
    // }
    hasil = comp == "orang" ? "MENANG!" : "KALAH!";
  } else if (p == "orang") {
    hasil = comp == "gajah" ? "MENANG!" : "KALAH!";
  } else if (p == "semut") {
    hasil = comp == "orang" ? "MENANG!" : "KALAH!";
  } else {
    hasil = "Menemukan pilihan yang salah!";
  }

  //tampilkan hasilnya
  alert(
    "Kamu memilih : " +
      p +
      " dan Komputer memilih : " +
      comp +
      "\nMaka hasilnya : kamu " +
      hasil
  );

  tanya = confirm('lagi?');
}
alert("Terimakasih Sudah Bermain");
