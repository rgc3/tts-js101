// we can require other files(or modules) in our NodeJS programs
var Person = require('./Person'); // the variable Person is now equal to the function we exported in the Person.js file

var creator = Person(
  "Robert", // firstName
  "Cunningham", // lastName
  "blue", // eyeColor
  39 // age
);

console.log(creator);
