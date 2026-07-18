function sumAll([a, b]) {
  let result = 0;
  let min = Math.min(a, b);
  let max = Math.max(a, b);

  // Rumus "sinting" deret aritmatika, ditemukan oleh Carl Friedrich Gauss
  // Man, it so awesome :D
  let count = max - min + 1;
  result = ((max + min) * count) / 2;
  return result;
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 9]));
// let abs = Math.abs(10 - 5)
// console.log(abs)
