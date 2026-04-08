let jurusan = ["TKJ", "RPL", "TP", "TO", "MPLB", "TKR"]
document.writeln("<h3>Nama Jurusan</h3>")
document.writeln("<ol>")
for(let i = 0; i < jurusan.length; i++){
    document.writeln(`<li>${jurusan[i]}</li>`)
}
document.writeln("</ol>")

let dataSiswa = {
    namaDepan: "Ahmad",
    namaBelakang: "Maliki",
    jurusan: jurusan[1],
    kelas: "XI",
    umur: 18,
    nilaiAkademik: 95
}
document.writeln("<h3>Data Siswa</h3>")
document.writeln(`<b>Nama Depan: </b>${dataSiswa.namaDepan}`)
document.writeln(`<br><b>Nama Belakang: </b>${dataSiswa.namaBelakang}`)
document.writeln(`<br><b>Jurusan: </b>${dataSiswa.jurusan}`)
document.writeln(`<br><b>Kelas: </b>${dataSiswa.kelas}`)
document.writeln(`<br><b>Umur: </b>${dataSiswa.umur}`)
document.writeln(`<br><b>Nilai Akademik: </b>${dataSiswa.nilaiAkademik}`)
