// ==========================================
// 1. DEKLARASI ELEMENT DOM UTAMA
// ==========================================
const halamanLogin = document.getElementById("halaman-login");
const halamanRegister = document.getElementById("halaman-register");
const tombolKeRegister = document.getElementById("ke-halaman-register");
const tombolKeLogin = document.getElementById("ke-halaman-login");
const formRegister = document.getElementById("form-register");
const formLogin = document.getElementById("form-login");
const formTambahSiswa = document.getElementById("form-tambah-siswa");
const formTambahAturan = document.getElementById("form-tambah-aturan");
const btnLogout = document.querySelectorAll(".tombol-logout");

// ==========================================
// 2. NAVIGASI HALAMAN (LOGIN <-> REGISTER)
// ==========================================
tombolKeRegister.addEventListener('click', function (event) {
    event.preventDefault();
    halamanLogin.style.display = 'none';
    halamanRegister.style.display = 'block';
});

tombolKeLogin.addEventListener('click', function (event) {
    event.preventDefault();
    halamanLogin.style.display = 'block';
    halamanRegister.style.display = 'none';
});

// ==========================================
// 3. INITIAL DATABASE (LOCAL STORAGE)
// ==========================================
let listPengguna = JSON.parse(localStorage.getItem('DATABASE_ADIWIYATA')) || [];
let listAturan = JSON.parse(localStorage.getItem('ATURAN_ADIWIYATA')) || [
    // --- PELANGGARAN (Poin Negatif) ---
    { nama: "Membuang sampah tidak pada tempatnya", efek: -10 },
    { nama: "Mencoret-coret meja/kursi/dinding sekolah", efek: -15 },
    { nama: "Merusak tanaman di lingkungan sekolah", efek: -20 },
    // --- PRESTASI / AKSI BAIK (Poin Positif) ---
    { nama: "Membawa botol minum/tumbler sendiri", efek: 10 },
    { nama: "Menjadi petugas kader Adiwiyata", efek: 25 },
    { nama: "Ikut serta dalam aksi bersih lingkungan lingkungan (Kerja Bakti)", efek: 15 }
];

// Pastikan list aturan bawaan langsung tersimpan ke LocalStorage pertama kali web dibuka
if (!localStorage.getItem('ATURAN_ADIWIYATA')) {
    localStorage.setItem('ATURAN_ADIWIYATA', JSON.stringify(listAturan));
}

// ==========================================
// 4. LOGIKA FITUR REGISTER AKUN OUTSIDER
// ==========================================
formRegister.addEventListener('submit', function (event) {
    event.preventDefault();

    const nama = document.getElementById('reg-nama').value;
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;
    const role = document.getElementById('reg-role').value;

    let usernameKembar = listPengguna.find(user => user.username === username);
    if (usernameKembar) {
        alert("Username sudah digunakan, cari yang lain Bro!");
        return;
    }

    let userBaru = {
        nama: nama,
        username: username,
        password: password,
        role: role,
        poin: role === 'siswa' ? 100 : null,
        riwayatPoin: []
    };

    listPengguna.push(userBaru);
    localStorage.setItem('DATABASE_ADIWIYATA', JSON.stringify(listPengguna));

    alert("Akun berhasil dibuat! Silahkan login.");
    formRegister.reset();

    halamanLogin.style.display = 'block';
    halamanRegister.style.display = 'none';
});

// ==========================================
// 5. LOGIKA FITUR LOGIN
// ==========================================
formLogin.addEventListener('submit', function (event) {
    event.preventDefault();

    const usernameInput = document.getElementById("login-username").value;
    const passwordInput = document.getElementById("login-password").value;

    let akunDitemukan = listPengguna.find(user => user.username === usernameInput);

    if (akunDitemukan) {
        if (akunDitemukan.password === passwordInput) {
            alert(`Selamat datang ${akunDitemukan.nama}! Anda masuk sebagai ${akunDitemukan.role.toUpperCase()}`);
            
            // Simpan session login ke localStorage
            localStorage.setItem('USER_LOGGED_IN', JSON.stringify(akunDitemukan));
            
            // Alihkan halaman ke dashboard masing-masing
            bukaDashboard(akunDitemukan);
            formLogin.reset();
        } else {
            alert("Password salah, Bro!");
        }
    } else {
        alert("Username tidak terdaftar!");
    }
});

