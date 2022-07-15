console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document);
console.log(document.all);

// main thing of JavaScript is you can whatever you want & do wherever you want
// selector in javascript are querySelector, getElementById, getElementsByClassName, getElemenetByTagName
// traversing in dom
// parentNodes, parentElements, childNodes, children, firstElementChild
// nextSibling, nextElementSibling, previousSibling, previousElementSibling
// use element type as they not give #text type & give actual element

const newDiv = document.createElement('div');


newDiv.className = 'hello';
const newDivText = document.createTextNode('hello world');
newDiv.appendChild(newDivText);

console.log(newDiv);

// Events

const button = document.getElementById('button');
button.addEventListener('click', runEvent);

function buttonClick (e) {
    // console.log(e.type);
    console.log(`X-position is ${e.clientX} & Y-position is ${e.clientY}`)
}

function runEvent (e) {
    console.log(`Event: ${e.type}`);
}

const box = document.getElementById('box');
box.addEventListener('mouseenter', runBoxEvent);

function runBoxEvent(e) {
    console.log('box is doing something');
}