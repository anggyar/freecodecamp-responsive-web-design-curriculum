function sumFibs(number) {
  let fibonacciArray = [0, 1];
  let result = 0;
  for (let i = 2; ; i++) {
    let sum = fibonacciArray[i - 1] + fibonacciArray[i - 2];

    if (sum > number) {
      break;
    }
    fibonacciArray.push(sum);
  }

  for (let j = 0; j < fibonacciArray.length; j++) {
    if (fibonacciArray[j] % 2 === 1) {
      result += fibonacciArray[j];
    }
  }
  console.log(fibonacciArray);
  return result;
}

console.log(sumFibs(1000));
