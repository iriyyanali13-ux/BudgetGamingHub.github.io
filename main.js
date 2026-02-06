document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    // MOBILE MENU
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
        });
        document.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) navMenu.classList.remove('active');
        });
    }

    // PIE CHART
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
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { color: '#fff' } } } }
        });
    }
});