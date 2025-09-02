// find the largest number in the array

function findLargest(arr) {
  let largestNum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) largestNum = arr[i];
  }

  return largestNum;
}
let numbers = [15, 8, 27, 3, 42, 19];

let res = findLargest(numbers);

console.log("Largest number is", res);

// find the smallest number in the array

function findSmallest(arr) {
  let smallestNum = Infinity;

  for (let i = 0; i < arr.length; i++) smallestNum = arr[i];

  return smallestNum;
}

let res1 = findSmallest(numbers);

console.log("Smallest number is", res1);
