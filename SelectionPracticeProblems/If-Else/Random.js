const values = [];
for (let i = 0; i < 5; i++) {
  values.push(Math.floor(Math.random() * 900) + 100);
}


const minValue = Math.min(...values);
const maxValue = Math.max(...values);


console.log("Generated values:", values);
console.log("Minimum value:", minValue);
console.log("Maximum value:", maxValue);
