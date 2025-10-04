// let umur = prompt('Umur lu berapa?')
// alert('Umur gw ' + umur)

// let nama = 'Muad'
// let umur = 21
// let tinggiBadan = 145.5
// let beratBadan
// let pacar = null

// beratBadan = 45

// if (pacar == null){
//     pacar = 'sama sekali'
// } else {
//     pacar = ' TAPI BOONG'
// }

// let saldoAwal = 100000
// let pengeluaran = 45000
// const saldoGw = saldoAwal - pengeluaran

// switch(pacar){
//     case 1:
//         pacar = 'eh ada ketang ada 1'
//         break
//     case 3:
//         pacar = ', TAPI BOONG, 3 PACAR GW EMBAT'
//         break
//     default:
//         pacar = 'sama sekali'
//         break
// }
// alert(
//     `nama saya ${nama} saya berumur ${umur} tahun, tinggi saya ${tinggiBadan} cm, lalu berat saya ${beratBadan} kg, saya juga tidak punya pacar ${pacar}`
// )
// alert(
//     `Awalnya gw punya saldo Rp.${saldoAwal}, terus gw di palak Rp.${pengeluaran} otomatis saldo gw jadi Rp.${saldoGw}`
// )

let namaBarang = ['pulpen', 'pensil', 'penghapus']

// namaBarang.push('stabilo', 'tipeX', 'jangkar')
// namaBarang.shift() //menghilangkan index pertama 'pulpen'
// namaBarang.pop() //mengilangkan index terakhir 'jangkar'
// alert(namaBarang)

//for loop
for (let i = 0 ; i < namaBarang.length; i++) {
    console.log(namaBarang[i])
}