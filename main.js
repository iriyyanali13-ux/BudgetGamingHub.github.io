document.addEventListener('DOMContentLoaded', () => {
    // --- MOBILE MENU LOGIC ---
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
        });

        document.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    }

    // --- DARK MODE LOGIC ---
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            themeBtn.innerText = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
        });
    }

    // --- PIE CHART LOGIC (Valorant Performance Share) ---
    const pieCanvas = document.getElementById('fpsPieChart');
    if (pieCanvas) {
        const ctx = pieCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['20k Build', '30k Build', '40k Build', '50k Build', '60k Build'],
                datasets: [{
                    label: 'Valorant FPS Share',
                    data: [45, 90, 144, 220, 280], // Valorant data from your table
                    backgroundColor: [
                        '#ff4d4d', // Red
                        '#ffa64d', // Orange
                        '#ffdb4d', // Yellow
                        '#4dff88', // Green
                        '#00ffcc'  // Your Theme Teal
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
                        position: 'bottom',
                        labels: {
                            color: '#e6edf3',
                            padding: 20,
                            font: { size: 12 }
                        }
                    }
                }
            }
        });
    }
});