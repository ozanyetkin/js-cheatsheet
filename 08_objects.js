// Creating object literals
// Write your fasterShip object literal below
let fasterShip = {
    color: 'silver',
    'Fuel Type': 'Turbo Fuel'
}

// Accessing Properties
let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
};

// Write your code below
let crewCount = spaceship.numCrew;
let planetArray = spaceship.flightPath;

// Bracket Notation
let spaceship2 = {
    'Fuel Type': 'Turbo Fuel',
    'Active Mission': true,
    homePlanet: 'Earth',
    numCrew: 5
};

let propName = 'Active Mission';

// Write your code below
let isActive = spaceship2['Active Mission'];
console.log(spaceship2[propName]);

// Property Assignment
let spaceship3 = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth',
    color: 'silver',
    'Secret Mission': 'Discover life outside of Earth.'
};

// Write your code below
spaceship3.color = 'glorious gold';
spaceship3.numEngines = 5;
delete spaceship3['Secret Mission'];

// Methods
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
let alienShip = {
    retreat() {
        console.log(retreatMessage);
    },
    takeOff() {
        console.log('Spim... Borp... Glix... Blastoff!');
    }
};

alienShip.retreat();
alienShip.takeOff();

// Nested Objects
let spaceship4 = {
    passengers: [{ name: 'Space Dog' }],
    telescope: {
        yearBuilt: 2018,
        model: '91031-XLT',
        focalLength: 2032
    },
    crew: {
        captain: {
            name: 'Sandra',
            degree: 'Computer Engineering',
            encourageTeam() {
                console.log('We got this!');
            }
        }
    },
    engine: {
        model: 'Nimbus2000'
    },
    nanoelectronics: {
        computer: {
            terabytes: 100,
            monitors: 'HD'
        },
        'back-up': {
            battery: 'Lithium',
            terabytes: 50
        }
    }
};

let capFave = spaceship4.crew.captain['degree'];
let firstPassenger = spaceship4.passengers[0];

// Pass By Reference
let spaceship5 = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth'
};

// Write your code below
let greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil';
}

let remotelyDisable = obj => {
    obj.disabled = true;
}

greenEnergy(spaceship5);
remotelyDisable(spaceship5);
console.log(spaceship5);

// Looping Through Objects
let spaceship6 = {
    crew: {
        captain: {
            name: 'Lily',
            degree: 'Computer Engineering',
            cheerTeam() { console.log('You got this!') }
        },
        'chief officer': {
            name: 'Dan',
            degree: 'Aerospace Engineering',
            agree() { console.log('I agree, captain!') }
        },
        medic: {
            name: 'Clementine',
            degree: 'Physics',
            announce() { console.log(`Jets on!`) }
        },
        translator: {
            name: 'Shauna',
            degree: 'Conservation Science',
            powerFuel() { console.log('The tank is full!') }
        }
    }
};

// Write your code below
for (let crewMember in spaceship6.crew) {
    console.log(`${crewMember}: ${spaceship6.crew[crewMember].name}`);
}

for (let crewMember in spaceship6.crew) {
    console.log(`${spaceship6.crew[crewMember].name}: ${spaceship6.crew[crewMember].degree}`);
}

// Advanced Objects
const robot = {
    model: 'B-4MI',
    mobile: true,
    greeting() {
        console.log(`I'm model ${this.model}, how may I be of service?`);
    }
}

const massProdRobot = (model, mobile) => {
    return {
        model,
        mobile,
        greeting() {
            console.log(`I'm model ${this.model}, how may I be of service?`);
        }
    }
}

const shinyNewRobot = massProdRobot('TrayHax', true)

const chargingStation = {
    _name: 'Electrons-R-Us',
    _robotCapacity: 120,
    _active: true,
    _chargingRooms: ['Low N Slow', 'Middle of the Road', 'In and Output'],

    set robotCapacity(newCapacity) {
        if (typeof newCapacity === 'number') {
            this._robotCapacity = newCapacity;
        } else {
            console.log(`Change ${newCapacity} to a number.`)
        }
    },
    get robotCapacity() {
        return this._robotCapacity;
    }
}

// The this Keyword
const robot2 = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
        return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
    }
};

console.log(robot2.provideInfo());

// Arrow Functions and this
const robot3 = {
    energyLevel: 100,
    checkEnergy() {
        console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
}

robot3.checkEnergy();

// Privacy
const robot4 = {
    _energyLevel: 100,
    recharge() {
        this._energyLevel += 30;
        console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
};

robot4._energyLevel = 'high';
robot4.recharge();

// Getters
const robot5 = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {
        if (typeof this._energyLevel === 'number') {
            return `My current energy level is ${this._energyLevel}`
        } else {
            return 'System malfunction: cannot retrieve energy level'
        }
    }
};

console.log(robot5.energyLevel);

// Setters
const robot6 = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors() {
        if (typeof this._numOfSensors === 'number') {
            return this._numOfSensors;
        } else {
            return 'Sensors are currently down.'
        }
    },
    set numOfSensors(num) {
        if (typeof num === 'number' && num >= 0) {
            this._numOfSensors = num;
        }
        else {
            console.log('Pass in a number that is greater than or equal to 0')
        }
    }
};

robot6.numOfSensors = 100;
console.log(robot6.numOfSensors);

// Factory Functions
const robotFactory = (model, mobile) => {
    return {
        model,
        mobile,
        beep() {
            console.log('Beep Boop');
        }
    }
}

