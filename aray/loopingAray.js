let daftarJurusan = [
    {
        nama : "RPL",
        kelas : ["RPL 1", "RPL 2"]
    },
    {
        nama : "TKJ",
        kelas : ["TKJ 1", "TKJ 2", "TKJ 3", "TKJ 4",]
    },
    {
        nama : "MPLB",
        kelas : ["MPLB 1", "MPLB 2", "MPLB 3", "MPLB 4",]
    }
];

daftarJurusan.forEach(function(jurusan){
    document.write(`<b>Jurusan: </b><br>${jurusan.nama}<br>`);
    document.write("<b>Kelas:</b>")
    jurusan.kelas.forEach(function(kelas){
        document.write(`<li>${kelas}</li>`)
    })
})