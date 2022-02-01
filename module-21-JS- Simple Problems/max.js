const business = 350;
const minister = 250;
const army = 600;

//bangla system

// if (business > minister) {
//   console.log("businee person er pola is better");
// } else {
//   console.log("Minister er pola is better");
// }

const larger = findLargest(354, 241);
console.log("largset is", larger);

//compare 3
/*if (business > minister && business > army) {
  console.log("business is bigger");
} else if ((minister > business) & (minister > army)) {
  console.log("Army is bigger");
} else {
  console.log("army is bigger");
 }*/

var max = Math.max(business, minister, army);

// function findLargest(first, second) {
//   if (first > second) {
//     return first;
//   } else {
//     return second;
//   }
// }

//Task 1: create a function that takes three numbers as input parameter and returns you the largest number of the three.
function findLargest(first, second, third) {
  if (first > second && first > third) {
    return first;
  } else if (second > first && second > third) {
    return second;
  } else {
    return third;
  }
}
//Taken from stackOverflow
function get_max(num1, num2, num3) {
  var max = Math.max(num1, num2, num3);
  return max;
}

alert(get_max(20, 3, 5)); // 20

const largest = findLargest(25, 20, 35);
console.log("The largest number among three is ", largest);

//Task 2: find the smallest of three numbers.

var smallest = Math.min(38, 15, 52);

console.log("smallest number is", smallest);
