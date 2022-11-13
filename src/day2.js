// Todays Topics

/* 
1. Destructuring
2. Object Methods
3. Spread operator
4. Shallow copy and Deep copy
5. Arrow Function
6. Call, Apply and Bind
7. Callbacks
 */

const person = {
  firstName: "Sushil",
  lastName: "Pokhrel",
};

// Destructuring object => key should be exactly same
const firstNameWithoutDestructuring = person.firstName;
console.log("Without Destructuring", firstNameWithoutDestructuring);

const { firstName, lastName } = person;
console.log("With Destructuring", firstName + " " + lastName);

// Destructuring in array
/* const arr = [["Mountains", "Lakes"]];
const [first, second] = arr[0];
console.log(first, second); */

const arr = ["Mountains", "Lakes", "Seas", "Oceans", 24, true];
const [first, second, ...rest] = arr;
console.log(first, second, ...rest);

// for loop in object => for in
for (const key in person) {
  console.log(key); // gives keys
  console.log(person[key]); // gives values
}

// Object.keys and Object.values returns an array of keys and values
const keys = Object.keys(person);
console.log(keys);
const values = Object.values(person);
console.log(values);

// We can loop keys to get its values too as shown below
// const values = Object.keys(person).forEach((key) => console.log(person[key]));

// changing object to an array
const keyValuePair = Object.entries(person);
console.log(keyValuePair);

// for loop in array => for of
for (let [key, value] of keyValuePair) {
  console.log(key, value);
}

// We can spread for strings too
const str = "Hello";
console.log(...str);

// We can use spread operations for function arguments and parameters
function spreadFn(x, y, z) {
  console.log(x, y, z);
}
spreadFn(...[2, 4, 6]);

function sumOfNumbers(...args) {
  return args.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
  }, 0);
}
console.log(sumOfNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9));

// spread operator allows us to make a shallow copy but not a deep copy
const newPerson = { ...person };
console.log("newPerson", newPerson);

newPerson.firstName = "Sagar";
console.log("newPerson", newPerson);
console.log("person", person);

const personObj = {
  firstName: "Sagar",
  lastNameName: "Aryal",
  address: {
    temporary: "Nepal",
    permanent: "Finland",
  },
  behaviour: () => {
    return "Social and Friendly";
  },
};

/* const newPersonObj = { ...personObj };
newPersonObj.address.permanent = "London";
console.log("newPersonObj", newPersonObj); // permanent address: London
console.log("personObj", personObj); // permanent address: London
 */

// Instead we can use JSON stringfy method to perform deep copy only if there is no any methods in an object
// JSON => JavaScript Object Notation => doesn't contain any methods

const newPersonObj = JSON.parse(JSON.stringify(personObj));
newPersonObj.address.permanent = "London";
console.log("newPersonObj", newPersonObj); // permanent address: London
console.log("personObj", personObj); // permanent address: Finland

// We can use use Object.assign() if there is methods but not nested object
let copiedPersonObj = Object.assign({}, personObj);
copiedPersonObj.behaviour = "Rude";
console.log("copiedPersonObj", copiedPersonObj); // behaviour: Rude
console.log("personObj", personObj); // behaviour: Social and Friendly

// We can use Loadash, a JS library that is commonly used to perform deep copy

// Arrow Function => doesn't have scope and this keyword doesn't work with arrow function
// It's asign with variable as an anonymous function

const myFunction = () => {
  return "This is an arrow function";
};
console.log(myFunction());

// Call, Apply and Bind => use to change scope

const student = {
  firstName: "Sushil",
  getFirstName() {
    return this.firstName;
  },
};

function getStudentName(snack, hobbey) {
  console.log(this.getFirstName() + " loves " + snack + " and " + hobbey);
}
// getStudentName(); // this doesn't work as function has global scope
// call() and apply() call value and given arguments
// differences between call and apply is that with apply, agruments shoulb be passed in array
getStudentName.call(student, "sushi", "algorithms");
getStudentName.apply(student, ["sushi", "algorithms"]);

// bind() creates new function
let bindedFunction = getStudentName.bind(student);
console.log(bindedFunction);

// Callbacks
// A callback is a function passed as an argument to another function and run after another function has finished
// JavaScript functions are executed in the sequence they are called, not in the sequence they are defined

function print(statement) {
  console.log(statement);
}

function sum(x, y) {
  let sum = x + y;
  print(sum);
}

sum(1, 2);
console.log("A");

// Another example of callback
function isOdd(num) {
  return num % 2 !== 0;
}

function isEven(num) {
  return num % 2 === 0;
}

function filter(numbers, cb) {
  let result = [];
  for (const num of numbers) {
    if (cb(num)) {
      result.push(num);
    }
  }
  return result;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(filter(numbers, isOdd));
console.log(filter(numbers, isEven));
