function setupMesin(idContainer, jenisOperator) {
    let container = document.getElementById(idContainer);

    // --- INI ADALAH KODE PENGAMANNYA ---
    // Jika wadah (container) tidak ditemukan di halaman ini (nilainya null),
    // maka hentikan fungsi ini sekarang juga menggunakan 'return', 
    // agar tidak lanjut ke bawah dan menyebabkan error.
    if (!container) {
        return;
    }
    // -----------------------------------

    // Jika kode lolos dari pengaman di atas (artinya container ditemukan),
    // barulah pencarian elemen ini dieksekusi dengan aman.
    let soal1 = container.querySelector('.soal1');
    let soal2 = container.querySelector('.soal2');
    let inputJawaban = container.querySelector('.jawaban');
    let btnJawab = container.querySelector('.btn-jawab');
    let btnLanjut = container.querySelector('.btn-lanjut');
    let status = container.querySelector('.status');
    let muncul = container.querySelector('.jawaban-komputer');

    let bilangan1 = Math.floor(Math.random() * 20) + 1;
    let bilangan2 = Math.floor(Math.random() * 20) + 1;

    soal1.innerText = bilangan1;
    soal2.innerText = bilangan2;

    let hasilBenar;
    if (jenisOperator === "kali") {
        hasilBenar = bilangan1 * bilangan2;
    } else if (jenisOperator === "bagi") {
        hasilBenar = parseFloat((bilangan1 / bilangan2).toFixed(2));
    } else if (jenisOperator === "tambah") {
        hasilBenar = bilangan1 + bilangan2;
    } else if (jenisOperator === "kurang") {
        hasilBenar = bilangan1 - bilangan2;
    }

    btnJawab.addEventListener("click", function () {
        let textInput = inputJawaban.value.trim();
        let jawabanUser = parseFloat(textInput);

        if (textInput === "") {
            alert("Jawab dulu dong");
            return;
        }
        if (jawabanUser === hasilBenar) {
            status.innerText = "Benar";
            status.style.color = "green";
        } else {
            status.innerText = "Salah";
            status.style.color = "red";
        }
        muncul.innerText = `Hasilnya: ${hasilBenar}`;
    });

    btnLanjut.addEventListener("click", function () {
        bilangan1 = Math.floor(Math.random() * 20) + 1;
        bilangan2 = Math.floor(Math.random() * 20) + 1;

        soal1.innerHTML = bilangan1
        soal2.innerHTML = bilangan2

        if (jenisOperator === "kali") {
            hasilBenar = bilangan1 * bilangan2;
        } else if (jenisOperator === "bagi") {
            hasilBenar = parseFloat((bilangan1 / bilangan2).toFixed(2));
        } else if (jenisOperator === "tambah") {
            hasilBenar = bilangan1 + bilangan2;
        } else if (jenisOperator === "kurang") {
            hasilBenar = bilangan1 - bilangan2;
        }

        inputJawaban.value = "";
        status.innerText = "";
        muncul.innerText = "";
    });

    let btnReload = document.getElementById("btn-reload");
    if (btnReload){
        btnReload.addEventListener("click", function(){
            window.location.reload();
        });
    }
}

// EKSEKUSI
// Kamu tetap membiarkan keempat baris ini di paling bawah script.js
setupMesin("container-perkalian", "kali");
setupMesin("container-pembagian", "bagi");
setupMesin("container-penambahan", "tambah");
setupMesin("container-pengurangan", "kurang");

let hamburgerBtn = document.getElementById("hamburger-btn");
let navLinks = document.getElementById("nav-links");

if (hamburgerBtn && navLinks){
    hamburgerBtn.addEventListener("click", function(){
        navLinks.classList.toggle("aktif")
    });
}