// ==========================================
// 6. LOGIKA TOMBOL LOGOUT (KEDUA DASHBOARD)
// ==========================================
btnLogout.forEach(tombol => {
    tombol.addEventListener('click', function() {
        alert("Anda telah keluar dari aplikasi.");
        localStorage.removeItem('USER_LOGGED_IN');

        document.getElementById('dashboard-admin').style.display = 'none';
        document.getElementById('dashboard-siswa').style.display = 'none';
        halamanLogin.style.display = 'block';
    });
});

// ==========================================
// 7. FUNGSI PENGALIHAN DASHBOARD & REFRESH SINKRONISASI
// ==========================================
function bukaDashboard(user) {
    halamanLogin.style.display = 'none';
    
    if (user.role === 'admin') {
        document.getElementById('dashboard-admin').style.display = 'block';
        document.getElementById('nama-admin').innerText = user.nama;
        renderTabelSiswa();
        renderListAturanAdmin();
    } else if (user.role === 'siswa') {
        // PERBAIKAN UTAMA: Selalu ambil data ter-update dari database berdasarkan username siswa biar log & poin sinkron!
        const dataSiswaTerbaru = listPengguna.find(u => u.username === user.username) || user;

        document.getElementById("dashboard-siswa").style.display = 'block';
        document.getElementById("nama-siswa-login").innerText = dataSiswaTerbaru.nama;
        
        // Render total poin terbaru ke halaman siswa
        document.getElementById("point-siswa-login").innerText = dataSiswaTerbaru.poin !== undefined ? dataSiswaTerbaru.poin : 100;
        
        // Panggil fungsi render riwayat aktivitas poin
        renderLogSiswa(dataSiswaTerbaru);
    }
}

// ==========================================
// 8. MANAJEMEN ADMIN: CRUD DATA SISWA
// ==========================================

// A. Menampilkan Tabel Daftar Siswa di Dashboard Admin
function renderTabelSiswa() {
    const tabelSiswa = document.getElementById('tabel-siswa');
    if (!tabelSiswa) return;
    tabelSiswa.innerHTML = '';

    const semuaSiswa = listPengguna.filter(user => user.role === 'siswa');
    if (semuaSiswa.length === 0) {
        tabelSiswa.innerHTML = `
            <tr>
                <td colspan="5" style="text-align: center; color: gray;">Belum ada data siswa</td>
            </tr>
        `;
        return;
    }

    semuaSiswa.forEach(siswa => {
        const baris = document.createElement('tr');
        baris.innerHTML = `
            <td>${siswa.nama}</td>
            <td>${siswa.username}</td>
            <td><strong>${siswa.poin !== undefined ? siswa.poin : 100}</strong></td>
            <td>
                <button onclick="aksiPoin('${siswa.username}', 'tambah')">+ Tambah</button>
                <button onclick="aksiPoin('${siswa.username}', 'kurang')">- Kurang</button>
            </td>
            <td>
                <button onclick="hapusSiswa('${siswa.username}')" style="color: red; font-weight: bold;">Hapus</button>
            </td>
        `;
        tabelSiswa.appendChild(baris);
    });
}

// B. Tambah Siswa Baru via Dashboard Admin
formTambahSiswa.addEventListener('submit', function(event) {
    event.preventDefault();

    const nama = document.getElementById('admin-input-nama').value;
    const username = document.getElementById('admin-input-username').value;
    const password = document.getElementById('admin-input-password').value;

    let usernameKembar = listPengguna.find(user => user.username === username);
    if (usernameKembar) {
        alert("Username sudah terdaftar!");
        return;
    }

    let siswaBaru = {
        nama: nama,
        username: username, 
        password: password,
        role: 'siswa',
        poin: 100,
        riwayatPoin: []
    };

    listPengguna.push(siswaBaru);
    localStorage.setItem('DATABASE_ADIWIYATA', JSON.stringify(listPengguna));

    formTambahSiswa.reset();
    renderTabelSiswa();
    alert(`Akun siswa atas nama ${nama} berhasil ditambahkan!`);
});

