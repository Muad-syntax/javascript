let nama_siswa = "Ahmad Maliki"
let nilai_mtk = 90
let nilai_inggris = 85
let nilai_pemrograman = 90

console.log(`Nama: ${nama_siswa}`)
console.log(`nilai mtk: ${nilai_mtk}`)
console.log(`nilai inggris: ${nilai_inggris}`)
console.log(`nilai pemrograman: ${nilai_pemrograman}`)

let jumlah_nilai = nilai_mtk + nilai_inggris + nilai_pemrograman
console.log(`jumlah nilai: ${jumlah_nilai}`)

let nilai_rataRata = jumlah_nilai / 3
console.log(`nilai rata-rata: ${nilai_rataRata}`)

if(nilai_rataRata > 75){
    console.log(` Nilai rata - rata: ${nilai_rataRata}. Anda Lulus `)
} else if(nilai_rataRata < 75){
    console.log(` Nilai rata - rata, Anda Tidak Lulus: ${nilai_rataRata}`)
}

