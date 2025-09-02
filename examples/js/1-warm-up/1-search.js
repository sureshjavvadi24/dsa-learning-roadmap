// Search for the index of the number in the array, if the number is not found, return -1

function search(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

let numbers = [15, 8, 27, 9, 42, 19];

let res = search(numbers, 9);

console.log(res);
