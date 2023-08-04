// Variable assignment
var favoriteFood = 'pizza'
var numOfSlices = 8

console.log(favoriteFood)
console.log(numOfSlices)

// Variable re-assignment
let changeMe = true
changeMe = false

console.log(changeMe);

// Constants
const entree = 'Enchiladas'
console.log(entree)

// Line below will throw an error
// entree = 'Tacos'

// Mathematical Assignment Operators
let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:

levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

// The Increment and Decrement Operator
let gainedDollar = 3;
let lostDollar = 50;

gainedDollar ++;
lostDollar --;

console.log(gainedDollar);
console.log(lostDollar);

// String Concatenation with Variables
let favoriteAnimal = 'cat'

console.log('My favorite animal: ' + favoriteAnimal);

// String Interpolation
var myName = 'Yetkin';
var myCity = 'Tokyo';

console.log(`My name is ${myName}. My favorite city is ${myCity}`);

// typeof operator
let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);

newVariable = 1;
console.log(typeof newVariable);

// Review Variables
// Declare a variable named kelvin, and set it equal to 293.
kelvin = 294
// Convert kelvin to celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius.
celsius = kelvin - 273
// Use this equation to calculate fahrenheit, then store the answer in a variable named fahrenheit.
fahrenheit = celsius * (9/5) + 32
// When you convert from Celsius to Fahrenheit, you often get a decimal number. Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the fahrenheit variable.
fahrenheit = Math.floor(fahrenheit)
// Use console.log and string interpolation to log the temperature in fahrenheit to the console as follows: The temperature is TEMPERATURE degrees Fahrenheit.. Use string interpolation to replace TEMPERATURE with the value saved to fahrenheit.
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);
// Run your program to see your results!
kelvin = prompt('What is the Kelvin temperature today?');
