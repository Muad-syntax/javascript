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

for(let key in dataSiswa) {
    document.write(`<b>${key}: </b>${dataSiswa[key]}<br>`)
}
