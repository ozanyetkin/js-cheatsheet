// Counter 
for (let counter = 5; counter < 11; counter++) {
    console.log(counter);
}

// The For Loop
var vacationSpots = ['Tokyo', 'New York', 'Paris'];

// Without the loop
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

// With the loop
for (var i = 0; i < vacationSpots.length; i++) {
    console.log('I would love to visit ' + vacationSpots[i]);
}

// Looping in Reverse
for (let counter = 3; counter >= 0; counter--) {
    console.log(counter);
}

// Looping through Arrays
const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

for (let i = 0; i < vacationSpots.length; i++) {
    console.log('I would love to visit ' + vacationSpots[i])
}

// Nested Loops
const myPlaces = ['Paris', 'New York', 'Barcelona'];
const friendPlaces = ['Berlin', 'Paris', 'Sydney'];

for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++) {
    for (let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++) {
        if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
            console.log(friendPlaces[friendPlacesIndex]);
        }
    }
}

bobsFollowers = ['John', 'Adam', 'Eve', 'Tina'];
tinasFollowers = ['Adam', 'Eve', 'Bob'];

mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] === tinasFollowers[j]) {
            mutualFollowers.push(tinasFollowers[j]);
        }
    }
}

console.log(mutualFollowers);

// The While Loop
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;
while (currentCard != 'spade') {
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard);
}

// Do...While Statements
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
    cupsAdded++;
}
while (cupsAdded < cupsOfSugarNeeded);

// The break Keyword
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++) {
    console.log(rapperArray[i]);
    if (rapperArray[i] === 'Notorious B.I.G.') {
        break;
    }
}

console.log("And if you don't know, now you know.");

// Whale Talk
let input = "Wow, it is finally working or me";
const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
    for (let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++) {
        if (input[inputIndex] === vowels[vowelsIndex]) {
            if (input[inputIndex] === "e") {
                resultArray.push("ee");
            } else if (input[inputIndex] === "u") {
                resultArray.push("uu");
            } else {
                resultArray.push(input[inputIndex]);
            }
        }
    }
}

console.log(resultArray.join("").toUpperCase());
