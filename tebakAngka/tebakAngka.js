let angkaRandom = Math.floor(Math.random() * 100) + 1;
const angka = document.getElementById("muncul-angka");
angka.innerText = "?";

const inputNumber = document.getElementById("input-number");

const WadahBanyakNebak = document.getElementById("banyak-nebak");
let SisaSkorTebakan = 10;

const btnTebak = document.getElementById("btn-tebak");
const btnLanjut = document.getElementById("btn-lanjut");
const btnReload = document.getElementById("btn-reload");

const audioGameOver = new Audio("../sound/gameOver.mp3")
const audioBenar = new Audio("../sound/benar.mp3")
const audioSalah = new Audio("../sound/salah.mp3")

function tebakAngka() {
    const status = document.getElementById("status");
    const tebak = parseInt(inputNumber.value.trim());
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
    const status = document.getElementById("status");
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