// find the second largest number in the array

function secondLargest(arr) {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  if ((arr.length, 0)) return "Array should have at least 2 elements";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && secondLargest != firstLargest)
      secondLargest = arr[i];
  }

  return secondLargest;
}

let numbers = [22, 7, 14, 3, 0, 9];

let res = secondLargest(numbers);
console.log("The second largest number is", res);
