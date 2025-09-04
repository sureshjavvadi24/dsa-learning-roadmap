const arr = [1, 2, 3, , 3, 3, 4, 6, 7, 8, 8, 3, 5, 3, 4, 5];
let val = 3;

function removeElement(arr, val) {
  let count = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      arr.splice(i, 1);
      count--;
    }
  }
  return count;
}

let dup = removeElement(arr, val);

console.log(dup);
console.log(arr);

const arr2 = [1, 2, 3, 4, 5];
let val2 = 3;

function removeElement2(arr, val) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != val) {
      arr[x] = arr[i];
      x++;
    }
  }
  return x;
}

let dup2 = removeElement2(arr2, val2);

console.log(dup2);
console.log(arr2);
