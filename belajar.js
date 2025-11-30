alert('klik ok untuk masuk ke halaman');
alert('udah di klik belum?');
alert('lah gimana sih, klik dong');
alert('coba deh klik ok nya');
alert('coba sekali lagi, klik ok nya');
alert('sekarang beneran klik ok nya bakal bisa masuk');
alert('e tapi boong');
var ketik = prompt('coba deh ketik ok di sini');
alert('klik dong ' + ketik + ' nya, biar bisa masuk ke halaman');
var nama = prompt('eh sebentar, kamu siapa ya?');
alert('oh jadi kamu ' + nama + ', selamat datang di halaman ini!');
alert('nungugin yaaa!!!! \u{1F602}');
var yakin = confirm('beneran nih mau masuk??');
if (yakin === true) {
    alert('yah kamu masuk juga akhirnya \u{1F602}');
} else {
    alert('yaudah deh kalo gitu, makasih udah mampir \u{1F602}');
}

var element = document.getElementById('roasting');
element.innerHTML = 'Ngapain lo ' + nama + ' keisni, gak ada yang spesial kok \u{1F602}';