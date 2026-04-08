let pilihan = prompt("Selamat Datang!! Pilih Menu\n1. Momochi\n2. Nescafe");
document.writeln("<h1>Struk pembayaran</h2><hr>")
// menu
var menu1 = "Momochi"
var menu2 = "Nescafe"

// momochi
var coklatKacang = 7000
var original = 5000

// nescafe
var dalgona = 12000
var lemonIce = 10000

// makanan
var makanan1 = "Coklat Kacang"
var makanan2 = "Original"

// minuman
var minuman1 = "Dalgona"
var minuman2 = "Lemon Ice"

if (pilihan == "") {
    document.writeln("<h2>Menu</h1><label>Momochi</label><ol><li>Original: Rp.5,000</li><li>Coklat Kacang: Rp.7,000</li></ol><label>Nescafe</label><ol><li>Dalgona: Rp.12,000</li><li>Lemon Ice: Rp.10,000</li></ol>")
} else if (pilihan == '1') {
    let makanan = prompt(`Pilih varian:\n1. ${makanan1} Rp.${coklatKacang}\n2. ${makanan2} Rp.${original}`)
    if (makanan == '1') {
        let beli = parseInt(prompt("Mau pesan berapa?"))
        hasil = beli * coklatKacang;
        document.writeln(`Pesanan : ${menu1}<br>Varian : ${makanan1}<br>Total pesanan: ${beli}<br>Harga : ${coklatKacang}<br>Total harga : ${hasil}`)
        if (beli >= 10) {
            let diskon = 10000
            let dptDiskon = hasil - diskon;
            document.writeln(`<hr><br>Selamat! Anda mendapatkan potongan harga sebesar Rp.${diskon}<br>Total harga : ${dptDiskon}`)
        }
    } else if (makanan == '2') {
        let beli = parseInt(prompt("Mau pesan berapa?"))
        hasil = beli * original;
        document.writeln(`Pesanan : ${menu1}<br>Varian : ${makanan2}<br>Total pesanan: ${beli}<br>Harga : ${original}<br>Total harga : ${hasil}`)
        if (beli >= 10) {
            let diskon = 10000
            let dptDiskon = hasil - diskon;
            document.writeln(`<hr><br>Selamat! Anda mendapatkan potongan harga sebesar Rp.${diskon}<br>Total harga : ${dptDiskon}`)
        }
    } else {
        alert("Pesanan belum tersedia!!")
    }
} else if (pilihan == '2') {
    let minuman = prompt(`Pilih varian:\n1. ${minuman1} Rp.${dalgona}\n2. ${minuman2} Rp.${lemonIce}`)
    if (minuman == '1') {
        let beli = parseInt(prompt("Mau pesan berapa?"))
        hasil = beli * dalgona;
        document.writeln(`Pesanan : ${menu2}<br>Varian : ${minuman1}<br>Total pesanan: ${beli}<br>Harga : ${dalgona}<br>Total harga : ${hasil}`)
        if (beli >= 10) {
            let diskon = 10000
            let dptDiskon = hasil - diskon;
            document.writeln(`<hr><br>Selamat! Anda mendapatkan potongan harga sebesar Rp.${diskon}<br>Total harga : ${dptDiskon}`)
        }
    } else if (minuman == '2') {
        let beli = parseInt(prompt("Mau pesan berapa?"))
        hasil = beli * lemonIce;
        document.writeln(`Pesanan : ${menu2}<br>Varian : ${minuman2}<br>Total pesanan: ${beli}<br>Harga : ${lemonIce}<br>Total harga : ${hasil}`)
        if (beli >= 10) {
            let diskon = 10000
            let dptDiskon = hasil - diskon;
            document.writeln(`<hr><br>Selamat! Anda mendapatkan potongan harga sebesar Rp.${diskon}<br>Total harga : ${dptDiskon}`)
        }
    } else {
        alert("Pesanan belum tersedia!!")
    }

} else {
    alert("Menu lain belum tersedia!!")
}
document.writeln("<br><hr><h3>Terimakasih Sudah Berbelanja!</h3>")