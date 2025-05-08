// Optional: Add some custom JavaScript for additional interactivity if needed
document.addEventListener('DOMContentLoaded', () => {
    // Example: Smooth scroll to section on link click
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
