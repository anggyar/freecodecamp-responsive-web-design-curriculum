function diffArray(refArr, compArr) {
  let final = [];
  const result = refArr.filter((el) => !compArr.includes(el));
  const result2 = compArr.filter((el) => !refArr.includes(el));
  final = [...result, ...result2];
  return final;
}

console.log(
  diffArray(["diamond", "stick", "apple"], ["stick", "emerald", "bread"]),
);
