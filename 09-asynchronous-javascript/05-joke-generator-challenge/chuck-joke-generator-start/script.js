// My code following Brad's course
const jokeEL = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

const generateJoke = () => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        jokeEL.innerHTML = JSON.parse(this.responseText).value;
      } else {
        (jokeEL, (innerHTML = 'Something went wrong'));
      }
    }
  };
  xhr.send();
};

jokeBtn.addEventListener('click', generateJoke);
