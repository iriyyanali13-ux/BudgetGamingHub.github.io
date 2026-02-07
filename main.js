document.addEventListener('DOMContentLoaded', () => {
    // THEME LOGIC
    const themeBtn = document.getElementById('theme-toggle');
    if (localStorage.getItem('theme') === 'light') document.body.classList.add('light-mode');

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
        });
    }

    // CALCULATOR LOGIC
    const budget = document.getElementById('budgetSelect');
    const game = document.getElementById('gameSelect');
    const result = document.getElementById('resultDisplay');

    const fpsData = {
        '30k': { valorant: '90', gta5: '45' },
        '50k': { valorant: '220', gta5: '85' },
        '60k': { valorant: '280', gta5: '110' }
    };

    function updateFPS() {
        if(budget && game && result) {
            result.innerText = fpsData[budget.value][game.value] + "+ FPS";
        }
    }

    if(budget) {
        budget.addEventListener('change', updateFPS);
        game.addEventListener('change', updateFPS);
    }

    // --- HAMBURGER MENU FIX ---
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});