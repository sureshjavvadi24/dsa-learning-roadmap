const arr = ["S", "U", "R", "Y", "A"];

function reverseString(arr) {
  for (let i = 0; i < Math.floor(arr.length) / 2; i++) {
    let x = arr.length - 1 - i;

    let temp = arr[i];
    arr[i] = arr[x];
    arr[x] = temp;
  }
}

reverseString(arr);

console.log(arr);
