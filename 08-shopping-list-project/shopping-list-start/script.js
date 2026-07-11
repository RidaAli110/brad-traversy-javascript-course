// My code following Brad's course

const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
const formBtn = itemForm.querySelector('button');
let isEditMode = false;

function displayItems() {
  const shopppingListStorage = getItemsFromStorage();
  shopppingListStorage.forEach((item) => addItemToDOM(item));
  checkUI();
}

function onAddItemSubmit(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validate input
  if (newItem === '') {
    alert('Please add an item');
    return;
  }

  // check for edit mode
  if (isEditMode) {
    const itemToEdit = itemList.querySelector('.edit-mode');
    removeItemFromStorage(itemToEdit.textContent);
    itemToEdit.classList.remove('edit-mode');
    itemToEdit.remove();
    isEditMode = false;
  } else {
     if (checkIfItemExists(newItem)){
          alert('This item already exists!');
          return;
     }
  }
  // create item DOM element
  addItemToDOM(newItem);

  // Add item to local storage
  addItemToStorage(newItem);

  checkUI();
  itemInput.value = '';
}

function addItemToDOM(item) {
  // create list item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);
  // Add li to DOM
  itemList.appendChild(li);
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

function addItemToStorage(item) {
  const shopppingListStorage = getItemsFromStorage();

  // Add new item to Array
  shopppingListStorage.push(item);

  //Convert to JSON string and set to local storage
  localStorage.setItem('items', JSON.stringify(shopppingListStorage));
}

function getItemsFromStorage() {
  let shopppingListStorage;

  if (localStorage.getItem('items') === null) {
    shopppingListStorage = [];
  } else {
    shopppingListStorage = JSON.parse(localStorage.getItem('items'));
  }
  return shopppingListStorage;
}

function itemClick(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    removeItem(e.target.parentElement.parentElement);
  } else {
    setItemToEdit(e.target);
  }
}

function checkIfItemExists(item) {
  const shopppingListStorage = getItemsFromStorage();
  return shopppingListStorage.includes(item);
}

function setItemToEdit(item) {
  isEditMode = true;
  itemList
    .querySelectorAll('li')
    .forEach((i) => i.classList.remove('edit-mode'));
  item.classList.add('edit-mode');
  formBtn.innerHTML = '<i class = "fa-solid fa-pen"></i> Update Item';
  formBtn.style.backgroundColor = '#228b22';
  itemInput.value = item.textContent;
}

// remove items with the delete icon
function removeItem(item) {
  if (confirm('Are you sure?')) {
    item.remove();

    removeItemFromStorage(item.textContent);

    checkUI();
  }
}

function removeItemFromStorage(item) {
  let shopppingListStorage = getItemsFromStorage();
  shopppingListStorage = shopppingListStorage.filter((i) => i !== item);

  localStorage.setItem('items', JSON.stringify(shopppingListStorage));
}

// Clear items button
function clearItems() {
  // used syntax i recently learned to clear all items
  if (confirm('Are you sure?')) {
    itemList.replaceChildren();
  }

  /* Brad's way of doing this 
     while (itemList.firstChild) {
  itemList.removeChild(itemList.firstChild);
}*/
  localStorage.removeItem('items');
  checkUI();
}

// Filter
function filterItems(e) {
  const allItems = itemList.querySelectorAll('li');
  const text = e.target.value.toLowerCase();
  allItems.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();

    if (itemName.indexOf(text) != -1) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

function checkUI() {
  itemInput.value = '';

  const allItems = itemList.querySelectorAll('li');

  if (allItems.length === 0) {
    clearBtn.style.display = 'none';
    itemFilter.style.display = 'none';
  } else {
    clearBtn.style.display = 'block';
    itemFilter.style.display = 'block';
  }

  formBtn.innerHTML = '<i class = "fa-solid fa-plus"></i> Add Item';
  formBtn.style.backgroundColor = '#333';
  isEditMode = false;
}

// Initialise app
function init() {
  // Event listners
  itemForm.addEventListener('submit', onAddItemSubmit);
  itemList.addEventListener('click', itemClick);
  clearBtn.addEventListener('click', clearItems);
  itemFilter.addEventListener('input', filterItems);
  document.addEventListener('DOMContentLoaded', displayItems);

  checkUI();
}
init();
