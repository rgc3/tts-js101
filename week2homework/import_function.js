// Level 1:
// 1. Create a module that contains a Person. The Person should have a firstName, lastName, hairColor, eyeColor, and age.
// 2. Import the module in another file (using Node's "require function"), create a new Person that matches your tastes.
// 3. Change the properties of the Person using dot & array notation.
// 4. Provide them with a function to greet their creator.
// Level 3
// 1. Create 2 People, and have Person #1 greet Person #2 by name. (ex. "Hello Susan, my name is Seth!") (You would not pass "Susan" in as a String, but rather as a property of the other Person);

var Person = require('./Person');

console.log(Person);

var Steve = Person("Steve", "Jobs", "Gray", "blue", 70);
var Chance = Person("Chance", "Smith", "Brown", "brown", 44);

Steve.greet(Victor.firstName);
