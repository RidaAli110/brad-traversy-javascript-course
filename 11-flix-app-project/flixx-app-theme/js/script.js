// My code following Brad's course

// // Stores the current page's path so the router knows which page is open
const global = {
  currentPage: window.location.pathname,
};

async function displayPopularMovies() {
  const { results } = await fetchAPIData('movie/popular');
  results.forEach((movie) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
          <a href="movie-details.html?id=${movie.id}">
           ${
             movie.poster_path
               ? ` <img
              src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
              class="card-img-top"
              alt="${movie.title}"
            />
          </a>`
               : ` <img
              src="images/no-image.jpg"
              class="card-img-top"
              alt="${movie.title}"
            />
          </a>`
           }
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${movie.release_date}</small>
            </p>
          </div>
        `;
    // Add to DOM
    document.querySelector('#popular-movies').appendChild(div);
  });
}

//  fetch data from TMDB API
async function fetchAPIData(endpoint) {
  const API_KEY = '9845c998380f98087e43647a19bc08b3';
  const API_URL = 'https://api.themoviedb.org/3/';

  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-us`,
  );
  const data = await response.json();

  return data;
}

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
      displayPopularMovies();
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
