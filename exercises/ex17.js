/*
Write an anonymous function expression 
that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
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

console.log(laugh(bark));
