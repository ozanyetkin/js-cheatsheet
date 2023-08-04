// Function Declarations
function getReminder() {
    console.log('Water the plants.')
}

function greetInSpanish() {
    console.log('Buenas tardes.')
}

// Calling a Function
function sayThanks() {
    console.log('Thank you for your purchase! We appreciate your business.');
}

sayThanks();
sayThanks();
sayThanks();

// Parameters and Arguments
function sayThanks(name) {
    console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}

sayThanks('Cole');

// Default Parameters
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') {
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}

// Return
function monitorCount(rows, columns) {
    return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);

// Helper Functions
function monitorCount(rows, columns) {
    return rows * columns;
}

function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);

// Function Expressions
const plantNeedsWater = function (day) {
    if (day === 'Wednesday') {
        return true;
    }
    else {
        return false;
    }
};

console.log(plantNeedsWater('Tuesday'));

// Arrow Functions
const plantNeedsWaterArrow = (day) => {
    if (day === 'Wednesday') {
        return true;
    }
    else {
        return false;
    }
}

// Concise Body Arrow Functions
const plantNeedsWaterConcise = day => day === 'Wednesday' ? true : false;

// Rock, Paper, or Scissors
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
        return userInput;
    } else {
        console.log("Error!");
    }
}

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === "bomb") {
        return "you are unbeatable winner"
    };
    if (userChoice === computerChoice) {
        return "That is a tie!";
    };
    if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return "Computer won";
        } else {
            return "User won";
        }
    }
    if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            return "Computer won";
        } else {
            return "User won";
        }
    }
    if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            return "Computer won";
        } else {
            return "User won";
        }
    }
}

const playGame = () => {
    console.log(`player chose ${getUserChoice('scissors')}`);
    console.log(`computer chose ${getComputerChoice()}`);
    console.log(determineWinner(getUserChoice("scissors"), getComputerChoice()));
}
playGame();

// Sleep Debt Calculator
const getSleepHours = day => {
    switch (day) {
        case "monday":
            return 7
            break;
        case "thuesday":
            return 7
            break;
        case "wednesday":
            return 7
            break;
        case "thursday":
            return 7
            break;
        case "friday":
            return 7
            break;
        case "saturday":
            return 9
            break;
        case "sunday":
            return 8
            break;
    };
};

const getActualSleepHours = () =>
    getSleepHours("monday") + getSleepHours("thuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday");

const getIdealSleepHours = idealHours => idealHours * 7;

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(7.5);
    if (actualSleepHours === idealSleepHours) {
        console.log('That is perfect amount of sleep');
    } else if (actualSleepHours < idealSleepHours) {
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) more sleep than you needed this week. You should make more from the day.');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
    }
}

calculateSleepDebt();