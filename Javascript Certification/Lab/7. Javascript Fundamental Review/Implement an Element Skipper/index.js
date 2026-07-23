function dropElements(arr, func) {
  let result = [];
  let startIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true) {
      startIndex = i;
      break;
    }
  }

  if (startIndex === -1) {
    return [];
  }

  for (let j = startIndex; j < arr.length; j++) {
    result.push(arr[j]);
  }

  return result;
}

console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  }),
);
