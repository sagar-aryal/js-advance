// Todays Topics

/* 
1. Prototyping
2. Inheritence
 */

function Person(name) {
  this.name = name;
  this.nationality1 = "English";

  this.getName = function () {
    return this.name;
  };
}

const person1 = new Person("Sushil");
// const person2 = new Person("John");

const person2 = person1;

person2.name = "Alex";
person1.age = 32;

// Both person1 and person2 values will be changed
console.log(person1.name, person1.age);
console.log(person2.name, person2.age);
console.log(person1.getName());

// We cannot add a new property directly to an existing object constructor
Person.nationality = "Finnish";
console.log(person1.nationality);

// we can do this by two ways, either adding a new property to a constructor or using prototype key word
Person.prototype.nationality2 = "Finnish";
console.log(person1.nationality1);
console.log(person1.nationality2);

const arr = new Array(1, 2, 3);
console.log(arr);
