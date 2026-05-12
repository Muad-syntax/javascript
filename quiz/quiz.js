let wadah1 = document.getElementById("wadah1");
let wadah2 = document.getElementById("wadah2");
let benar = document.getElementById("benar");
let salah = document.getElementById("salah");
let elemenTimer = document.getElementById("timer");

// tombol
let btnJawab = document.getElementById("btn-jawab")
let btnLanjut = document.getElementById("btn-lanjut")
let btnClear = document.getElementById("btn-clear")

let audioGameOver = new Audio("gameOver.mp3")
let audioBenar = new Audio("benar.mp3")
let audioSalah = new Audio("salah.mp3")

// Counter skor
let jumlahBenar = parseInt(localStorage.getItem("simpanBenar")) || 0
let jumlahSalah = parseInt(localStorage.getItem("simpanSalah")) || 0

benar.innerText = `✓ Benar: ${jumlahBenar}`
salah.innerText = `✗ Salah: ${jumlahSalah}`
// angka random
let bilangan1 = Math.floor(Math.random() * 21) + 1;
let bilangan2 = Math.floor(Math.random() * 21) + 1;

let waktuTersisa = 30;
let intervalWaktu;

function mulaiTimer() {
    elemenTimer.innerText = `Waktu tersisa: ${waktuTersisa} detik`;
    let btnReload = document.getElementById("btn-reload");

    intervalWaktu = setInterval(function () {
        waktuTersisa -= 1;
        elemenTimer.innerText = `Waktu tersisa: ${waktuTersisa} detik`;

        // jika waktu habis
        if (waktuTersisa <= 0) {
            clearInterval(intervalWaktu);

            // menonaktifkan permainan
            document.getElementById("jawaban").disabled = true;
            btnJawab.disabled = true
            btnLanjut.disabled = false
            btnJawab.style.background = "#ae8080";

            audioGameOver.play()
            alert("Waktu Habis.");
        }
    }, 1000);
    if (btnReload) {
        btnReload.addEventListener("click", function () {
            window.location.reload();
        });
    }


}

function jawabanmu() {
    let textInput = document.getElementById("jawaban").value.trim();
    let jawaban = parseInt(textInput);
    let muncul = document.getElementById("muncul")
    let status = document.getElementById("status")
    let hasil = bilangan1 + bilangan2;

    // Validasi input
    if (textInput === "" || isNaN(jawaban)) {
        status.innerText = "⚠️ Masukkan angka terlebih dahulu!";
        status.style.color = "#ff6b6b";
        return;
    }

    if (jawaban === hasil) {
        status.innerText = "✓ Benar!";
        status.style.color = "#51cf66";
        jumlahBenar++;
        benar.innerText = "✓ Benar: " + jumlahBenar;
        audioBenar.play()
        localStorage.setItem("simpanBenar", jumlahBenar)
    } else {
        status.innerText = "✗ Salah! Jawaban: " + hasil;
        status.style.color = "#ff6b6b";
        jumlahSalah++;
        salah.innerText = "✗ Salah: " + jumlahSalah;
        audioSalah.play()
        localStorage.setItem("simpanSalah", jumlahSalah)

    }
}


wadah1.innerText = bilangan1
wadah2.innerText = bilangan2

function generateSoal() {
    bilangan1 = Math.floor(Math.random() * 21) + 1;
    bilangan2 = Math.floor(Math.random() * 21) + 1;
    wadah1.innerText = bilangan1
    wadah2.innerText = bilangan2

    // membersihkan input dan teks
    document.getElementById("jawaban").value = "";
    document.getElementById("status").innerText = "";
    document.getElementById("muncul").innerText = "";
    document.getElementById("jawaban").focus();
}

generateSoal();
document.getElementById("jawaban").focus();

btnClear.addEventListener("click", function () {
    localStorage.clear();
})

jawaban.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        btnJawab.click();
    }
})

mulaiTimer()