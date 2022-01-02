const arr = [12, 3, 16, 1, 2, 15, 10, 8, 20, 7, 5];

const findSmallestNumber = (arr) => {
  let smallestNumber = arr[0];
  let smallestNumberIndex = 0;

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] < smallestNumber) {
      smallestNumber = arr[i];
      smallestNumberIndex = i;
    }
  }
  return smallestNumberIndex;
}

const sortArray = (arr) => {
  const newArray = [];
  const tempArray = [...arr];

  for (let i = 0; i < arr.length; i += 1) {
    const smallestNumber = findSmallestNumber(tempArray);
    newArray.push(tempArray.splice(smallestNumber, 1)[0]);  
  }

  return newArray;
}

console.log(sortArray(arr));