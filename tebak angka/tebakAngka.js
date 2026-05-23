let angkaRandom = Math.floor(Math.random() * 100) + 1;
let angka = document.getElementById("muncul-angka");
angka.innerText = "?";

let inputNumber = document.getElementById("input-number");

let WadahBanyakNebak = document.getElementById("banyak-nebak");
SisaSkorTebakan = 10;

let btnTebak = document.getElementById("btn-tebak");
let btnLanjut = document.getElementById("btn-lanjut");
let btnReload = document.getElementById("btn-reload");

let audioGameOver = new Audio("../sound/gameOver.mp3")
let audioBenar = new Audio("../sound/benar.mp3")
let audioSalah = new Audio("../sound/salah.mp3")

function tebakAngka() {
    let status = document.getElementById("status");
    let tebak = parseInt(inputNumber.value.trim());
    angka.classList.remove("getar");
    void angka.offsetWidth;
    if (tebak === angkaRandom) {
        status.innerText = "Benar";
        status.style.color = "green";
        angka.innerText = angkaRandom;
        angka.style.color = "green";

        audioBenar.play();
    } else if (tebak > angkaRandom) {
        angka.innerText = "Kelebihan broo";
        angka.classList.add("getar");
        audioSalah.play();
    } else if (tebak < angkaRandom) {
        angka.innerText = "Kurang kurang!!";
        angka.classList.add("getar");
        audioSalah.play();
    }
    SisaSkorTebakan--;
    WadahBanyakNebak.innerText = "Kesempatan Menebak: " + SisaSkorTebakan;
    if(SisaSkorTebakan === 0){
        status.innerText = "Kesempatan Habis";
        status.style.color = "#e74c3c";
        angka.innerText = "Angka nya: " + angkaRandom;
        audioGameOver.play();
    }
}
WadahBanyakNebak.innerText = "Kesempatan Menebak: " + SisaSkorTebakan;
function lanjutNebak() {
    let status = document.getElementById("status");
    angkaRandom = Math.floor(Math.random() * 100) + 1;
    inputNumber.value = "";
    angka.innerText = "?";
    angka.style.color = "#e74c3c";
    angka.classList.remove("getar");
    status.innerText = "Tebak Angka Berapa? 1-100";
    status.style.color = "black";
    WadahBanyakNebak.innerText ="Sisa Kesempatan: " + SisaSkorTebakan;
    
}

btnReload.addEventListener('click', () => {
    window.location.reload();
});