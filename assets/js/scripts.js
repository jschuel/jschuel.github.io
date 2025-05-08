document.addEventListener('DOMContentLoaded', () => {
  // Smooth‐scroll Explore button to bottom of the About section
  document.querySelectorAll('a[href="#about"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.getElementById('about');
      if (target) {
        // Scroll so the BOTTOM of the About section aligns with the bottom of the viewport
        target.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    });
  });
});
