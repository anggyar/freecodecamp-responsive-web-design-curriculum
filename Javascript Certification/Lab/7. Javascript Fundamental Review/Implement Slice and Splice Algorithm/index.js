function frankenSplice(firstArr, secArr, index) {
  let copySecArr = secArr.slice();

  copySecArr.splice(index, 0, ...firstArr);
  return copySecArr;
}

console.log(frankenSplice([0, 1, 2, 3], [4, 5, 6], 2));
