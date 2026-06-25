let num = 5;

function factorialCalculator(num) {
  let result = 1;

  if (!num) {
    return console.log("Need number factorial");
  } else if (num < 1 && num > 20) {
    return console.log("Number should between 1 and 20");
  }

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
}

const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);
