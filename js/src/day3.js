// Todays Topics

/* 
1. Promises
2. Asynchronous Function (async-await)
*/

// 1. Promises

// Why Promises were introduces?
// Before ES6, people were using callback functions to perform asynchronous tasks in JS. However they were of limited functionality and cause confusing with codes so promises were introduced
// Promises perform async tasks and prevents from callback hell
// We need to initialise promise with new key and they are always returned

function checksEvenOrOddNumber(num) {
  return new Promise((resolve, reject) => {
    if (typeof num !== "number") {
      reject("This is not a number");
    }

    if (num % 2 === 0) {
      resolve("This is an even number");
    }

    resolve("This is odd number");
  });
}

checksEvenOrOddNumber(2)
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

// Assignment : push all even numbers to an array

/* function pushEvenNumberToArray(num) {
  return new Promise((resolve, reject) => {
    let pushedArr = [];
    for (let i = 0; i <= num; i++) {
      if (i % 2 === 0) {
        // pushedArr.push(i);
        pushedArr = [...pushedArr, i];
      }
    }
    resolve(pushedArr);
  });
} */

pushEvenNumberToArray(10).then((value) => console.log(value));

// Annynomous or self closing function
(function () {
  console.log("This is a self closing or annonymous function!");
})();

// 2. Asynchronous Function
// The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains

async function returnsAPromise() {
  console.log(await checksEvenOrOddNumber(1));
  return 1;
}

returnsAPromise().then((value) => console.log(value));

// Above assignment using async method
async function pushEvenNumberToArray(num) {
  let pushedArr = [];
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      // pushedArr.push(i);
      pushedArr = await [...pushedArr, i];
    }
  }
  return pushedArr;
}

pushEvenNumberToArray(10);
