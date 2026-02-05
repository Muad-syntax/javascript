let menuBangun = prompt("Pilih Bangun Datar:\n1. Lingkaran\n2. Segitiga\n3. Persegi\n4. Persegi Panjang");
let menuHitung = prompt("Pilih yang ingin dihitung:\n1. Keliling\n2. Luas");

let hasil = 0;
let namaBangun = "";
let jenisHitung = (menuHitung == '1') ? "Keliling" : "Luas";

if (menuBangun === "1") {
    namaBangun = "Linkaran";
    let r = parseFloat(prompt("Masukan jari-jari (r): "));
    if (menuHitung === "1") {
        hasil = 2 * Math.PI * r;
    } else {
        hasil = Math.PI * Math.pow(r, 2);
    }
} else if (menuBangun === "2") {
    namaBangun = "Segitiga";
    if (menuHitung === "1") {
        let s1 = parseFloat(prompt("Masukan Sisi 1:"))
        let s2 = parseFloat(prompt("Masukan Sisi 2:"))
        let s3 = parseFloat(prompt("Masukan Sisi 3:"))
        hasil = s1 + s2 + s3;
    } else {
        let a = parseFloat(prompt("Masukan Alas:"))
        let t = parseFloat(prompt("Masukan Tinggi:"))
        hasil = 0.5 * a * t
    }
} else if (menuBangun === "3") {
    namaBangun = "Persegi";
    let s = parseFloat(prompt("Masukan Sisi (s): "))
    if (menuHitung === "1") {
        hasil = 4 * s
    } else {
        hasil = s * s
    }
} else if (menuBangun === "4") {
    namaBangun = "Persegi Panjang";
    let p = parseFloat(prompt("Masukan Panjang (p):"))
    let l = parseFloat(prompt("Masukan Lebar (l):"))
    if (menuHitung === "1") {
        hasil = 2 * (p + l);
    } else {
        hasil = p * l;
    }
}

document.write(`
    <h1>Hasil Perhitungan</h1>
    <hr>
    <p>Bangun Datar: ${namaBangun}</p>
    <p>Jenis Hitung: ${jenisHitung}</p>
    <h2>Hasil: ${hasil.toFixed(2)}</h2>
`);