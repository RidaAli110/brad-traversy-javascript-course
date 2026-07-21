// My code following Brad's course

// // Stores the current page's path so the router knows which page is open
const global = {
  currentPage: window.location.pathname,
};

// Highlight active link
function highlightActiveLink() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.getAttribute('href');
    if (link.getAttribute('href') === global.currentPage) {
      link.classList.add('active');
    }
  });
}

// Initialise app -  Checks which page is open and runs the required functions
function init() {
  switch (global.currentPage) {
    case '/':
    case '/index.html':
      console.log('home');
      break;
    case '/shows.html':
      console.log('shows');
      break;
    case '/movie-details.html':
      console.log('movie details');
      break;
    case '/tv-details.html':
      console.log('tv details');
      break;
    case '/search.html':
      console.log('search page');
      break;
  }
  highlightActiveLink();
}

document.addEventListener('DOMContentLoaded', init);
