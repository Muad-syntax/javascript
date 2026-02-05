let pilihan = prompt("Selamat Datang! Pilih Kategori: \n1. Makanan\n2. Minuman")
document.writeln("<h1>Struk Pembayaran</h1><hr>")

// makanan
let nasgor = 20000
let mieAyam = 15000
let baso = 18000
let makanan1 = "Nasi Goreng"
let makanan2 = "Mie Ayam"
let makanan3 = "Bakso"

// minuman
let esTeh = 5000
let esJeruk = 7000
let kopi = 10000
let minuman1 = "Es Teh"
let minuman2 = "Es Jeruk"
let minuman3 = "Kopi"

// kondisi makanan
if (pilihan == '1') {
    var makanan = prompt("Pilih Makanan: \n1. Nasi Goreng - Rp. 20.000\n2. Mie Ayam - Rp. 15.000\n3. Bakso - Rp. 18.000")
    if (makanan == '1') {
        var beli = prompt(makanan1 + ", Pesan Berapa?")
        var hasil = beli * nasgor
        document.writeln(`Produk yang dipilih: ${makanan1}. <br>Harga satuan: ${nasgor}. <br>Jumlah (Kuantitas): ${beli}. <br>Total pembayaran: ${hasil} <br>Terima kasih telah berbelanja!`)
        // kondisi diskon
        if (beli >= 10) {
            var diskon = 10000
            var dptDiskon = hasil - diskon;
            document.writeln(`Selamat Anda mendapatkan diskon Rp.${diskon} karena pembelian lebih dari 10. <br>Total pembayaran: ${dptDiskon}`)
        }
    } else if (makanan == '2') {
        var beli = prompt(makanan2 + ", Pesan Berapa?")
        var hasil = beli * mieAyam
        document.writeln(`Produk yang dipilih: ${makanan2}. <br>Harga satuan: ${mieAyam}. <br>Jumlah (Kuantitas): ${beli}. <br>Total pembayaran: ${hasil} <br>Terima kasih telah berbelanja!`)
        if (beli >= 10) {
            var diskon = 10000
            var dptDiskon = hasil - diskon;
            document.writeln(`Selamat Anda mendapatkan diskon Rp.${diskon} karena pembelian lebih dari 10. <br>Total pembayaran: ${dptDiskon}`)
        }

    } else if (makanan == '3') {
        var beli = prompt(makanan3 + ", Pesan Berapa?")
        var hasil = beli * baso
        document.writeln(`Produk yang dipilih: ${makanan3}. <br>Harga satuan: ${baso}. <br>Jumlah (Kuantitas): ${beli}. <br>Total pembayaran: ${hasil} <br>Terima kasih telah berbelanja!`)
        if (beli >= 10) {
            var diskon = 10000
            var dptDiskon = hasil - diskon;
            document.writeln(`Selamat Anda mendapatkan diskon Rp.${diskon} karena pembelian lebih dari 10. <br>Total pembayaran: ${dptDiskon}`)
        }

    }
} 
// kondisi minuman
else if (pilihan == '2') {

    var minuman = prompt("Pilih Minmunan: \n1. Es Teh - Rp. 5000\n2. Es Jeruk - Rp. 7000\n3. Kopi - Rp. 10.000")
    if (minuman == '1') {
        var beli = prompt(minuman1 + ", Pesan Berapa?")
        var hasil = beli * esTeh
        document.writeln(`Produk yang dipilih: ${minuman1}. <br>Harga satuan: ${esTeh}. <br>Jumlah (Kuantitas): ${beli}. <br>Total pembayaran: ${hasil} <br>Terima kasih telah berbelanja!`)
        if (beli >= 10) {
            var diskon = 10000
            var dptDiskon = hasil - diskon;
            document.writeln(`Selamat Anda mendapatkan diskon Rp.${diskon} karena pembelian lebih dari 10. <br>Total pembayaran: ${dptDiskon}`)
        }
    } else if (minuman == '2') {
        var beli = prompt(minuman2 + ", Pesan Berapa?")
        var hasil = beli * esJeruk
        document.writeln(`Produk yang dipilih: ${minuman2}. <br>Harga satuan: ${esJeruk}. <br>Jumlah (Kuantitas): ${beli}. <br>Total pembayaran: ${hasil} <br>Terima kasih telah berbelanja!`)
        if (beli >= 10) {
            var diskon = 10000
            var dptDiskon = hasil - diskon;
            document.writeln(`Selamat Anda mendapatkan diskon Rp.${diskon} karena pembelian lebih dari 10. <br>Total pembayaran: ${dptDiskon}`)
        }

    } else if (minuman == '3') {
        var beli = prompt(minuman3 + ", Pesan Berapa?")
        var hasil = beli * kopi
        document.writeln(`Produk yang dipilih: ${minuman3}. <br>Harga satuan: ${kopi}. <br>Jumlah (Kuantitas): ${beli}. <br>Total pembayaran: ${hasil} <br>Terima kasih telah berbelanja!`)
        if (beli >= 10) {
            var diskon = 10000
            var dptDiskon = hasil - diskon;
            document.writeln(`Selamat Anda mendapatkan diskon Rp.${diskon} karena pembelian lebih dari 10. <br>Total pembayaran: ${dptDiskon}`)
        }
    }
}
