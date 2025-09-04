const arr = [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4];

function removeDuplicates(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[x]) {
      x += 1;
      arr[x] = arr[i];
    }
  }
  return x + 1;
}

let uniqueElements = removeDuplicates(arr);
console.log(uniqueElements);
console.log(arr);
