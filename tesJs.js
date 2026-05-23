
function operatorAritmatik(operasi) {
    let number1 = parseInt(document.getElementById("input-number1").value.trim());
    let number2 = parseInt(document.getElementById("input-number2").value.trim());
    let result = document.getElementById("result")

    let total = 0;
    if (operasi === "kali") {
        total = number1 * number2;
    } else if (operasi === "bagi") {
        total = number1 / number2;
    } else if (operasi === "tambah") {
        total = number1 + number2;
    } else if (operasi === "kurang") {
        total = number1 - number2;
    }
    result.innerText = `Hasilnya: ${total}`;
}

function clearOperator() {
    let number1 = document.getElementById("input-number1");
    let number2 = document.getElementById("input-number2");
    let result = document.getElementById("result")
    number1.value = ""
    number2.value = ""
    result.innerText = ""
}