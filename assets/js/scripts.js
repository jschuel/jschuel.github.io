function loadFragment(id, url) {
  fetch(url)
    .then(res => res.text())
    .then(html => document.getElementById(id).innerHTML = html)
    .catch(err => console.error(`Error loading ${url}:`, err));
}

// Inject header & footer into every page
window.addEventListener('DOMContentLoaded', () => {
  loadFragment('site-header', 'partials/header.html');
  loadFragment('site-footer', 'partials/footer.html');
});
