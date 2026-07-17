// My code following Brad's course

// Fetching JSON file
fetch('./movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data));

// Fetching from a text file
fetch('./test.txt')
  .then((response) => response.text())
  .then((data) => console.log(data));

// Fetching from an API
fetch('https://api.github.com/users/RidaAli110')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const username = data.login;
    console.log(username);
    document.querySelector('h1').textContent = `My GitHub username is ${username}`
    const h3 = document.createElement('h3');
    const text = document.createTextNode(`My GitHub user is ${username}`);
    h3.appendChild(text)
    document.body.appendChild(h3);
    h3.style.color = 'green';
  });
