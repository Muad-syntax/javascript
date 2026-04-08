let jurusan = ["TKJ", "RPL", "TP", "TO", "MPLB", "TKR"]
document.writeln("<h3>Nama Jurusan</h3>")
document.writeln("<ol>")
for(let i = 0; i < jurusan.length; i++){
    document.writeln(`<li>${jurusan[i]}</li>`)
}
document.writeln("</ol>")