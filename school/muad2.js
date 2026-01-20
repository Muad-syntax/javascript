let nama_siswa = "Ahmad Maliki"
let nilai_mtk = 70
let nilai_inggris = 70
let nilai_pemrograman = 70
let jumlah_nilai = nilai_mtk + nilai_inggris + nilai_pemrograman
let nilai_rataRata = jumlah_nilai / 3

console.log(
    `Nama: ${nama_siswa} nilai mtk: ${nilai_mtk} nilai inggris: ${nilai_inggris} nilai pemrograman: ${nilai_pemrograman} jumlah nilai: ${jumlah_nilai} nilai rata-rata: ${nilai_rataRata}`
)

if (nilai_rataRata >= 75) {
    console.log(` Nilai rata - rata: ${nilai_rataRata}. Anda Lulus `)
} else {
    console.log(` Nilai rata - rata: ${nilai_rataRata}. Anda Tidak Lulus `)
}

