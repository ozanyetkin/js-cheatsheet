// Functions as Data
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for (let i = 1; i <= 1000000; i++) {
        if ((2 + 2) != 4) {
            console.log('Something has gone very wrong :( ');
        }
    }
};

// Write your code below
const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;

isTwoPlusTwo();
console.log(isTwoPlusTwo.name);

// Functions as Parameters
const addTwo = num => {
    return num + 2;
}

const checkConsistentOutput = (func, val) => {
    const checkA = val + 2;
    const checkB = func(val);
    if (checkA === checkB) {
        return checkA;
    }
    else {
        return 'inconsistent results';
    }
}

console.log(checkConsistentOutput(addTwo, 2));

// Introduction to Iterators
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
    console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
    return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
    return typeof thing === 'number';
});

console.log(onlyNumbers);

// The .forEach() Method
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(fruit => {
    console.log('I want to eat a ' + fruit);
}
);

// The .map() Method
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => {
    return animal[0];
});

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(number => {
    return number / 100;
}
);

// The .filter() Method
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers2 = randomNumbers.filter(number => {
    return number < 250;
}
);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter(word => {
    return word.length > 7;
}
);

// The .findIndex() Method
const animals2 = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals2.findIndex(animal => {
    return animal === 'elephant';
}
);

const startsWithS = animals2.findIndex(animal => {
    return animal[0] === 's';
}
);

// The .reduce() Method
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
    console.log('The value of accumulator: ', accumulator);
    console.log('The value of currentValue: ', currentValue);
    return accumulator + currentValue;
}
);

console.log(newSum);

// Iterator Documentation
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some(word => {
    return word.length < 6;
}
));

const interestingWords = words.filter(word => {
    return word.length > 5;
}
);

console.log(interestingWords.every((word) => {
    return word.length > 5;
}
));

// Choosing the Right Iterator
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
    return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);

// Grammar Checker
let story =
    'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(" ");
let unnecessaryWord = "literally";
let misspelledWord = "beautifull";
let badWord = "freaking";


storyWords = storyWords.filter((word) => {
    return word !== unnecessaryWord;
});


storyWords = storyWords.map((word) => {
    return word === misspelledWord ? "beautiful" : word;
});

let badWordIndex = storyWords.findIndex((word) => {
    return word === badWord;
});

storyWords[badWordIndex] = "really";

let lengthCheck = storyWords.every((word) => {
    return word.length < 10;
});
// console.log(lengthCheck);

let lengthyWordIndex = storyWords.findIndex((word) => {
    return word.length > 10;
});
storyWords[lengthyWordIndex] = "stunning";

// removing the word "very"
storyWords = storyWords.filter((word) => {
    return word !== "very";
});

// replacing "GW"
storyWords = storyWords.map((word) => {
    return word === "GW" ? "George Washington" : word;
});

// Changing the imperial units of measurement (feet and miles) to metric units (meters and kilometers).
storyWords.forEach((word) => {
    if (word === "feet") {
        let feetIndex = storyWords.indexOf(word);
        storyWords[feetIndex - 1] = Math.round(((parseInt(storyWords[feetIndex - 1].replace(/,/g, '')) * 0.3048))).toString();
        storyWords[feetIndex] = 'meters';
    } else if (word === "mile") {
        let mileIndex = storyWords.indexOf(word);
        // console.log(storyWords[mileIndex - 1]);
        storyWords[mileIndex - 1] = Math.round((parseInt(storyWords[mileIndex - 1]) * 1.60934)).toString();
        storyWords[mileIndex] = 'kilometers';
    }
});

console.log(storyWords.join(' '));
