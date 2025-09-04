const arr = [7, 1, 5, 3, 6, 4];

function maxProfit(arr) {
  let min = arr[0];
  let maxProfit = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] - min > maxProfit) {
      maxProfit = arr[i] - min;
    }
  }
  return maxProfit;
}

let profit = maxProfit(arr);

console.log(profit);
