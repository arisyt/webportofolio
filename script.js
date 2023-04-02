// ambil elemen yang diperlukan
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

// atur event listener untuk tombol toggle navigasi
navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

// atur event listener untuk setiap tautan navigasi
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});
