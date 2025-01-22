document.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
document.querySelector('.check-projects-btn').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 2000,
        behavior: 'smooth',
    });
});
document.querySelector('.back-to-about-btn').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 950,
        behavior: 'smooth',
    });
});
document.querySelector('.back-to-projects-btn').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 2000,
        behavior: 'smooth',
    });
});
document.querySelector('.back-to-contacts-btn').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 3300,
        behavior: 'smooth',
    });
});
document.querySelector('.back-to-top-btn').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

AOS.init({
    once: true
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

// Додаємо подію на кнопку-бургер
menuToggle.addEventListener('click', () => {
    if (nav.classList.contains('open')) {
        nav.classList.remove('open'); // Закриваємо меню
    } else {
        nav.classList.add('open'); // Відкриваємо меню
    }
});

// Скидаємо клас 'open', коли ширина екрану більше 750px
window.addEventListener('resize', () => {
    if (window.innerWidth > 750) {
        nav.classList.remove('open'); // Видаляємо клас 'open'
    }
});

