function reverseInteger(x) {
  let xCopy = x;
  let rev = 0;

  let limit = Math.pow(2, 31);

  if (x < -limit || x > limit) {
    return 0;
  }

  x = Math.abs(x);

  while (x > 0) {
    let last = x % 10;
    rev = rev * 10 + last;
    x = Math.floor(x / 10);
  }

  return xCopy < 0 ? -rev : rev;
}
let x = -1234567890;

let res = reverseInteger(x);

console.log(res);
