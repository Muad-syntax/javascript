var tanya = true
while (tanya) {

    var player = prompt('pilih: kertas, gunting, batu');
    var computer = Math.random();

    if (computer < 0.34) {
        computer = 'kertas';
    } else if (computer >= 0.34 && computer < 0.67) {
        computer = 'gunting'
    } else {
        computer = 'batu'
    }

    var hasil = '';
    if (player == computer) {
        hasil = 'SERI';
    } else if (player == 'kertas') {
        if (computer == 'gunting') {
            hasil = 'KALAH';
        } else {
            hasil = 'MENANG';
        }
    } else if (player == 'gunting') {
        hasil = (computer == 'kertas') ? 'MENANG' : 'KALAH';
    } else if (player == 'batu') {
        hasil = (computer == 'kertas') ? 'KALAH' : 'MENANG';
    } else {
        hasil = "memasukan pilihan yang salah!!!";
    }
    tanya = confirm(`Kamu memilih : ${player}\nComputer memilih : ${computer}\nMaka hasilnya : Kamu ${hasil}\nklik ok untuk lanjut!`);
}
alert('Terimakasih sudah bermain!!');