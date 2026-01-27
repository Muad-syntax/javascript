let tahunIni = 2026
let nama = prompt("Hallo, siapa yaa?")
let kota = prompt(`${nama} Asal mana?`)
let umur = parseInt(prompt(`Kelahiran tahun berapa ${nama} ?`))
let umurSekarang = tahunIni - umur

var element = document.getElementById('text')
element.innerHTML = `Umur ${nama} sekarang tuh ${umurSekarang} tahun, ${nama} asal ${kota}`


// alert(`Umur ${nama} sekarang tuh ${umurSekarang} tahun, ${nama} asal ${kota}`)