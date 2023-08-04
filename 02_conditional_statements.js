// If statement 
let sale = true;

if (sale) {
    console.log('Time to buy!');
}


// If...Else Statements
sale = false;

if (sale) {
    console.log('Time to buy!');
}
else {
    console.log('Time to wait for a sale.');
}

// Comparison Operators
let hungerLevel = 7;

if (hungerLevel > 7) {
    console.log('Time to eat!');
}
else {
    console.log('We can eat later!');
}

// Logical Operators
let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) {
    console.log('time to sleep');
}
else {
    console.log('not bed time yet');
}

// Truthy and Falsy
// Change the wordCount to a number that prints out the 'Great! You've started your work!' message.
let wordCount = 0;

if (wordCount) {
    console.log("Great! You've started your work!");
} else {
    console.log('Better get to work!');
}

// Change the favoritePhrase to a string that prints out 'This string is definitely empty.'
let favoritePhrase = 'Hello World!';

if (favoritePhrase) {
    console.log("This string doesn't seem to be empty.");
} else {
    console.log('This string is definitely empty.');
}

// Truthy and Falsy Assignment
let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

// Ternary Operator
let isLocked = false;

if (isLocked) {
    console.log('You will need a key to open the door.');
} else {
    console.log('You will not need a key to open the door.');
}

// Ternary version of the if else above
isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

if (isCorrect) {
    console.log('Correct!');
} else {
    console.log('Incorrect!');
}

// Ternary version of the if else above
isCorrect ? console.log('Correct!') : console.log('Incorrect!');

favoritePhrase = 'Love That!';

if (favoritePhrase === 'Love That!') {
    console.log('I love that!');
} else {
    console.log("I don't love that!");
}

// Ternary version of the if else above
favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

// Else If Statements
let season = 'summer';

if (season === 'spring') {
    console.log('It\'s spring! The trees are budding!');
}
else if (season === 'winter') {
    console.log('It\'s winter! Everything is covered in snow.');
}
else if (season === 'fall') {
    console.log('It\'s fall! Leaves are falling!');
}
else if (season === 'summer') {
    console.log('It\'s sunny and warm because it\'s summer!');
}
else {
    console.log('Invalid season.');
}

// The switch keyword
let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
    case 'first place':
        console.log('You get the gold medal!');
        break;
    case 'second place':
        console.log('You get the silver medal!');
        break;
    case 'third place':
        console.log('You get the bronze medal!');
        break;
    default:
        console.log('No medal awarded.');
        break;
}

// Magic Eight Ball
let username = 'Jonas';

username === 'Jane' ? console.log('Hello, Jane!') : console.log('Hello!');

let userQuestion = 'If you think you are allow to code,';

console.log(`${userQuestion} ask ${username}.`);

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

switch (randomNumber) {
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'Not sure yet';
        break;
    case 2:
        eightBall = 'Obviously not';
        break;
    case 3:
        eightBall = 'I am out of options';
        break;
    case 4:
        eightBall = 'Nope';
        break;
    case 5:
        eightBall = 'NO!!!!';
        break;
    case 6:
        eightBall = 'Hell yeah';
        break;
    case 7:
        eightBall = 'I like turtles';
        break;
}

console.log(eightBall);

// Race Day
let raceNumber = Math.floor(Math.random() * 1000);
let earlyReg = false;
let runnerAge = 19;

if (earlyReg && runnerAge > 18) {
    raceNumber += 1000;
};

if (earlyReg && runnerAge > 18) {
    console.log(`Race starts at 9:30 AM for runner with Number ${raceNumber}`)
} else if (!earlyReg && runnerAge > 18) {
    console.log(`Race starts at 11:00 AM for runner with Number ${raceNumber}`)
} else if (runnerAge < 18) {
    console.log(`Race starts at 12:30 AM for runner with Number ${raceNumber}`)
} else {
    console.log(`Don't run at all this is not a race for 18 years old`);
}
