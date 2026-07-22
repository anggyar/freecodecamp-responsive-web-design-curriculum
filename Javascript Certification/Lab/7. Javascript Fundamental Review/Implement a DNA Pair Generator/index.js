function pairElement(string) {
  let result = [];
  let base = ["A", "T", "C", "G"];
  let pair = ["T", "A", "G", "C"];

  for (let i = 0; i < string.length; i++) {
    let paired = [];
    for (let j = 0; j < base.length; j++) {
      if (string[i] === base[j]) {
        paired.push(base[j], pair[j]);
      }
    }
    result.push(paired);
  }

  return result;
}

console.log(pairElement("ATCG"));
