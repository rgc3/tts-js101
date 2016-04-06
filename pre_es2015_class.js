function Person(name, age) {
  var myName = name;
  var myAge = age;
  return{
    "name": myName,
    "age": myAge
  };
}

var me = Person("Roger", 55);
console.log(me);
