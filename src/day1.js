// Todays Topics

/* 
1.Prototyping
 */

function Person(name) {
  this.name = name;

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

const arr = new Array(1, 2, 3);
console.log(arr);
