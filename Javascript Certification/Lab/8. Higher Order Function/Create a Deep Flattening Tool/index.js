function steamrollArray(nestedArray) {
  let result = [];
  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i])) {
      result.push(...steamrollArray(nestedArray[i]));
    } else {
      result.push(nestedArray[i]);
    }
  }

  return result;
}

// console.log(steamrollArray([[["a"]], [["b"]]]))
console.log(steamrollArray([1, [2], [3, [[4]]]]));
