// My code following Brad's course
const apiURL = 'https://jsonplaceholder.typicode.com/todos';

// This gets the to do data that already exists.
const getTodos = () => {
  fetch(apiURL + '?_limit=10')
    .then((res) => res.json())
    .then((data) => {
      // loops through each todo returned from the API and adds it to the DOM
      data.forEach((todo) => {
        addTodoToDom(todo);
      });
    });
};

// This Function is to add  each item To the DOM
const addTodoToDom = (todo) => {
  const div = document.createElement('div');

  div.appendChild(document.createTextNode(todo.title));
  div.setAttribute('data-id', todo.id);
  div.classList.add('todo');
  // If the todo is coompleted it adds a done class for styling which gives it a  dark background
  if (todo.completed) {
    div.classList.add('done');
  }

  // Add div to do list so its visible on page
  document.getElementById('todo-list').appendChild(div);

  // This empties the input field after the item has been added
  document.getElementById('title').value = '';
};

// This is for creating a new To do item
const createTodo = (e) => {
  e.preventDefault();

  // Create a new todo object using the value from the form input.
  const newTodo = {
    title: e.target.firstElementChild.value,
    completed: false,
  };

  // This sends the new to do to the server using POST request
  fetch(apiURL, {
    method: 'post',
    body: JSON.stringify(newTodo),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    // Convert the JSON response into a JavaScript object.
    .then((res) => res.json())
    .then((data) => addTodoToDom(data));
};

// If the task is completed turn background dark
const toggleCompleted = (e) => {
  if (e.target.classList.contains('todo')) {
    e.target.classList.toggle('done');
    updateTodo(e.target.dataset.id, e.target.classList.contains('done'));
  }
};

// Put request
const updateTodo = (id, completed) => {
  fetch(`${apiURL}/${id}`, {
    method: 'put',
    body: JSON.stringify({ completed }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

// delete request
const deleteTodo = (e) => {
  if (e.target.classList.contains('todo')) {
    const id = e.target.dataset.id;
    fetch(`${apiURL}/${id}`,{
     method: 'delete'
    })
    .then((res) => res.json())
    .then(() => e.target.remove())
  }
};

// Event Listeners
const init = () => {
  document.addEventListener('DOMContentLoaded', getTodos);
  document.querySelector('#todo-form').addEventListener('submit', createTodo);
  document
    .querySelector('#todo-list')
    .addEventListener('click', toggleCompleted);
  document.querySelector('#todo-list').addEventListener('dblclick', deleteTodo);
};

init();
