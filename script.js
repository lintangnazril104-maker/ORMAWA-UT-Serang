const menuBtn = document.querySelector('.menu-btn');
const fullMenu = document.getElementById('fullMenu');

menuBtn.addEventListener('click', function() {
    // Toggle class 'show' untuk menampilkan/menyembunyikan menu
    fullMenu.classList.toggle('show');
    
    // Opsional: Animasi tombol hamburger jadi 'X'
    this.classList.toggle('open');
});
