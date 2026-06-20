// My code following Brad's course
function newItem(item) {
     const li = document.createElement('li');
     li.appendChild(document.createTextNode(item));
// create button
     const button = document.createElement('button');
     button.className = 'remove-item btn-link text-red';
// create icon
     const icon = document.createElement('i');
     icon.className = 'fa-solid fa-xmark';
// connect together
     button.appendChild(icon);
     li.appendChild(button);
     document.querySelector('.items').appendChild(li);
}
newItem('Cheese');
