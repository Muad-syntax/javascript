// alert('Selamat Datang di Belajar Javascript');
// console.log('Selamat Datang di Belajar Javascript');

alert('Selamat Datang di Belajar Javascript');
console.log('Selamat Datang di Belajar Javascript');
var element = document.getElementById('js');
element.innerHTML = 'Selamat Datang  di Belajar Javascript ';
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
element.addEventListener('mouseover', function() {
    element.style.color = 'green';
    element.style.backgroundColor = 'lightyellow';
});
element.addEventListener('mouseout', function() {
    element.style.color = 'blue';
    element.style.backgroundColor = 'lightgray';
}); 
console.log('Element styled successfully!');
