function scrollToElementWithOffset(elementId, offset) {
    const element = document.getElementById(elementId);
    if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
        });
    }
}

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
    const screenWidth = window.innerWidth;

    if (screenWidth <= 813) {
        scrollToElementWithOffset('projects', -150);
    } else if (screenWidth >= 814) {
        scrollToElementWithOffset('projects', -275);
    }
});

document.querySelector('.back-to-about-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const screenWidth = window.innerWidth;

    if (screenWidth <= 813) {
        scrollToElementWithOffset('about', -50);
    } else if (screenWidth >= 814) {
        scrollToElementWithOffset('about', -75);
    }
});

document.querySelector('.back-to-projects-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const screenWidth = window.innerWidth;

    if (screenWidth <= 813) {
        scrollToElementWithOffset('projects', -150);
    } else if (screenWidth >= 814) {
        scrollToElementWithOffset('projects', -275);
    }
});

document.querySelector('.back-to-contacts-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const screenWidth = window.innerWidth;

    if (screenWidth <= 813) {
        scrollToElementWithOffset('contacts', -150);
    } else if (screenWidth >= 814) {
        scrollToElementWithOffset('contacts', -275);
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
        nav.classList.remove('open');
        menuToggle.textContent = "☰";
    } else {
        nav.classList.add('open');
        menuToggle.textContent = "✖";
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 750) {
        nav.classList.remove('open');
        menuToggle.textContent = "☰";
    }
});
