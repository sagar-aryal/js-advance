// Todays Topics

/* 
1. Prototyping
2. Inheritence
3. Context, this keyword
4. Set and Map
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

// Inheritance example
const parent = {
  value: 2,
  method() {
    return this.value + 1;
  },
};

const child = {
  // __proto__ sets the [[Prototype]] that inhiret propertie from parent.
  __proto__: parent,
  method() {
    return this.value + 5;
  },
};

console.log("parent", parent.method());
console.log("child", child.method());

const person = {
  firstName: "Sushil",
  lastName: "Pokhrel",
  // in getter we can't pass parameters
  get fullName() {
    return this.firstName + " " + this.lastName;
  },

  set setFirstName(name) {
    this.firstName = name;
  },

  // method is similar to setter
  /* setFirstName(name) {
    this.firstName = name;
  }, */
};

person.setFirstName = "Sagar";
console.log(person.fullName);

// Context
// In js this keyword refrence to an object
// In function this refer to Global Object, but arrow function doesn't work this keyword
// In event this refers to the element that received the event

let obj = {
  a: 1,
  method1() {
    console.log(this.a);
    let b = {
      c: this.a,
      method2() {
        console.log(this.a);
        console.log(this.c);
      },
    };
    b.method2();
  },
};

console.log(obj.method1());

// Set gives the unique elements from given array (but only for primitive data type)
const newSet = new Set([1, 2, 3, 3, 4, 1, 2, 7, 8, 4]);
console.log(newSet);

// Map store key value just like an object
const newMap = new Map();
newMap.set("firstName", "Sushil");
newMap.set("lastName", "Pokhrel");
console.log(newMap);
console.log(newMap.get("firstName")); // gives value of that key
console.log(newMap.has("lastName"));
console.log(newMap.size);

// In object, we use hasOwnProperty
console.log(parent.hasOwnProperty("value"));
