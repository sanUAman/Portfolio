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

    const screenWidth = window.innerWidth;

    if (screenWidth <= 647) {
        window.scrollTo({
            top: 900,
            behavior: 'smooth',
        });
    } else if (screenWidth <= 1920) {
        window.scrollTo({
            top: 950,
            behavior: 'smooth',
        });
    }
});
document.querySelector('.back-to-projects-btn').addEventListener('click', function (e) {
    e.preventDefault();

    const screenWidth = window.innerWidth;

    if (screenWidth <= 490) {
        window.scrollTo({
            top: 2150,
            behavior: 'smooth',
        });
    } else if (screenWidth <= 1920) {
        window.scrollTo({
            top: 2000,
            behavior: 'smooth',
        });
    }
});
document.querySelector('.back-to-contacts-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const screenWidth = window.innerWidth;

    if (screenWidth <= 489) {
        window.scrollTo({
            top: 3525,
            behavior: 'smooth',
        });
    } else if (screenWidth <= 683) {
        window.scrollTo({
            top: 3800,
            behavior: 'smooth',
        });
    } else if (screenWidth <= 813) {
        window.scrollTo({
            top: 3725,
            behavior: 'smooth',
        });
    } else if (screenWidth <= 1920) {
        window.scrollTo({
            top: 3200,
            behavior: 'smooth',
        });
    }
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
        menuToggle.textContent = "☰"; // Міняємо іконку на бургер
    } else {
        nav.classList.add('open'); // Відкриваємо меню
        menuToggle.textContent = "✖"; // Міняємо іконку на хрестик
    }
});

// Скидаємо клас 'open', коли ширина екрану більше 750px
window.addEventListener('resize', () => {
    if (window.innerWidth > 750) {
        nav.classList.remove('open'); // Видаляємо клас 'open'
        menuToggle.textContent = "☰"; // Міняємо іконку на бургер
    }
});
