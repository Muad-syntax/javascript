// Ambil elemen wadah
const hasil = document.getElementById("hasil");
const keterangan = document.getElementById("keterangan");
const resultCard = document.getElementById("result-card");
const gambar = document.getElementById("gambar");

// Sound Effects (sesuai struktur folder Anda)
const audioKurus = new Audio("audio/kurus.mp3");
const audioIdeal = new Audio("audio/ideal.mp3");
const audioDut = new Audio("audio/dut.mp3");
const audioGendut = new Audio("audio/gendut.mp3");
const audioObes = new Audio("audio/obes.mp3");

function hitungBMI() {
    // Ambil nilai input
    const tinggiBadan = parseFloat(document.getElementById("tinggi-badan").value);
    const beratBadan = parseFloat(document.getElementById("berat-badan").value);

    // Validasi input kosong atau salah
    if (!tinggiBadan || !beratBadan || tinggiBadan <= 0 || beratBadan <= 0) {
        alert("Harap masukkan tinggi dan berat badan yang valid!");
        return;
    }

    const tinggiBadanPerMeter = tinggiBadan / 100;
    const hitung = beratBadan / (tinggiBadanPerMeter ** 2);

    // Hapus animasi sebelumnya agar bisa di-trigger ulang
    gambar.classList.remove("getar", "getarAtas");
    void gambar.offsetWidth; // Trigger reflow

    let statusColor = "";

    // Pengkondisian Status & Gaya Visual
    if (hitung < 18.5) {
        keterangan.innerText = "Kurus";
        statusColor = "var(--color-kurus)";
        gambar.src = "gambar/bbKurang.jpg";
        gambar.classList.add("getar");
        audioKurus.play().catch(e => console.log("Audio play blocked"));
    } else if (hitung >= 18.5 && hitung < 22.9) {
        keterangan.innerText = "Ideal";
        statusColor = "var(--color-ideal)";
        gambar.src = "gambar/ideal.jpg";
        gambar.classList.add("getarAtas");
        audioIdeal.play().catch(e => console.log("Audio play blocked"));
    } else if (hitung >= 23.0 && hitung < 24.9) {
        keterangan.innerText = "Dut";
        statusColor = "var(--color-dut)";
        gambar.src = "gambar/bbLebih.jpg";
        gambar.classList.add("getar");
        audioDut.play().catch(e => console.log("Audio play blocked"));
    } else if (hitung >= 25.0 && hitung < 29.9) {
        keterangan.innerText = "Gendut";
        statusColor = "var(--color-gendut)";
        gambar.src = "gambar/obesitasT1.jpg";
        gambar.classList.add("getar");
        audioGendut.play().catch(e => console.log("Audio play blocked"));
    } else if (hitung >= 30.0) {
        keterangan.innerText = "OMAGAAA 😶";
        statusColor = "var(--color-obes)";
        gambar.src = "gambar/obesitasT2.jpg";
        gambar.classList.add("getar");
        audioObes.play().catch(e => console.log("Audio play blocked"));
    }

    // Memasukkan hasil & memberikan sentuhan warna dinamis
    hasil.innerHTML = `<b>${hitung.toFixed(2)}</b>`;
    hasil.style.color = statusColor;
    keterangan.style.color = statusColor;
    keterangan.style.border = `1px solid ${statusColor}`;
    keterangan.style.boxShadow = `0 4px 12px ${statusColor}22`;

    // Menampilkan Container Hasil dengan Animasi transisi smooth
    resultCard.classList.add("active");
}