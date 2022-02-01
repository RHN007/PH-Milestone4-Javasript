const numbers = [44, 23, 534, 32, 5, 78];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];

  sum = sum + element;
}
// console.log(sum);

function arrayTotal(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
  }
  return sum;
}

const total = arrayTotal(sum);
console.log(sum);
