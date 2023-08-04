// Arrays
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

console.log(newYearsResolutions);

// Creating an array
const hobbies = ['coding', 'reading', 'gaming'];

console.log(hobbies);

// Accessing elements
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = famousSayings[0];

console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);

// Update elements
let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';

console.log(groceryList);

// Arrays with let and const
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];
console.log(condiments);

utensils[3] = 'Spoon';
console.log(utensils);

// The .length property
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);

// The .push() method
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('clean room', 'cook dinner');
console.log(chores);

// The .pop() method
const chores2 = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores2.pop();
console.log(chores2);

// More array methods
groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList);

groceryList.unshift('popcorn');
console.log(groceryList);

console.log(groceryList.slice(1, 4));
console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

// Arrays and functions
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr) {
    arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

function removeElement(newArr) {
    newArr.pop();
}

console.log(concept);
removeElement(concept);
console.log(concept);

// Nested arrays
const numberClusters = [
    [1, 2],
    [3, 4],
    [5, 6]
];

const target = numberClusters[2][1];
console.log(target);

// Review arrays
const bobsFollowers = ['Jonas', 'Jane', 'Jack', 'Jill'];
const tinasFollowers = ['Jonas', 'Jane', 'Jenny'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] === tinasFollowers[j]) {
            mutualFollowers.push(tinasFollowers[j]);
        }
    }
}

console.log(mutualFollowers);

// Secret message
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript']

console.log(secretMessage.length);

secretMessage.pop();

console.log(secretMessage.length);

secretMessage.push('to', 'program');

console.log(secretMessage.length);

console.log(secretMessage.indexOf('easily'));
secretMessage[7] = 'right';

console.log(secretMessage);

secretMessage.shift();

console.log(secretMessage);

secretMessage.unshift('Programming');

secretMessage.splice(6, 5, 'know');
console.log(secretMessage);

console.log(secretMessage.join(" "));