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
    nav.classList.toggle('open'); // Toggle the 'open' class for mobile menu
}

// Attach event listener to a menu button (assumes a button with id 'menu-btn' exists)
document.getElementById('menu-btn').addEventListener('click', toggleMobileMenu);
