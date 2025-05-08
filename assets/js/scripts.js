document.addEventListener('DOMContentLoaded', () => {
    // Smooth‐scroll to in‐page anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
