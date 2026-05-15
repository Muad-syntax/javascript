document.addEventListener('DOMContentLoaded', () => {
    let scores = JSON.parse(localStorage.getItem('quizScores')) || { correct: 0, wrong: 0 };
    let answeredCount = 0;
    let correctCount = 0;

    const TOTAL_QUESTIONS = 4;
    const INITIAL_TIME = 1 * 60;

    let timeLeft = INITIAL_TIME;
    let timerInterval = null;
    let timerAudio = null;           // ← Audio untuk suara jam

    const containers = {
        perkalian: document.querySelector('#container-perkalian'),
        pembagian: document.querySelector('#container-pembagian'),
        penambahan: document.querySelector('#container-penambahan'),
        pengurangan: document.querySelector('#container-pengurangan')
    };

    // Hamburger Menu
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');
    hamburgerBtn.addEventListener('click', () => navLinks.classList.toggle('active'));
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('active'));
    });

    // Score Board & Reset Button
    const navbar = document.querySelector('.navbar');
    const scoreDisplay = document.createElement('div');
    scoreDisplay.className = "score-board";
    navbar.insertBefore(scoreDisplay, document.getElementById('timer'));

    const resetBtn = document.createElement('button');
    resetBtn.innerText = 'Reset Poin';
    resetBtn.className = 'btn-reset';
    resetBtn.style.marginLeft = '10px';
    resetBtn.onclick = resetScores;
    navbar.appendChild(resetBtn);

    const startScreen = document.getElementById('start-screen');
    const startBtn = document.getElementById('start-btn');

    updateScoreUI();
    Object.keys(containers).forEach(type => setupQuiz(type));

    startBtn.addEventListener('click', startQuiz);

    function startQuiz() {
        startScreen.style.display = 'none';
        initTimerSound();
        timerAudio.play().catch(() => { });
        startTimer();
    }

    document.getElementById('btn-reload').addEventListener('click', () => {
        if (confirm("Muat ulang semua soal dan timer?")) location.reload();
    });

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
            input.disabled = false;
            btnJawab.disabled = false;
        };

        input.addEventListener('keypress', (e) => {
            if (e.key === "Enter") checkAnswer(type);
        });
    }

    function generateQuestion(type) {
        const container = containers[type];
        let n1 = Math.floor(Math.random() * 12) + 1;
        let n2 = Math.floor(Math.random() * 12) + 1;

        if (type === 'pembagian') {
            n1 = n1 * n2;
            container.querySelector('.soal1').innerText = n1;
            container.querySelector('.soal2').innerText = n2;
        } else if (type === 'pengurangan') {
            if (n1 < n2) [n1, n2] = [n2, n1];
            container.querySelector('.soal1').innerText = n1;
            container.querySelector('.soal2').innerText = n2;
        } else {
            container.querySelector('.soal1').innerText = n1;
            container.querySelector('.soal2').innerText = n2;
        }

        container.querySelector('.jawaban').value = '';
    }

    function checkAnswer(type) {
        const container = containers[type];
        const n1 = parseInt(container.querySelector('.soal1').innerText);
        const n2 = parseInt(container.querySelector('.soal2').innerText);
        const input = container.querySelector('.jawaban');
        const btnJawab = container.querySelector('.btn-jawab');
        const userAnswer = parseInt(input.value);
        const status = container.querySelector('.status');
        const computerAns = container.querySelector('.jawaban-komputer');

        if (isNaN(userAnswer)) return alert("Jawab dulu doooong!!!");

        let correctAnswer;
        if (type === 'perkalian') correctAnswer = n1 * n2;
        else if (type === 'pembagian') correctAnswer = n1 / n2;
        else if (type === 'penambahan') correctAnswer = n1 + n2;
        else if (type === 'pengurangan') correctAnswer = n1 - n2;

        const isCorrect = userAnswer === correctAnswer;

        if (isCorrect) {
            status.innerText = "Benar! 🎉";
            status.style.color = "#2ecc71";
            scores.correct++;
            correctCount++;
            computerAns.innerText = "";
        } else {
            status.innerText = "Salah! ❌";
            status.style.color = "#e74c3c";
            scores.wrong++;
            computerAns.innerText = `Jawaban benar: ${correctAnswer}`;
        }

        input.disabled = true;
        btnJawab.disabled = true;

        answeredCount++;
        saveScores();
        updateScoreUI();

        playSound(isCorrect ? 'correct' : 'wrong');

        if (answeredCount === TOTAL_QUESTIONS) {
            setTimeout(showFinalResult, 800);
        }
    }

    function showFinalResult() {
        const modal = document.getElementById('result-modal');
        const title = document.getElementById('modal-title');
        const starsContainer = document.getElementById('modal-stars');
        const stats = document.getElementById('modal-stats');
        const message = document.getElementById('modal-message');
        const closeBtn = document.getElementById('modal-close');

        let stars = 1;
        if (correctCount === 4) stars = 5;
        else if (correctCount === 3) stars = 4;
        else if (correctCount === 2) stars = 3;
        else if (correctCount === 1) stars = 1;

        const starText = '★'.repeat(stars) + '☆'.repeat(5 - stars);

        starsContainer.style.color = stars === 5 ? "#f1c40f" : "#95a5a6";
        title.textContent = stars === 5 ? "🎉 Luar Biasa!" : "Quiz Selesai!";

        stats.innerHTML = `
            <strong>Benar:</strong> ${correctCount} | 
            <strong>Salah:</strong> ${scores.wrong}<br>
            <strong>Total Point:</strong> ${scores.correct}
        `;

        starsContainer.innerHTML = starText;
        message.textContent = stars === 5
            ? "Jago bet jagoo"
            : "Nice try broo";

        clearInterval(timerInterval);
        stopTimerSound();

        modal.style.display = "flex";

        // Suara hasil akhir
        if (correctCount <= 1) {
            playAudio("../sound/kalah.mp3");
        } else {
            playAudio("../sound/menang.mp3");
        }

        closeBtn.onclick = () => {
            modal.style.display = "none";
            restartQuiz();
        };
    }

    function restartQuiz() {
        clearInterval(timerInterval);
        stopTimerSound();

        timeLeft = INITIAL_TIME;
        answeredCount = 0;
        correctCount = 0;

        const timerEl = document.getElementById('timer');
        timerEl.style.color = "";
        timerEl.innerText = `${Math.floor(timeLeft / 60).toString().padStart(2, '0')}:${(timeLeft % 60).toString().padStart(2, '0')}`;

        Object.keys(containers).forEach(type => {
            const container = containers[type];
            container.querySelector('.jawaban').disabled = false;
            container.querySelector('.btn-jawab').disabled = false;
            clearFeedback(type);
            generateQuestion(type);
        });

        if (!timerAudio) initTimerSound();
        timerAudio.currentTime = 0;
        timerAudio.play().catch(() => { });
        startTimer();
    }

    function clearFeedback(type) {
        const container = containers[type];
        container.querySelector('.status').innerText = "";
        container.querySelector('.jawaban-komputer').innerText = "";
    }

    function saveScores() {
        localStorage.setItem('quizScores', JSON.stringify(scores));
    }

    function updateScoreUI() {
        scoreDisplay.innerHTML = `
            <span style="color: #2ecc71">✔ ${scores.correct}</span> | 
            <span style="color: #ff7675">✘ ${scores.wrong}</span>
        `;
    }

    function resetScores() {
        if (confirm("Yakin reset semua?")) {
            scores = { correct: 0, wrong: 0 };
            correctCount = 0;
            answeredCount = 0;
            timeLeft = INITIAL_TIME;
            saveScores();
            updateScoreUI();
            location.reload();
        }
    }

    // ==================== SUARA TIMER (JAM) ====================
    function initTimerSound() {
        timerAudio = new Audio("../sound/suaraJam.mp3");
        timerAudio.loop = true;
        timerAudio.volume = 0.6;        // Volume sedang (bisa diubah 0.3 - 1.0)
    }

    function stopTimerSound() {
        if (timerAudio) {
            timerAudio.pause();
            timerAudio.currentTime = 0;
        }
    }

    // ==================== TIMER COUNTDOWN ====================
    function startTimer() {
        const timerEl = document.getElementById('timer');

        timerInterval = setInterval(() => {
            timeLeft--;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerEl.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                timerEl.style.color = "red";

                stopTimerSound();                    // Hentikan suara jam
                playAudio('../sound/gameOver.mp3');  // Mainkan game over

                setTimeout(() => {
                    alert('Waktu Habis! ⏰');
                }, 300);
            }
        }, 1000);
    }

    // ==================== AUDIO HELPER ====================
    function playSound(type) {
        const soundBenar = "../sound/benar.mp3";
        const soundSalah = "../sound/salah.mp3";
        const audio = new Audio(type === 'correct' ? soundBenar : soundSalah);
        audio.play().catch(() => { });
    }

    function playAudio(filename) {
        const audio = new Audio(filename);
        audio.play().catch(error => console.log("Audio gagal:", error));
    }
});