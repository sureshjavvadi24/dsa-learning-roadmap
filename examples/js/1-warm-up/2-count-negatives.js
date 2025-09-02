// Find the count of negative numbers in the array

function countNegatives(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) count++;
  }

  return count;
}

let numbers = [-12, 7, -5, 0, 18, -33];

let res = countNegatives(numbers);
console.log("Total count of negative numbers is", res);
