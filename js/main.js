// this is all what I understand in JavaScript

console.log("hello world")
console.error("this is an error")
console.warn("this ia a warning")

const age = 30
// age = 31

console.log(age)

// string, number, boolean, null, undefined

const name = 'sagar mittal';
const marks = 10;
const isMarried = false;
const children = null;
const happy = undefined;

console.log(typeof isMarried)

console.log(`My name is: ${name} and I got ${marks} marks`);

const tt = '';
console.log(tt.split(', '));


const gf = ['anshika', 'khushi'];
gf.push('stuti');
gf.unshift('akshita');
gf.pop();

console.log(gf);
console.log(Array.isArray(gf))
console.log(gf.indexOf('Anshika'))

// object literals key-value pair

const biodata = {
    firstName: 'Sagar',
    lastName: 'Mittal',
    age: 20,
    gf: ['anshika', 'khushi', 'stuti'],
    address: {
        city: 'Bayana',
        state: 'Rajasthan',
        country: 'India',
    }
}

biodata.email = 'mittalsagar006@gmail.com';

console.log(biodata);
console.log(biodata.gf[0]);

const {firstName, lastName, address: {country}} = biodata;
console.log(country);

const todos = [
    {
        id: 1,
        task: 'clean floor and have fun',
        isCompleted: false
    },
    {
        id: 2,
        task: 'wash clothes',
        isCompleted: true
    },
    {
        id: 1,
        task: 'buy grocery items',
        isCompleted: true
    }
];

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// for loop

// for(let i = 0; i <= 10; i++) {
//     console.log(i);
// }

for (let todo of todos) {
    console.log(todo.task);
}

// forEach, map, filter

todos.forEach(function(todo){
    console.log(todo.task);
})

const todoText = todos.map(function(todo){
    return todo.task;
});

console.log(todoText);

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.task;
})

console.log(todoCompleted);

const x = 19;

if(x === 19) {
    console.log('if condition works');
}

// using ternery operator
const color = x>19 ? 'red' : 'blue';
console.log(color);

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is neither red nor blue');
        break;
}

function addNums(num1, num2) {
    return num1 + num2;
}

const ans = addNums(5, 8);
console.log(ans);

const subNums = (num1, num2) => num1 - num2;
console.log(subNums(8, 9));

// this is called pre-classes (that was in ES5)
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getFullYear() {
        return this.dob.getFullYear();
    }
}



const person1 = new Person('Sagar', 'Mittal', '1-5-2002');
console.log(person1.getFullName());
console.log(person1.getFullYear());

// DOM here starts

const ul = document.querySelector('.items');

ul.remove();
ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Sagar Mittal';
ul.children[1].textContent = 'Anshika Shukla';
ul.lastElementChild.innerHTML = '<h2>Hello world</h2>';

const btn = document.querySelector('.btn');
// btn.style.background = 'red';

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector('#my-form').style.background = 'orange';
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Fuck this</h1>';
});
