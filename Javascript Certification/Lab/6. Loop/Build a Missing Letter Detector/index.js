function fearNotLetter(string) {
  let splitted = string.split("");
  let findedCode;
  for (let i = 0; i < splitted.length - 1; i++) {
    if (splitted[i].charCodeAt() - splitted[i + 1].charCodeAt() !== -1) {
      findedCode = String.fromCharCode(splitted[i].charCodeAt() + 1);
    }
  }

  return findedCode;
}

console.log(fearNotLetter("abce"));
