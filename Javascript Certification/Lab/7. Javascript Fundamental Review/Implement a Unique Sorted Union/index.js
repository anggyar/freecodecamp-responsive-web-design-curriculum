function uniteUnique(...array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    // console.log("i: " + array[i])
    let currentArray = array[i];
    for (let j = 0; j < currentArray.length; j++) {
      // console.log("j:" + currentArray[j])
      let currentItem = currentArray[j];

      // Lakukan Skip kalau ada duplicate di array result
      let isDuplicate = false;
      // console.log(isDuplicate)
      for (let k = 0; k < result.length; k++) {
        if (result[k] === currentItem) {
          isDuplicate = true;
          break;
        }
      }

      // console.log(isDuplicate)
      if (!isDuplicate) {
        result.push(currentItem);
      }
    }
  }
  return result;
}

console.log(uniteUnique([1, 2, 3], [4, 5, 6], [1, 2, 3]));
