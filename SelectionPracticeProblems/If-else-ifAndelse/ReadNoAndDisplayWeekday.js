const prompt = require('prompt-sync')();

const input = prompt("Enter a number between 1 and 7");

const number = Number(input);

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

if (number >= 1 && number <= 7) {
  const weekday = weekdays[number - 1];
  console.log(`The corresponding weekday is ${weekday}`);
} else {
  console.log("Invalid input: please enter a number between 1 and 7");
}
