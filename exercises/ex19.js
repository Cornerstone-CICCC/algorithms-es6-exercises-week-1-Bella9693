/*
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/

const bark = function (num) {
  let shout = "";
  for (let i = 0; i < num; i++) {
    shout += "ha";
  }
  return shout;
};

function laugh(callback) {
  let message = callback(3);
  return message;
}

console.log(`I am ${emotions}, ${num}`);
