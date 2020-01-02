var retry = true;
while (retry === true) {
  var mulai = parseInt(prompt('Masukan Angka: '));
  if (mulai) {
    alert('Anda Memasukan ' + mulai);
  } else {
    alert('Karakter yang anda masukan salah');
  }
  retry = confirm('Coba Lagi?');
}

alert('Thank You');
