// Wait for the HTML to load
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    // MOBILE MENU TOGGLE
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation(); // Stop click from bubbling
            navMenu.classList.toggle('active');
            console.log("Menu button clicked!"); // Check this in browser console
        });

        // Close menu if you click outside of it
        document.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    }

    // DARK MODE TOGGLE
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            themeBtn.innerText = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
        });
    }
});