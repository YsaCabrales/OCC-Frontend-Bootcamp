// Accessing Elements
// by ID
const heading = document.getElementById('heading');

// by class
// const heading = document.getElementsByClassName('heading1');

// by tag name
// const heading = document.getElementsByTagName('h1');

console.log(heading);

const listItems = document.querySelectorAll('#list li');

console.log(listItems);

// Modifying Elements
// contents using innerHTML
heading.innerHTML = '<em>Learning DOM Manipulation</em>';

// contents using textContent
heading.textContent = 'All About DOM Manipulation';

// attributes using setAttribute
heading.setAttribute('class', 'highlight');

// styles using the style property
const button = document.getElementById('btn');
button.style.backgroundColor = 'blue';
button.style.color = 'white';

// creating new elements dynamically
const newParagraph = document.createElement('p')
newParagraph.textContent = "This is a new paragraph.";

document.querySelector('.container').appendChild(newParagraph);

// removing elements dynamically
listItems[1].remove();

// Handling Events
button.addEventListener('click', addListItem);

function addListItem() {
    const newListItem = document.createElement('li');
    newListItem.innerHTML = 'New List Item';

    document.getElementById('list').appendChild(newListItem);
}

// Click Event: Triggered when an element is clicked.
// Mouseover Event: Occurs when the mouse pointer is moved over an element.
// Keydown Event: Fired when a key is pressed down.
// Submit Event: Triggered when a form is submitted.
// Load Event: Occurs when a page or an element has finished loading.
// Change Event: Fired when the value of an input element changes.
// Focus and Blur Events: These happen when an element gains or loses focus.
