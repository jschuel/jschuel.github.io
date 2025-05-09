document.addEventListener('DOMContentLoaded', () => {
  //
  // 1) Smooth‐scroll Explore → About section
  //
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

  //
  // 2) Mobile hamburger menu toggle
  //
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks  = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    // Open/close when clicking the hamburger button
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    // Close when clicking anywhere outside the menu
    document.addEventListener('click', (e) => {
      if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
      }
    });
  }
});
