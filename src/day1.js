// Todays Topics

/* 
1. Destructuring
2. Object Methods
3. Spread operator
4. Shallow copy and Deep copy
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
