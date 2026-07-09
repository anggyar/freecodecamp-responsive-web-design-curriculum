function findElement(array, func) {
  let result;
  for (let i = 0; i < array.length; i++) {
    if (func(array[i])) {
      result = array[i];
      break;
    }
  }

  return result;
}

console.log(
  findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  }),
);
