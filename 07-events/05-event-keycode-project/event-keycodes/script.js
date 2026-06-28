// My code following Brad's course

// the function is automatically called by the browser when a key is pressed
function showKeyCodes(e) {
     const insert = document.getElementById('insert');
     insert.innerHTML = '';
// Store the keyboard event information in an object
     const keyCodes = {
          'e.key': e.key === ' ' ? 'space' : e.key,
          'e.keyCode': e.keyCode,
          'e.code': e.code
     };
// loop through each property
     for (let key in keyCodes) {
// Create the HTML elements that will display each key/value pair
          const div = document.createElement('div');
          div.className = 'key';
          const small = document.createElement('small');
          // Create text nodes for the property name and its corresponding value
          const keyText = document.createTextNode(key);
          const ValueText = document.createTextNode(keyCodes[key]);
          small.appendChild(keyText);
          div.appendChild(ValueText);
          div.appendChild(small);
 // Add the completed div to the page inside the #insert element
          insert.appendChild(div);
     }
}
window.addEventListener('keydown', showKeyCodes);