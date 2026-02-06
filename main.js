document.addEventListener('DOMContentLoaded', () => {
    // --- MOBILE MENU ---
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
        });
        document.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) navMenu.classList.remove('active');
        });
    }

    // --- THEME TOGGLE WITH MEMORY ---
    const themeBtn = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        if (themeBtn) themeBtn.innerText = '☀️';
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const isLight = document.body.classList.contains('light-mode');
            themeBtn.innerText = isLight ? '☀️' : '🌙';
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        });
    }

    // --- PIE CHART ---
    const pieCanvas = document.getElementById('fpsPieChart');
    if (pieCanvas) {
        new Chart(pieCanvas.getContext('2d'), {
            type: 'pie',
            data: {
                labels: ['20k', '30k', '40k', '50k', '60k'],
                datasets: [{
                    data: [45, 90, 144, 220, 280],
                    backgroundColor: ['#ff4d4d', '#ffa64d', '#ffdb4d', '#4dff88', '#00ffcc'],
                    borderColor: '#161b22', borderWidth: 2
                }]
            },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { color: document.body.classList.contains('light-mode') ? '#333' : '#fff' } } } }
        });
    }
});