const tinCan = robotFactory('P-500', true);
tinCan.beep();

// Property Value Shorthand
function robotFactory2(model, mobile) {
    return {
        model,
        mobile,
        beep() {
            console.log('Beep Boop');
        }
    }
}

const newRobot = robotFactory2('P-501', false);
console.log(newRobot.model);
console.log(newRobot.mobile);

// Destructured Assignment
const robot7 = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
        beep() {
            console.log('Beep Boop');
        }
    }
};

const { functionality } = robot7;
functionality.beep();

// Built-in Object Methods
const robot8 = {
    model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
};

const robotKeys = Object.keys(robot8);
console.log(robotKeys);

const robotEntries = Object.entries(robot8);
console.log(robotEntries);

const newRobot2 = Object.assign({ laserBlaster: true, voiceRecognition: true }, robot8);
console.log(newRobot2);

// Review
const robot9 = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
        return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
    }
};

console.log(robot9.provideInfo());

// Project: Build a Library
class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title
    }

    get isCheckedOut() {
        return this._isCheckedOut
    }

    get ratings() {
        return this._ratings
    }

    set isCheckedOut(value) {
        this._isCheckedOut = value
    }

    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut
    }

    getAverageRating() {
        let ratingsSum = this.ratings.reduce((accumulator, rating) => accumulator + rating);
        return ratingsSum / this.ratings.length;
    }

    addRating(value) {
        this.ratings.push(value);
    }
}

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages
    }

    get author() {
        return this._author
    }

    get pages() {
        return this._pages
    }
}

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime
    }

    get director() {
        return this._director
    }

    get runTime() {
        return this._runTime
    }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

historyOfEverything.toggleCheckOutStatus();

console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);

speed.toggleCheckOutStatus();

console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());

// Project: School Catalogue
class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents
    }

    get name() {
        return this._name
    }

    get level() {
        return this._level
    }

    get numberOfStudents() {
        return this._numberOfStudents
    }

    set numberOfStudents(value) {
        if (typeof value === 'number') {
            this._numberOfStudents = value
        } else {
            console.log('Invalid input: numberOfStudents must be set to a Number.')
        }
    }

    quickFacts() {
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
    }

    static pickSubstituteTeacher(substituteTeachers) {
        const randomNumber = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[randomNumber];
    }
}

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy
    }

    get pickupPolicy() {
        return this._pickupPolicy
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams
    }

    get sportsTeams() {
        return this._sportsTeams
    }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

lorraineHansbury.quickFacts();

// Project: Meal Maker
let menu = {
    //create a courses property object
    _courses: {
        //creating the 3 course properties
        appetizers: [],
        mains: [],
        desserts: []
    },//end of the courses object
    // a setter method for each course
    set appetizers(newAppetizer) {
        this.appetizers = newAppetizer;
    },
    set mains(newMain) {
        this.mains = newMain;
    },
    set desserts(newDessert) {
        this.desserts = newDessert;
    },
    // a getter method for each course
    get appetizers() {
        return this.appetizers;
    },
    get mains() {
        return this.mains;
    },
    get desserts() {
        return this.desserts;
    },
    // a getter method for the courses property
    get courses() {
        return {
            appetizers: this._courses.appetizers,//this uses the appetizer getter methods
            mains: this._courses.mains,
            desserts: this._courses.desserts,
        };
    },

    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },

    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The total price ${totalPrice}.`;
    }
}; //end of menu object

menu.addDishToCourse('appetizers', 'drink', 4.25);
menu.addDishToCourse('appetizers', 'vodka', 6.25);
menu.addDishToCourse('appetizers', 'soup', 3.50);

menu.addDishToCourse('mains', 'Salad', 8.25);
menu.addDishToCourse('mains', 'prawns', 9.25);
menu.addDishToCourse('mains', 'risotto', 8.50);

menu.addDishToCourse('desserts', 'fruits', 3.25);
menu.addDishToCourse('desserts', 'tiramisu', 4.25);
menu.addDishToCourse('desserts', 'pudding', 4.50);

let meal = menu.generateRandomMeal();
console.log(meal)

// Project: Team Stats
// start of the team object
const team = {

    // start of the players property
    _players: [
        {
            firstName: 'Jonas',
            lastName: 'Castulik',
            age: '29'
        },
        {
            firstName: 'Artur',
            lastName: 'Berlov',
            age: '28'
        },
        {
            firstName: 'Michal',
            lastName: 'Padour',
            age: '28'
        }
    ],
    // end of the player property

    // start of the games property
    _games: [
        {
            opponent: 'Kamenice',
            teamPoints: 3,
            opponentPoints: 0
        },
        {
            opponent: 'Dobranov',
            teamPoints: 5,
            opponentPoints: 1
        },
        {
            opponent: 'Skalice',
            teamPoints: 3,
            opponentPoints: 2
        }
    ],
    // end of the games property

    // start of the getter methods
    get games() {
        return this._games;
    },
    get players() {
        return this._players;
    },
    // end of the getter methods
    // start of the method for a new player
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this.players.push(player);
    },
    // end of the method for a new player
    addGame(name, myPoints, TheirPoints) {
        let game = {
            opponent: name,
            teamPoints: myPoints,
            opponentPoints: TheirPoints
        }
        this.games.push(game);
    },
};
// end of the team object
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team._players);

team.addGame('test', 44, 55);

console.log(team._games);
