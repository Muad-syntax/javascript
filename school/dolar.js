let nilaiRP = 16.801;
let dolar = prompt("Konversi dolar ke rupiah: \n masukan dolar ");
let konversi = nilaiRP * dolar;
console.log(dolar)
if (dolar == '') {
    alert("Anda tidak memasukan Apapun!!!!")
} else {
    var element = document.getElementById('text')
    element.innerHTML = konversi
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

