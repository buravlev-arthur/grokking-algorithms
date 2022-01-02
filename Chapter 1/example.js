const numbers = [1, 3, 7, 12, 15, 16, 22, 24, 28, 30];
const seekNumber = 24;

const findNumber = (numbers, n) => {
let low = 0;
let high = numbers.length - 1;

while (low <= high) {
  const mid = Math.round((low + high) / 2);
  if (numbers[mid] === n) {
    return mid;
  } else if (numbers[mid] > n) {
    high = mid - 1;
  }
  else {
    low = mid + 1;
  }
}

return false;
}

console.log(findNumber(numbers, seekNumber));