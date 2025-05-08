document.addEventListener('DOMContentLoaded', () => {
  // Smooth-scroll specifically for the Explore button (#about)
  document.querySelectorAll('a[href="#about"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.getElementById('about');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
