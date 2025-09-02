function countDigit(num) {
  if (num === 0) return 1;

  let count = 0;

  // Match.abs converts -ve number into +ve
  num = Math.abs(num);
  while (num > 0) {
    // Match.abs removes the decimals
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

let number = -123456789;
let res = countDigit(number);

console.log(res);
