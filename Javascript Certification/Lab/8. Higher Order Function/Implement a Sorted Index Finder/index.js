function getIndexToIns(array, number) {
  let sorted = array.sort((a, b) => a - b);
  let result = sorted.findIndex((element) => element >= number);

  if (result === -1) {
    return array.length;
  }
  return result;
}

console.log(getIndexToIns([3, 10, 5], 11));
