// Topics Includes

/* 
1. Classes
2. Inheritance
3. Fetch Call (Neywork requests)
4. Dependency Injection (DI) 
*/

// classes are the building block of object oriented programming. Its blueprint of any object
// Object is created from class

class Person {
  // Properties
  name = "Sushi";
  age = 35;

  // Method
  getName(name) {
    return name;
  }
}

// Inorder to call class we need to create new object of that class
const person1 = new Person();
const person2 = new Person();

console.log(person1.getName("Sagar"));
console.log(person2.getName("John"));

// Class Constructor
// constructor is a function and its called whenever an object is created

class Bike {
  // Properties
  /* name;
  model;
  color;
  price; */

  constructor(name, model, color, price) {
    this.name = name;
    this.model = model;
    this.color = color;
    this.price = price;
  }

  // Methods
  sound() {
    return "Vroom";
  }
}

const bike1 = new Bike("Honda", 2022, "red", 14999);
const bike2 = new Bike("Yamaha", 2018, "black", 9999);

console.log(bike1.name);
console.log(bike2.price);
console.log(bike1.sound());

// How this is done same in function. Both do same job but doing with class is new way of doing with ES6

/* 
function BikeFn(name, model, color, price) {
  this.name = name;
  this.model = model;
  this.color = color;
  this.price = price;
}

const bike3 = new BikeFn("Suzuki", 2020, "green", 5999);
console.log(bike3.name) 
*/

// Inheritance
// Inherit parents properties and can even change parent properties.
// Inheritance is useful for code reusability: reuse properties and methods of an existing class when we create a new class.

class Honda extends Bike {
  constructor(name, model, color, engine) {
    // The super() method refers to the parent class.
    // By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.
    super(name, model, color);
    this.engine = engine;
  }
  get engineNo() {
    return this.engine;
  }

  sound() {
    return "Hieuuuuu";
  }
}

const honda1 = new Honda("Suzuki", 2020, "green", 5999345566789);
console.log(honda1.engineNo);
console.log(honda1.sound());
