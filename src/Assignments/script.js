/* 
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.

Example 
input 3
output
["1","2","Fizz"]
HINT: loop from 1 to n(input)
check if the current element is divisible by 3, by 5 and by 3 and 5 based on that push either FizzBuzz/fizz/buzz on the array 
*/

const assignment1 = (num) => {
  let result = [];

  if (typeof num !== "number") {
    return "Please enter a number";
  }

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result = [...result, "FizzBuzz"];
    } else if (i % 3 === 0) {
      result = [...result, "Fizz"];
    } else if (i % 5 === 0) {
      result = [...result, "Buzz"];
    } else {
      result = [...result, i.toString()];
    }
  }

  return result;
};

console.log(assignment1(3));
// console.log(assignment1("3"));

/* 
Make a function that takes in input as 
[1,2,'Sushil',1,2,'Sushil','Sushil'] or any arbitrary array as an input.
The function should count the occurence of each item in array and return a object with the count
Example
Input
[1,2,'Sushil',1,2,'Sushil','Sushil']
Output
[{input :1, count : 2}, {input : 2, count : 2}, {input : 'Sushil', count : 3}]
 */

const assignment2 = (arr) => {
  let count = {};
  arr.forEach((element) => {
    count[element] = (count[element] || 0) + 1;
  });
  let output = [];
  for (let element in count) {
    output = [...output, { input: element, count: element }];
  }
  return output;
};

console.log(assignment2([1, 2, "Sushil", 1, 2, "Sushil", "Sushil"]));
