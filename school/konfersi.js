let pilihan = prompt("apa yang mau di konfersi? '1.dolar-rupiah', '2.rupiah-dolar','3.emas-rupiah'");
let dolar = 16795;
let emas = 2800000;
if (pilihan == 1) {
    let konfersiUSD = prompt("dolar-rupiah\nMasukan nominal dolar");
    konfersiUSD = konfersiUSD * dolar;
    var element = document.getElementById('canvas');
    element.innerHTML = konfersiUSD;
} else if (pilihan == 2) {
    let konfersiIDR = prompt("rupiah-dolar\nMasukan nominal rupiah");
    konfersiIDR = konfersiIDR / dolar;
    var element = document.getElementById('canvas');
    element.innerHTML = konfersiIDR;
} else if (pilihan == 3) {
    let emasPerGram = prompt("emas-rupiah\nMasukan emas per gram")
    emasPerGram = emasPerGram * emas;
    var element = document.getElementById('canvas');
    element.innerHTML = emasPerGram;
} else {
    alert("pilihan tidak tersedia")
}
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