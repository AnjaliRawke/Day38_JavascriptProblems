function findMinMax(a, b, c) {
  
  const result1 = a + b * c;
  const result2 = a % b + c;
  const result3 = c + a / b;
  const result4 = a * b + c;
  
 
  const maxResult = Math.max(result1, result2, result3, result4);
  const minResult = Math.min(result1, result2, result3, result4);
  
  
  return { max: maxResult, min: minResult };
}


const input1 = 2;
const input2 = 4;
const input3 = 6;
const { max, min } = findMinMax(input1, input2, input3);
console.log(`The maximum result is ${max} and the minimum result is ${min}`);
