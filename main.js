document.addEventListener('DOMContentLoaded', () => {
    // 1. THEME TOGGLE
    const themeBtn = document.getElementById('theme-toggle');
    if (localStorage.getItem('theme') === 'light') document.body.classList.add('light-mode');

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
        });
    }

    // 2. MOBILE MENU
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // 3. FPS CALCULATOR LOGIC
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

    if(budget) budget.addEventListener('change', updateFPS);
    if(game) game.addEventListener('change', updateFPS);

    // 4. CHART LOGIC (Added this section)
    const chartCanvas = document.getElementById('fpsPieChart');
    if (chartCanvas) {
        new Chart(chartCanvas, {
            type: 'pie', // You can also use 'doughnut'
            data: {
                labels: ['20k Build', '30k Build', '40k Build', '50k Build', '60k Build'],
                datasets: [{
                    label: 'Valorant FPS Performance',
                    data: [45, 90, 144, 220, 280], // Matches your table data
                    backgroundColor: [
                        '#ff4d4d', // Red
                        '#ffdb4d', // Yellow
                        '#00ffcc', // Primary Neon
                        '#36a2eb', // Blue
                        '#9966ff'  // Purple
                    ],
                    borderColor: '#161b22', // Matches card background
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#8b949e',
                            font: { family: "'Segoe UI', sans-serif" }
                        }
                    }
                }
            }
        });
    }
});