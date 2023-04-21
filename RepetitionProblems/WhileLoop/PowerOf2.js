const n = 8; 

for (let i = 0; i <= n; i++) {
  const powerOf2 = 2 ** i; 
  
  if (powerOf2 > 256) {
    break;
  }
  
  console.log(`2^${i} = ${powerOf2}`);
}
