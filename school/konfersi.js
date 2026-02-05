function hitungKonversi() {
    let menu = document.getElementById('pilihanMenu').value;
    let inputAngka = parseFloat(document.getElementById('inputNominal').value);
    let element = document.getElementById('canvas');

    if (isNaN(inputAngka)) {
        element.innerHTML = "Mohon masukan angka yang valid!";
        element.style.color = 'red';
        element.style.fontFamily = 'Lucida Sans';
        element.style.marginTop = '20px';
        element.style.fontSize = '24px';
        element.style.fontWeight = 'bold';
        element.style.width = 'fit-content';
        element.style.margin = '20px auto';
        element.style.transition = 'all 0.3s ease';
        return;
    }

    let dolar = 16795;
    let emas = 2000000;
    let hasil = 0;
    let textHasil = "";

    if (menu == '1') {
        hasil = inputAngka * dolar;
        textHasil = "Rp " + hasil.toLocaleString('id-ID');
    } else if (menu == '2') {
        hasil = inputAngka / dolar;
        textHasil = "$" + hasil.toFixed(2);
    } else if (menu == '3') {
        hasil = inputAngka * emas;
        textHasil = "Rp" + hasil.toLocaleString('id-ID');
    }
    document.getElementById('canvas')
    element.innerHTML = textHasil

    element.style.color = 'blue';
    element.style.textAlign = 'center';
    element.style.fontFamily = 'Arial, sans-serif';
    element.style.marginTop = '20px';
    element.style.fontSize = '24px';
    element.style.fontWeight = 'bold';
    element.style.textDecoration = 'none';
    element.style.textTransform = 'uppercase';
    element.style.letterSpacing = '2px';
    element.style.backgroundColor = 'lightgray';
    element.style.padding = '10px';
    element.style.borderRadius = '5px';
    element.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    element.style.width = 'fit-content';
    element.style.margin = '20px auto';
    element.style.transition = 'all 0.3s ease';
    element.addEventListener('mouseover', function () {
        element.style.color = 'green';
        element.style.backgroundColor = 'lightyellow';
    });
    element.addEventListener('mouseout', function () {
        element.style.color = 'blue';
        element.style.backgroundColor = 'lightgray';
    });
    console.log('Element styled successfully!');
}