// C. Hapus Akun Siswa
function hapusSiswa(usernameSiswa) {
    let yakin = confirm(`Yakin ingin menghapus akun "${usernameSiswa}"?`);
    if (yakin) {
        listPengguna = listPengguna.filter(user => user.username !== usernameSiswa);
        localStorage.setItem('DATABASE_ADIWIYATA', JSON.stringify(listPengguna));
        renderTabelSiswa();
    }
}

// ==========================================
// 9. MANAJEMEN ADMIN: MANIPULASI POIN (PROMPT DYNAMIC)
// ==========================================
function aksiPoin(usernameSiswa, tindakan) {
    let siswa = listPengguna.find(user => user.username === usernameSiswa);
    if (!siswa) {
        alert("Siswa tidak ditemukan!");
        return;
    }

    // Filter daftar aturan berdasarkan tindakan yang di-klik admin
    let aturanTersedia = listAturan.filter(atr => {
        if (tindakan === 'tambah') return atr.efek > 0;
        if (tindakan === 'kurang') return atr.efek < 0;
        return false;
    });

    if (aturanTersedia.length === 0) {
        alert(`Belum ada daftar aturan kategori Poin ${tindakan === 'tambah' ? 'Prestasi' : 'Pelanggaran'} di sistem, Bro! Buat dulu di form bawah.`);
        return;
    }

    // Susun template text Menu Prompt
    let pesanMenu = `PILIH ALASAN ${tindakan === 'tambah' ? 'PENAMBAHAN POIN' : 'PENGURANGAN POIN'} UNTUK ${siswa.nama.toUpperCase()}:\n\n`;
    aturanTersedia.forEach((atr, index) => {
        pesanMenu += `${index + 1}. ${atr.nama} (${atr.efek > 0 ? '+' : ''}${atr.efek} Poin)\n`;
    });
    pesanMenu += `\nKetik nomor pilihan (1-${aturanTersedia.length}):`;

    let pilihan = prompt(pesanMenu);
    if (pilihan === null) return; // Jika admin klik cancel/batal

    let indeksPilihan = parseInt(pilihan) - 1;

    if (isNaN(indeksPilihan) || indeksPilihan < 0 || indeksPilihan >= aturanTersedia.length) {
        alert("Pilihan tidak valid! Masukkan nomor angka yang tertera pada list.");
        return;
    }

    let aturanTerpilih = aturanTersedia[indeksPilihan];

    // Eksekusi kalkulasi Poin
    siswa.poin = (siswa.poin || 0) + aturanTerpilih.efek;

    // Catat log data manipulasi poin
    let logBaru = {
        tanggal: new Date().toLocaleDateString('id-ID'),
        aksi: tindakan === 'tambah' ? 'Poin Masuk' : 'Poin Potong',
        alasan: aturanTerpilih.nama,
        nominal: aturanTerpilih.efek 
    };

    if (!siswa.riwayatPoin) siswa.riwayatPoin = [];
    siswa.riwayatPoin.push(logBaru);

    // Save update terbaru ke LocalStorage utama database
    localStorage.setItem('DATABASE_ADIWIYATA', JSON.stringify(listPengguna));
    alert(`Berhasil! Poin ${siswa.nama} sekarang menjadi ${siswa.poin}.`);

    renderTabelSiswa();
}

// ==========================================
// 10. MANAJEMEN ADMIN: CRUD DAFTAR ATURAN CUSTOM
// ==========================================

