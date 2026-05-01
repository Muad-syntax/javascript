function setupMesin(idContainer, jenisOperator) {
    let container = document.getElementById(idContainer);

    let soal1 = container.querySelector('.soal1');
    let soal2 = container.querySelector('.soal2');
    let inputJawaban = container.querySelector('.jawaban');
    let btnJawab = container.querySelector('.btn-jawab');
    let btnLanjut = container.querySelector('.btn-lanjut');
    let status = container.querySelector('.status');
    let muncul = container.querySelector('.jawaban-komputer');

    let bilangan1 = Math.floor(Math.random() * 20) + 1;
    let bilangan2 = Math.floor(Math.random() * 20) + 1;

    soal1.innerText = bilangan1
    soal2.innerText = bilangan2

    let hasilBenar;
    if (jenisOperator === "kali") {
        hasilBenar = bilangan1 * bilangan2;
    } else if (jenisOperator === "bagi") {
        hasilBenar = bilangan1 / bilangan2;
    } else if (jenisOperator === "tambah") {
        hasilBenar = bilangan1 + bilangan2;
    } else if (jenisOperator === "kurang") {
        hasilBenar = bilangan1 - bilangan2;
    }

    btnJawab.addEventListener("click", function () {
        let textInput = inputJawaban.value.trim();
        let jawabanUser = parseInt(textInput);

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
        window.location.reload();
    });
}

setupMesin("container-perkalian", "kali");
setupMesin("container-pembagian", "bagi");
setupMesin("container-penambahan", "tambah");
setupMesin("container-pengurangan", "kurang");