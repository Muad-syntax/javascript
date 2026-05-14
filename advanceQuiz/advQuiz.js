document.addEventListener('DOMContentLoaded', () => {
    // 1. Ambil data dari LocalStorage atau set ke 0 jika belum ada
    let scores = JSON.parse(localStorage.getItem('quizScores')) || { correct: 0, wrong: 0 };

    const containers = {
        perkalian: document.querySelector('#container-perkalian'),
        pembagian: document.querySelector('#container-pembagian'),
        penambahan: document.querySelector('#container-penambahan'),
        pengurangan: document.querySelector('#container-pengurangan')
    };

    // 2. Setup UI Score Board
    const navbar = document.querySelector('.navbar');
    const scoreDisplay = document.createElement('div');
    scoreDisplay.className = "score-board";
    navbar.insertBefore(scoreDisplay, document.getElementById('clock'));

    // 3. Buat Tombol Reset Poin secara dinamis
    const resetBtn = document.createElement('button');
    resetBtn.innerText = 'Reset Poin';
    resetBtn.className = 'btn-reset';
    resetBtn.style.marginLeft = '10px';
    resetBtn.onclick = resetScores;
    navbar.appendChild(resetBtn);

    // Update tampilan score pertama kali
    updateScoreUI();
    initClock();

    Object.keys(containers).forEach(type => {
        setupQuiz(type);
    });

    document.getElementById('btn-reload').addEventListener('click', () => {
        location.reload();
    });

    // --- Fungsi Inti ---

    function setupQuiz(type) {
        const container = containers[type];
        const btnJawab = container.querySelector('.btn-jawab');
        const btnLanjut = container.querySelector('.btn-lanjut');
        const input = container.querySelector('.jawaban');

        generateQuestion(type);

        btnJawab.onclick = () => checkAnswer(type);
        btnLanjut.onclick = () => {
            clearFeedback(type);
            generateQuestion(type);
        };

        input.addEventListener('keypress', (e) => {
            if (e.key === "Enter") checkAnswer(type);
        });
    };

    function generateQuestion(type) {
        const container = containers[type];
        // Angka random 1-12 agar tidak terlalu sulit tapi menantang
        let n1 = Math.floor(Math.random() * 12) + 1;
        let n2 = Math.floor(Math.random() * 12) + 1;

        if (type === 'pembagian') {
            let hasilKali = n1 * n2;
            container.querySelector('.soal1').innerText = hasilKali;
            container.querySelector('.soal2').innerText = n1;
        } else if (type === 'pengurangan') {
            if (n1 < n2) [n1, n2] = [n2, n1]; // Supaya tidak negatif
            container.querySelector('.soal1').innerText = n1;
            container.querySelector('.soal2').innerText = n2;
        } else {
            container.querySelector('.soal1').innerText = n1;
            container.querySelector('.soal2').innerText = n2;
        }

        container.querySelector('.jawaban').value = '';
        container.querySelector('.jawaban').focus();
    };

    function checkAnswer(type) {
        const container = containers[type];
        const n1 = parseInt(container.querySelector('.soal1').innerText);
        const n2 = parseInt(container.querySelector('.soal2').innerText);
        const userAnswer = parseInt(container.querySelector('.jawaban').value);
        const status = container.querySelector('.status');
        const computerAns = container.querySelector('.jawaban-komputer');

        let correctAnswer;
        if (type == 'perkalian') correctAnswer = n1 * n2;
        if (type == 'pembagian') correctAnswer = n1 / n2;
        if (type == 'penambahan') correctAnswer = n1 + n2;
        if (type == 'pengurangan') correctAnswer = n1 - n2;

        if (isNaN(userAnswer)) return alert("Jawab dulu doooong!!!");

        if (userAnswer === correctAnswer) {
            status.innerText = "Benar! 🎉";
            status.style.color = "#2ecc71";
            scores.correct++;
            computerAns.innerText = "";
        } else {
            status.innerText = "Salah! ❌";
            status.style.color = "#e74c3c";
            scores.wrong++;
            computerAns.innerText = `Jawaban benar: ${correctAnswer}`;
        }

        saveScores();
        updateScoreUI();
    }

    function clearFeedback(type) {
        const container = containers[type];
        container.querySelector('.status').innerText = "";
        container.querySelector('.jawaban-komputer').innerText = "";
    }

    // Fungsi untuk menyimpan ke LocalStorage
    function saveScores() {
        localStorage.setItem('quizScores', JSON.stringify(scores));
    }

    // Fungsi untuk memperbarui tampilan skor di layar
    function updateScoreUI() {
        scoreDisplay.innerHTML = `
            <span style="color: #2ecc71">✔ ${scores.correct}</span> | 
            <span style="color: #e74c3c">✘ ${scores.wrong}</span>
        `;
    }

    function resetScores() {
        if (confirm("Yakin ingin menghapus semua poin?")) {
            scores = { correct: 0, wrong: 0 };
            saveScores();
            updateScoreUI();
        }
    }

    function initClock() {
        setInterval(() => {
            const now = new Date();
            // Gunakan toLocaleTimeString agar muncul jam, bukan tanggal
            document.getElementById('clock').innerText = now.toLocaleTimeString();
        }, 1000);
    }
});