// A. Menampilkan list aturan custom di halaman admin
function renderListAturanAdmin() {
    const listUl = document.getElementById('list-aturan-admin');
    if (!listUl) return;
    listUl.innerHTML = '';

    listAturan.forEach((atr, index) => {
        const itemLi = document.createElement('li');
        itemLi.style.marginBottom = "5px";
        
        const warna = atr.efek > 0 ? 'green' : 'red';
        const simbol = atr.efek > 0 ? '+' : '';

        itemLi.innerHTML = `
            ${atr.nama} (<span style="color: ${warna}; font-weight: bold;">${simbol}${atr.efek} Poin</span>)
            <button onclick="hapusAturan(${index})" style="margin-left: 10px; font-size: 11px; color: red;">Hapus Aturan</button>
        `;
        listUl.appendChild(itemLi);
    });
}

// B. Tambah Kriteria Aturan Baru via Admin
formTambahAturan.addEventListener('submit', function(event) {
    event.preventDefault();

    const namaAturan = document.getElementById('aturan-nama').value;
    const efekAturan = parseInt(document.getElementById('aturan-efek').value);

    if (efekAturan === 0) {
        alert("Efek poin tidak boleh angka 0, Bro!");
        return;
    }

    listAturan.push({ nama: namaAturan, efek: efekAturan });
    localStorage.setItem('ATURAN_ADIWIYATA', JSON.stringify(listAturan));

    formTambahAturan.reset();
    renderListAturanAdmin();
    alert("Kriteria aturan baru berhasil ditambahkan!");
});

// C. Hapus Kriteria Aturan
function hapusAturan(indexAturan) {
    listAturan.splice(indexAturan, 1);
    localStorage.setItem('ATURAN_ADIWIYATA', JSON.stringify(listAturan));
    renderListAturanAdmin();
}

// ==========================================
// 11. DASHBOARD SISWA: RENDER TABEL LOG AKTIVITAS POIN 
// ==========================================
function renderLogSiswa(siswaLog) {
    // PERBAIKAN: Mengganti ID 'log-point-siswa' menjadi 'tabel-riwayat-siswa' menyesuaikan struktur HTML
    const tabelLog = document.getElementById('tabel-riwayat-siswa');
    if (!tabelLog) return;

    tabelLog.innerHTML = '';

    // Cek jika siswa belum memiliki catatan aktivitas dari Admin
    if (!siswaLog.riwayatPoin || siswaLog.riwayatPoin.length === 0) {
        tabelLog.innerHTML = `
            <tr>
                <td colspan="4" style="text-align: center; color: gray;">Belum ada riwayat aktivitas poin, Bro. Tetap berbuat baiklah!</td>
            </tr>
        `;
        return;
    }

    // Looping riwayat poin (Urutkan dari aktivitas terbaru/paling atas di browser menggunakan reverse)
    const riwayatTerbalik = [...siswaLog.riwayatPoin].reverse();

    riwayatTerbalik.forEach(log => {
        const baris = document.createElement('tr');
        
        // Atur warna nominal (Hijau untuk penambahan, Merah untuk pelanggaran)
        const warnaPoin = log.nominal > 0 ? 'green' : 'red';
        const simbolPoin = log.nominal > 0 ? '+' : '';

        baris.innerHTML = `
            <td>${log.tanggal}</td>
            <td><strong>${log.aksi}</strong></td>
            <td>${log.alasan}</td>
            <td style="color: ${warnaPoin}; font-weight: bold;">${simbolPoin}${log.nominal}</td>
        `;

        tabelLog.appendChild(baris);
    });
}

// ==========================================
// 12. RUNTIME AUTO-CHECK SINKRONISASI REFRESH (DOM CONTENT LOADED)
// ==========================================
window.addEventListener('DOMContentLoaded', function() {
    const userSedangLogin = JSON.parse(localStorage.getItem('USER_LOGGED_IN'));
    if (userSedangLogin) {
        // Otomatis arahkan ke dashboard dan sinkronkan dengan database terbaru saat di-refresh!
        bukaDashboard(userSedangLogin);
    }
});