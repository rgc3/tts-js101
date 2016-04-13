// Level 1:
// 1. Create a module that contains a Person. The Person should have a firstName, lastName, hairColor, eyeColor, and age.
// 2. Import the module in another file (using Node's "require function"), create a new Person that matches your tastes.
// 3. Change the properties of the Person using dot & array notation.
// 4. Provide them with a function to greet their creator.
// Level 3
// 1. Create 2 People, and have Person #1 greet Person #2 by name. (ex. "Hello Susan, my name is Seth!") (You would not pass "Susan" in as a String, but rather as a property of the other Person);

// function Person(firstName, lastName, hairColor, eyeColor, age) {
//   var myFirstName = firstName;
//   var myLastName = lastName;
//   var myHairColor = hairColor;
//   var myEyeColor = eyeColor;
//   var myAge = age;
//   return{
//     "first name": firstName,
//     "last name": lastname,
//     "hair color": hairColor,
//     "eye color": eyeColor,
//     "age"; age
//   };
// }
//
// var me = Person("Robert", "Cunningham", "brown", "blue", 39);
//
// console.log(me);


// Solution below

module.exports = function(firstName, lastName, hairColor, eyeColor, age) {
  var myFirstName = firstName;
  var myLastName = lastName;
  var myHairColor = hairColor;
  var myEyeColor = eyeColor;
  var myAge = age;

    function greetName(firstName) {
      console.log("hello " + firstName + ". My name is " + this.firstName);
    }

    return {
      firstname: firstName,
      greeting: greetName
    };
}
