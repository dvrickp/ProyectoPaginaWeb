document.addEventListener("DOMContentLoaded", () => {
    const defaultLang = "es";
    const sections = document.querySelectorAll(`[data-lang]`);

    sections.forEach(section => {
        if (section.getAttribute("data-lang") === defaultLang) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });

    switchLanguage();
});

window.onload = function() {
    switchLanguage();
};

function switchLanguage() {
    const selectedLanguage = document.getElementById('language-select').value;
    const sections = document.querySelectorAll('section[data-lang]');

    sections.forEach(section => {
        if (section.getAttribute('data-lang') === selectedLanguage) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

function toggleMobileMenu() {
    const nav = document.querySelector('header nav ul');
    nav.classList.toggle('open');
}

document.getElementById('menu-btn').addEventListener('click', toggleMobileMenu);
