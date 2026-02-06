// Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Basic Theme Toggle (Optional, if you want to keep dark mode logic)
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

// FPS Chart Logic (For fps-guides.html)
if (document.getElementById('fpsChart')) {
    const ctx = document.getElementById('fpsChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['20k Build', '30k Build', '40k Build', '50k Build', '60k Build'],
            datasets: [{
                label: 'Valorant FPS',
                data: [40, 90, 144, 200, 240],
                backgroundColor: '#00ffcc'
            }, {
                label: 'GTA V FPS',
                data: [25, 40, 60, 75, 90],
                backgroundColor: '#8a2be2'
            }]
        },
        options: {
            scales: {
                y: { beginAtZero: true, grid: { color: '#333' } },
                x: { grid: { display: false } }
            },
            plugins: {
                legend: { labels: { color: 'white' } }
            }
        }
    });
}