function palindrome(x) {
  if (x < 0) return false;
  let xCopy = x;
  let reverse = 0;

  while (x > 0) {
    let rem = Math.floor(x % 10);
    reverse = reverse * 10 + rem;
    x = Math.floor(x / 10);
  }
  return reverse === xCopy;
}

let num = -121;

let res = palindrome(num);

console.log(`Is ${num} palindrome ?. ${res}`);
