document.addEventListener('DOMContentLoaded', () => {
    // 1. THEME LOGIC
    const themeBtn = document.getElementById('theme-toggle');
    if (localStorage.getItem('theme') === 'light') document.body.classList.add('light-mode');

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
        });
    }

    // 2. CALCULATOR LOGIC
    const budget = document.getElementById('budgetSelect');
    const game = document.getElementById('gameSelect');
    const result = document.getElementById('resultDisplay');

    const fpsData = {
        '20k': { gta5: '25', dota2: '35', minecraft: '60', valorant: '45', rocketleague: '40' },
        '30k': { gta5: '45', dota2: '65', minecraft: '110', valorant: '90', rocketleague: '75' },
        '40k': { gta5: '60', dota2: '90', minecraft: '200', valorant: '144', rocketleague: '120' },
        '50k': { gta5: '85', dota2: '140', minecraft: '350', valorant: '220', rocketleague: '180' },
        '60k': { gta5: '110', dota2: '180', minecraft: '500', valorant: '280', rocketleague: '240' }
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

    // 3. HAMBURGER MENU FIX
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // 4. CHART LOGIC (NEW FIX)
    const ctx = document.getElementById('fpsPieChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'doughnut', // 'doughnut' looks cleaner than 'pie'
            data: {
                labels: ['20k Build', '30k Build', '40k Build', '50k Build', '60k Build'],
                datasets: [{
                    label: 'Valorant FPS',
                    data: [45, 90, 144, 220, 280], // Data taken from your table
                    backgroundColor: [
                        '#ff6384', // Red
                        '#36a2eb', // Blue
                        '#ffce56', // Yellow
                        '#00ffcc', // Your Neon Green
                        '#9966ff'  // Purple
                    ],
                    borderColor: '#161b22',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#8b949e' // Matches your text color
                        }
                    }
                }
            }
        });
    }
});